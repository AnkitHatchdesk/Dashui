import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api"; 
import { toast } from "react-toastify";

const ProjectContext = createContext();

export const useProject = () => {
  return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
  const [severityOptions, setSeverityOptions] = useState([]);
  const [managers, setManagers] = useState([]);
  const [clients, setClients] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const [searchQuery, setSearchQuery] = useState();
  const[showModal , setShowModal] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [projectData, setProjectData] = useState({
    id: "",
    title: "",
    severityLevel: "",
    startDate: "",
    deadline: "",
    teamSize: 1,
    description: "",
    manager: "",
    technologyStack: "",
    client: "",
    imagePath: null,
  });
  const navigate = useNavigate();
  const [pageSize] = useState(10);


  // console.log("projectToDelete" , projectToDelete)

//using fatching data with Id
  const fetchProjectData = async (id) => {
    try {
      const response = await axiosInstance.get(`/Project/${id}`);
      console.log("Project Data:", response.data);
      setProjectData((prevData) => ({
        ...prevData,
        title: response.data.project.title,
        id: parseInt(id),
        severityLevel: response.data.project.severityLevel,
        startDate: response.data.project.startDate,
        deadline: response.data.project.deadline,
        teamSize: response.data.project.teamSize,
        description: response.data.project.projDescr,
        manager: response.data.project.manager,
        technologyStack: response.data.project.department,
        client: response.data.project.client,
        imagePath: response.data.project.imagePath,
      }));
    } catch (err) {
      console.error("Failed to fetch project data:", err);
    }
  };

  const validateForm = () => {
    const validationErrors = {};
  
    if (!projectData.title.trim()) {
      validationErrors.title = "Title is required.";
    }
  
    // Severity Level ko string mein convert karke trim 
    if (!String(projectData.severityLevel).trim()) {
      validationErrors.severityLevel = "Severity Level is required.";
    }
  
    const startDate = projectData.startDate
      ? new Date(projectData.startDate)
      : null;
    const endDate = projectData.deadline
      ? new Date(projectData.deadline)
      : null;
  
    if (!startDate || isNaN(startDate.getTime())) {
      validationErrors.startDate = "Valid Start Date is required.";
    }
  
    if (!endDate || isNaN(endDate.getTime())) {
      validationErrors.deadline = "Valid Deadline is required.";
    } else if (startDate && endDate && endDate < startDate) {
      validationErrors.deadline = "Deadline cannot be before Start Date.";
    }
  
    if (
      !projectData.teamSize ||
      isNaN(projectData.teamSize) ||
      projectData.teamSize <= 0
    ) {
      validationErrors.teamSize = "Team Size must be a positive number.";
    }
  
    if (!projectData.description.trim()) {
      validationErrors.description = "Project description is required.";
    }
  
    if (!String(projectData.manager).trim()) {
      validationErrors.manager = "Manager is required.";
    }

    if (!String(projectData.technologyStack).trim()) {
      validationErrors.technologyStack = "Technology Stack is required.";
    }
  
    if (!String(projectData.client).trim()){
      validationErrors.client = "Client is required.";
    }
  
    setError(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };
  
  // Fetch projects with pagination
  useEffect(() => {
    setLoading(true);
    fetchDropdownData();
    fetchProjects();
  }, [currentPage]);


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchProjectsWithSearch();
    fetchProjectData();
  };

  const fetchDropdownData = async () => {
    try {
      const severityResponse = await axiosInstance.get("/GetSeverityLevel");
      const managerResponse = await axiosInstance.get("/GetManagers");
      const clientResponse = await axiosInstance.get("/GetAllClients");
      const technologyResponse = await axiosInstance.get("/GetDepartment");

      setSeverityOptions(severityResponse.data);
      setManagers(managerResponse.data);
      setClients(clientResponse.data);
      setTechnologies(technologyResponse.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch dropdown data.");
      setLoading(false);
    }
  };

  const fetchProjectsWithSearch = async () => {
    try {
      const searchParams = new URLSearchParams({
        query: searchQuery || "",
        pageNumber: currentPage,
        pageSize: pageSize,
      });

      // console.log("sercah params", searchParams.toString());

      const response = await axiosInstance.get(
        `/SearchProjects?${searchParams.toString()}`
      );
      setProjects(response.data.projects);
      setTotalPages(response.data.totalPages);
      setTotalEntries(response.data.total);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/GetAllProject?pageNumber=${currentPage}&pageSize=${pageSize}`
      );
      setProjects(response.data.projects);
      setTotalPages(response.data.totalPages);
      setTotalEntries(response.data.total);
    } catch (err) {
      setError("Failed to fetch projects.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    const values = e.target.value;
    setSearchQuery(values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({ ...prevData, [name]: value }));

    setError((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (updatedErrors[name]) {
        delete updatedErrors[name];
      }
      return updatedErrors;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProjectData((prevData) => ({ ...prevData, imagePath: file }));
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.error("Validation failed.");
      return;
    }
    setLoading(true);

    const startDate = projectData.startDate
      ? new Date(projectData.startDate)
      : null;
    const endDate = projectData.deadline
      ? new Date(projectData.deadline)
      : null;

    // Check if dates are valid
    if (
      !startDate ||
      isNaN(startDate.getTime()) ||
      !endDate ||
      isNaN(endDate.getTime())
    ) {
      console.error("Invalid date value(s)");
      setLoading(false);
      return;
    }

    // Format dates to "yyyy-MM-dd"
    const formattedStartDate = startDate.toISOString().split("T")[0];
    const formattedEndDate = endDate.toISOString().split("T")[0];

    // Prepare FormData
    const formData = new FormData();
    formData.append("title", projectData.title);
    formData.append("severityLevel", projectData.severityLevel);
    formData.append("startDate", formattedStartDate);
    formData.append("deadline", formattedEndDate);
    formData.append("teamSize", projectData.teamSize);
    formData.append("projDescr", projectData.description);
    formData.append("manager", projectData.manager);
    formData.append("department", projectData.technologyStack);
    formData.append("client", projectData.client);

    // Append image if available
    if (projectData.imagePath) {
      formData.append("imageFile", projectData.imagePath);
    } else {
      console.warn("No image file selected");
    }

    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };

      if (projectData.id) {
        const response = await axiosInstance.put(
          `/UpdateProject/${projectData.id}`,
          formData,
          config
        );
        console.log("response edit", response.data);
        if (response.data) {
          await fetchProjects();
          resetForm();
          navigate("/projects");
          toast.success("Project updated successfully!");
        } else {
          setError("Project update failed. No response data.");
          toast.error("Project update failed.");
        }
      } else {
        const response = await axiosInstance.post(
          "/AddProject",
          formData,
          config
        );

        // console.log("response data", response.data);
        if (response.data) {
          await fetchProjects();
          resetForm();
          navigate("/projects");
          toast.success("Project Added successfully!");
        } else {
          toast.error("Failed to add project.");
        }
      }
    } catch (err) {
      // console.error("Error:", err);
      setError("Failed to add/edit project.");
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setProjectData({
      title: "",
      severityLevel: "",
      startDate: "",
      deadline: "",
      teamSize: "",
      description: "",
      manager: "",
      technologyStack: "",
      client: "",
      imagePath: null,
      id: null,
    });
  };

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOpenModal = (id) => {
    // console.log("Id modal" , id)
    setProjectToDelete(id);
    setShowModal(true);
  };

  const handleCloseModal = ()=>{
    setShowModal(false)
  }

 

  const handleDelete = async (id) => {
    // alert("hi")
    // console.log("Id" , id)
    try {
      const response = await axiosInstance.delete(`/DeleteProject?id=${id}`);

      // console.log("response " , response)
  
      if (response.status === 200) {
        // console.log("Project deleted successfully");
        await fetchProjects();
        toast.success("Project Deleted Successfully.")
        setShowModal(false)

      } else {
        console.error("Failed to delete project");
        toast.error("Failed to add project.");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Something went wrong!");
      
    }
  };
  
  
  // Get project indexes for pagination
  const getStartIndex = () => (currentPage - 1) * pageSize + 1;
  const getEndIndex = () => Math.min(currentPage * pageSize, totalEntries);

  return (
    <ProjectContext.Provider
      value={{
        severityOptions,
        managers,
        clients,
        technologies,
        loading,
        error,
        handleChange,
        handleFileChange,
        projectData,
        projects,
        handlePageChange,
        handleProjectSubmit,
        totalPages,
        currentPage,
        getStartIndex,
        getEndIndex,
        totalEntries,
        setProjectData,
        error,
        handleSearchChange,
        searchQuery,
        handleSearchSubmit,
        fetchProjectData,
      
        handleCloseModal,
        handleDelete,
        showModal,
        projectToDelete,
        handleOpenModal

        // handleEditproject
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
