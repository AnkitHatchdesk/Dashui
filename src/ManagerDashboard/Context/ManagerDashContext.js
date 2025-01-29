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
  const [Tasks, setTasks] = useState([]);
  const [error, setError] = useState({});
  const [pageSize] = useState(10);
  const [showModal, setShowModal] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState(null);



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


  const setTaskIdInContext = (id) => {
    setTaskId(id);
  };


  const handleOpenModal = (id) => {
    setProjectToDelete(id);
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false)
  }


  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`/Task/${id}`);
      if (response.status === 200) {
        toast.success("Task Deleted Successfully.")
        await fetchTasks(projectId);
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
    const files = Array.from(e.target.files);
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
      setError("Failed to fetch dropdown data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchDropdownData();

  }, []);



  const handleTaskSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.error("Validation failed.");
      return;
    }
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

    console.log("Formatted Start Date:", formattedStartDate);
    console.log("Formatted End Date:", formattedEndDate);

    const formData = new FormData();
    formData.append("taskTitle", TaskData.taskTitle);
    formData.append("severityLevel", TaskData.severityLevel);
    formData.append("startDate", formattedStartDate);
    formData.append("endDate", formattedEndDate);
    formData.append("taskDescr", TaskData.taskDescr);
    formData.append("assignedTo", TaskData.AssignManager);
    formData.append("status", TaskData.status);
    formData.append("progress", TaskData.progress);


    // Append all selected files
    if (TaskData.imagePath && TaskData.imagePath.length > 0) {
      TaskData.imagePath.forEach((file, index) => {
        formData.append(`imagePath[${index}]`, file);
      });
    } else {
      console.warn("No attachments selected");
    }

    console.log("Form Data Before API Call:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
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
          navigate(`/ManageTask/${taskId}`);
          resetForm();
          await fetchTasks(projectId);
          toast.success("Task updated successfully!");
        } else {
          setError("Task update failed. No response data.");
          toast.error("Project update failed.");
        }
      } else {
        const response = await axiosInstance.post(`/AddTask/${taskId}`, formData, config);
        if (response.data) {
          navigate(`/ManageTask/${taskId}`);
          resetForm();
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

  const validateForm = () => {
    const validationErrors = {};

    if (!TaskData.taskTitle.trim()) {
      validationErrors.taskTitle = "TaskTitle is required.";
    }

    // Severity Level ko string mein convert karke trim 
    if (!String(TaskData.severityLevel).trim()) {
      validationErrors.severityLevel = "Severity Level is required.";
    }

    const startDate = TaskData.startDate
      ? new Date(TaskData.startDate)
      : null;
    const endDate = TaskData.endDate
      ? new Date(TaskData.endDate)
      : null;

    if (!startDate || isNaN(startDate.getTime())) {
      validationErrors.startDate = "Valid Start Date is required.";
    }

    if (!endDate || isNaN(endDate.getTime())) {
      validationErrors.endDate = "Valid Deadline is required.";
    } else if (startDate && endDate && endDate < startDate) {
      validationErrors.endDate = "Deadline cannot be before Start Date.";
    }


    if (!TaskData.taskDescr.trim()) {
      validationErrors.taskDescr = "Task description is required.";
    }

    if (!String(TaskData.AssignManager).trim()) {
      validationErrors.AssignManager = "Manager is required.";
    }


    setError(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };





  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));

    setError((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (updatedErrors[name]) {
        delete updatedErrors[name];
      }
      return updatedErrors;
    });
  };

  const fetchProjectById = async () => {
    setLoading(true)
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
    console.log("projectId in fetchTasks", projectId);
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/GetAllTask/${projectId}?pageNumber=${currentPage}&pageSize=${pageSize}`
      );

      console.log("response task", response.data)
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
    if (managerId) {
      FetchProjects(managerId);
    }
  }, [managerId]);


  const resetForm = () => {
    setTaskData({
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
  };

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
        setTaskIdInContext,
        fetchTasks,
        error


      }}
    >
      {children}
    </ManagerDashContext.Provider>
  );
};
