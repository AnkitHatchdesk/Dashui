import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api";

const EmployeeDashContext = createContext();

export const useEmployeeDash = () => {
  return useContext(EmployeeDashContext);
};

export const EmployeeDashProvider = ({ children }) => {
  const navigate = useNavigate();
  const [Status, setStatus] = useState([]);
  const [empProjects, setEmpProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [groupedTasks, setGroupedTasks] = useState({
    Todo: [],
    InProgress: [],
    Done: [],
  });

  useEffect(() => {
    // Fetch the status list from the backend
    const fetchStatuses = async () => {
      try {
        const response = await axiosInstance.get('/GetStatus');
        const filteredStatuses = response.data.filter(status => 
          [1, 2, 6].includes(status.statusId) // Only keep statuses with statusId 1, 2, and 6 (for example)
        )
        setStatus(filteredStatuses); // Store statuses in state
      } catch (error) {
        console.error("Error fetching statuses:", error);
      }
    };

    fetchStatuses();
  }, []);

  const handleChange = (event, taskID) => {
    const newStatusId = event.target.value;
    handleStatusChange(taskID, newStatusId); // Call handleStatusChange to update status
  };

  const handleStatusChange = async (taskID, newStatusId) => {
    const statusId = parseInt(newStatusId, 10); // Ensure the statusId is an integer before sending it
    const updatedGroupedTasks = { ...groupedTasks };

    // Update the groupedTasks immediately in the UI
    for (const status in updatedGroupedTasks) {
      const taskIndex = updatedGroupedTasks[status].findIndex((task) => task.taskID === taskID);
      if (taskIndex > -1) {
        updatedGroupedTasks[status][taskIndex].statusId = statusId; // Update task status
        // Move the task to the correct group based on the new status
        const task = updatedGroupedTasks[status].splice(taskIndex, 1)[0];
        if (statusId === 1) updatedGroupedTasks.Todo.push(task);
        else if (statusId === 2) updatedGroupedTasks.InProgress.push(task);
        else if (statusId === 6) updatedGroupedTasks.Done.push(task);
        break;
      }
    }

    // Update local state and localStorage immediately
    setGroupedTasks(updatedGroupedTasks);
    localStorage.setItem("groupedTasks", JSON.stringify(updatedGroupedTasks));

    // Send the status change to the backend
    try {
      const payload = { Status: statusId };
      const response = await axiosInstance.put(`/ChangeStatus/${taskID}`, payload);

      if (response.status === 200) {
        console.log("Status updated successfully.");
      }
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  const FetchProjects = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      try {
        const response = await axiosInstance.get(
          `/GetProjectByEmployee?empId=${userData.nameid}`
        );
        setEmpProjects(response.data);
      } catch (err) {
        console.error("Failed to fetch projects.", err);
      }
    } else {
      console.error("No user data found in localStorage");
    }
  };

  useEffect(() => {
    FetchProjects();
  }, []);

  useEffect(() => {
    if (selectedProjectId !== null && empProjects.length > 0) {
      const selectedProject = empProjects.find(
        (project) => project.projectId === selectedProjectId
      );

      if (selectedProject) {
        const grouped = {
          Todo: [],
          InProgress: [],
          Done: [],
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
        localStorage.setItem("groupedTasks", JSON.stringify(grouped));
      }
    }
  }, [empProjects, selectedProjectId]);

  useEffect(() => {
    const storedGroupedTasks = localStorage.getItem("groupedTasks");

    if (storedGroupedTasks) {
      try {
        const parsedTasks = JSON.parse(storedGroupedTasks);
        if (parsedTasks && Object.keys(parsedTasks).length > 0) {
          setGroupedTasks(parsedTasks);
        }
      } catch (error) {
        console.error("Error parsing stored tasks:", error);
        setGroupedTasks({
          Todo: [],
          InProgress: [],
          Done: [],
        });
      }
    } else {
      setGroupedTasks({
        Todo: [],
        InProgress: [],
        Done: [],
      });
    }
  }, []);

  const handleProjectClick = (projectId) => {
    localStorage.setItem("selectedProjectId", projectId);
    setSelectedProjectId(projectId);
    navigate(`/Employee/tasks/${projectId}`);
  };

  // useEffect(() => {
  //   const storedProjectId = localStorage.getItem("selectedProjectId");

  //   if (storedProjectId) {
  //     if (!selectedProjectId) {
  //       setSelectedProjectId(storedProjectId);
  //       navigate(`/Employee/tasks/${storedProjectId}`);
  //     }
  //   }
  // }, []);

  return (
    <EmployeeDashContext.Provider
      value={{
        empProjects,
        handleProjectClick,
        groupedTasks,
        handleStatusChange,
        Status,
        handleChange
      }}
    >
      {children}
    </EmployeeDashContext.Provider>
  );
};
