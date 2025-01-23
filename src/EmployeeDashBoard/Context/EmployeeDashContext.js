import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api";

const EmployeeDashContext = createContext();

export const useEmployeeDash = () => {
  return useContext(EmployeeDashContext);
};

export const EmployeeDashProvider = ({ children }) => {
  const navigate = useNavigate();
  const [empProjects, setEmpProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [groupedTasks, setGroupedTasks] = useState({
    Todo: [],
    InProgress: [],
    Done: []
  });


  const changeStatus = async (taskId ) => {
    const payload = {
      status : newStatus
    }
    try {
      const response = await axiosInstance.put(`/ChangeStatus/${taskId}`, payload);
      console.log("Task status updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };


  // Fetch projects initially
  const FetchProjects = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      console.log("Name ID:", userData.nameid);
      try {
        const response = await axiosInstance.get(`/GetProjectByEmployee?empId=${userData.nameid}`);
        console.log("response data", response.data);
        setEmpProjects(response.data);
      } catch (err) {
        console.error("Failed to fetch projects.", err);
      }
    } else {
      console.error("No user data found in localStorage");
    }
  };

  // Initialize projects on component mount
  useEffect(() => {
    console.log("render projects");
    FetchProjects();
  }, []);

  // Update grouped tasks based on selected projectId
  useEffect(() => {
    console.log("selectedProjectId in useEffect", selectedProjectId);

    if (selectedProjectId !== null && empProjects.length > 0) {
      const selectedProject = empProjects.find(
        (project) => project.projectId === selectedProjectId
      );

      if (selectedProject) {
        const grouped = {
          Todo: [],
          InProgress: [],
          Done: []
        };

        selectedProject.taskDetails.forEach((task) => {
          if (task.statusId === 1) {
            grouped.Todo.push(task);
          } else if (task.statusId === 2) {
            grouped.InProgress.push(task);
          } else if (task.statusId === 6) {
            grouped.Done.push(task);
          }
        });

        setGroupedTasks(grouped); 
      }
    }
  }, [empProjects, selectedProjectId]);

  // Handle project click to set selectedProjectId and navigate
  const handleProjectClick = (projectId) => {
    localStorage.setItem('selectedProjectId', projectId);
    setSelectedProjectId(projectId);
    navigate(`/Employee/tasks/${projectId}`);
  };

  // Retrieve stored projectId from localStorage on initial load
  useEffect(() => {
    const storedProjectId = localStorage.getItem('selectedProjectId');
    console.log("storedProjectId from localStorage", storedProjectId);

    if (storedProjectId) {
      // Only set selectedProjectId if not already set
      if (!selectedProjectId) {
        setSelectedProjectId(storedProjectId);
        navigate(`/Employee/tasks/${storedProjectId}`); 
      }
    }
  }, []); 

  return (
    <EmployeeDashContext.Provider
      value={{
        empProjects,
        handleProjectClick,
        groupedTasks
      }}
    >
      {children}
    </EmployeeDashContext.Provider>
  );
};
