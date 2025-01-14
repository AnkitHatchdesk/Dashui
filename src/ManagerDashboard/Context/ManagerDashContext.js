import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import axiosInstance from "../../api";

const ManagerDashContext = createContext();

export const useManagerDash = () => {
  return useContext(ManagerDashContext);
};

export const ManagerDashProvider = ({ children }) => {
  const navigate = useNavigate();
  const [taskId, setTaskId] = useState(null);
  const [projects, setProjects] = useState([]);
  const [severityOptions, setSeverityOptions] = useState([]);
  const [status, setStatus] = useState([]);
  const [Employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [managerId, setManagerId] = useState(null);
  const [projectId, setprojectId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const [Tasks, setTasks] = useState([])
  const [pageSize] = useState(10);
  const [showModal, setShowModal] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState(null);

  console.log("projectId" , projectId)

  
  
  const [TaskData, setTaskData] = useState({
    id: "",
    taskTitle: "",
    severityLevel: "",
    status: "",
    startDate: "",
    endDate: "",
    taskDescr: "",
    AssignManager: "",
    progress: "",
    imagePath: null,
  });
  
  console.log("TaskData id" , TaskData)

  console.log("TaskId" , taskId)

  const setTaskIdInContext = (id) => {
    setTaskId(id);
  };

  console.log("projects in context with manager dashboard", projects)

  console.log("TaskData in context", TaskData)


  const handleOpenModal = (id) => {
    alert("hi")
    // console.log("Id modal" , id)
    setProjectToDelete(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false)
  }


  const handleDelete = async (id) => {
    // alert("hi")
    // console.log("Id" , id)
    try {
      const response = await axiosInstance.delete(`/Task/${id}`);

      // console.log("response " , response)

      if (response.status === 200) {
        // console.log("Project deleted successfully");
        await fetchTasks(projectId);
        toast.success("Task Deleted Successfully.")
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


  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    setTaskData((prevState) => ({
      ...prevState,
      imagePath: files,
    }));
  };

  const fetchTaskById = async (id) => {
    try {
      const response = await axiosInstance.get(`/Task/${id}`);
      console.log("Task Data:", response.data);
      setTaskData((prevData) => ({
        ...prevData,
        taskTitle: response.data.taskTitle,
        taskDescr: response.data.taskDescr,
        id: parseInt(id),
        severityLevel: response.data.severityLevel,
        AssignManager: response.data.assignedTo,
        startDate: response.data.startDate,
        endDate: response.data.endDate,
        status: response.data.status,
        progress: response.data.progress,
        imagePath: response.data.imagePath,
      }));
    } catch (err) {
      console.error("Failed to fetch project data:", err);
    }
  };



  const fetchDropdownData = async () => {
    try {
      const status = await axiosInstance.get("/GetStatus");
      const severityResponse = await axiosInstance.get("/GetSeverityLevel");
      const employees = await axiosInstance.get("/api/GetAllEmployee");

      console.log("employees", employees)
      setSeverityOptions(severityResponse.data);
      setStatus(status.data);
      setEmployees(employees.data)
      setLoading(false);
    } catch (err) {
      // setError("Failed to fetch dropdown data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchDropdownData();

  }, []);



  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const startDate = TaskData.startDate ? new Date(TaskData.startDate) : null;
    const endDate = TaskData.endDate ? new Date(TaskData.endDate) : null;

    if (!startDate || isNaN(startDate.getTime()) || !endDate || isNaN(endDate.getTime())) {
      console.error("Invalid date value(s)");
      setLoading(false);
      return;
    }

    const formattedStartDate = startDate.toISOString().split("T")[0];
    const formattedEndDate = endDate.toISOString().split("T")[0];

    const formData = new FormData();
    formData.append("taskTitle", TaskData.taskTitle);
    formData.append("severityLevel", TaskData.severityLevel);
    formData.append("startDate", formattedStartDate);
    formData.append("endDate", formattedEndDate);
    formData.append("taskDescr", TaskData.description);
    formData.append("assignedTo", TaskData.AssignManager);
    formData.append("status", TaskData.status);
    formData.append("progress", TaskData.progress);
    // formData.append("projID", taskId);


    // Append all selected files
    if (TaskData.imagePath && TaskData.imagePath.length > 0) {
      TaskData.imagePath.forEach((file, index) => {
        formData.append(`imagePath[${index}]`, file);
      });
    } else {
      console.warn("No attachments selected");
    }

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
  }


    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      if (TaskData.id) {
        
        const response = await axiosInstance.put(
          `/UpdateTask/${TaskData.id}`,
          formData,
          config
        );
        console.log("response edit", response.data);
        if (response.data) {
          await fetchTasks(projectId);
          // resetForm();
          navigate("/ManageTask");
          toast.success("Task updated successfully!");
        } else {
          // setError("Project update failed. No response data.");
          toast.error("Project update failed.");
        }
      } else {
        const response = await axiosInstance.post(`/AddTask/${taskId}`, formData, config);
        if (response.data) {
          navigate("/ManageTask");
          await fetchTasks();
          toast.success("Project added successfully!");
        } else {
          toast.error("Failed to add project.");
        }
      }
    }
    catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };




  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));

    // setError((prevErrors) => {
    //   const updatedErrors = { ...prevErrors };
    //   if (updatedErrors[name]) {
    //     delete updatedErrors[name];
    //   }
    //   return updatedErrors;
    // });
  };

  const fetchProjectById = async () => {
    try {
      const response = await axiosInstance.get(
        `/GetAllProject?pageNumber=${currentPage}&pageSize=${pageSize}`
      );

      console.log("response data", response.data.projects[0]?.id)

      setprojectId(response.data.projects[0]?.id)
    } catch (err) {
      // setError("Failed to fetch projects.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchTasks = async (projectId) => {
    console.log("projectId in fetchTasks", projectId)
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/GetAllTask/${projectId}?pageNumber=${currentPage}&pageSize=${pageSize}`
      );

      console.log("response tasks", response.data)
      setTasks(response.data.totaltasks);
      setTotalPages(response.data.totalPages);
      setTotalEntries(response.data.total);
    } catch (err) {
      // setError("Failed to fetch projects.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };



  const fetchManagerId = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/GetManagers");
      console.log("response", response.data);
      const managerId = response.data[0]?.id;
      setManagerId(managerId);
    } catch (error) {
      console.error("Failed to fetch managerId", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManagerId();
    fetchProjectById()
  }, []);



  const FetchProjects = async (managerId) => {
    console.log("managerId in fetchprojects", managerId);
    if (!managerId) return; // If no managerId, do not fetch projects
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/GetProjectByManager?managerId=${managerId}`);
      // console.log("response data", response.data);
      setProjects(response.data);
    } catch (err) {
      console.error("Failed to fetch projects.", err);
    } finally {
      setLoading(false);
    }
  };



  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    fetchTasks(projectId);

  }, [projectId]);



  useEffect(() => {
    if (managerId) {
      FetchProjects(managerId);
    }
  }, [managerId]);



  const getStartIndex = () => (currentPage - 1) * pageSize + 1;
  const getEndIndex = () => Math.min(currentPage * pageSize, totalEntries);
  return (
    <ManagerDashContext.Provider
      value={{
        projects,
        loading,
        handleFileChange,
        severityOptions,
        handleChange,
        TaskData,
        Employees,
        handleTaskSubmit,
        handlePageChange,
        totalEntries,
        totalPages,
        Tasks,
        getStartIndex,
        status,
        getEndIndex,
        fetchTaskById,
        handleCloseModal,
        handleDelete,
        handleOpenModal,
        showModal,
        projectToDelete,
        setTaskIdInContext

      }}
    >
      {children}
    </ManagerDashContext.Provider>
  );
};
