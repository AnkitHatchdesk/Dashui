import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api";
import { toast } from "react-toastify";

const ManagerContext = createContext();

export const useManager = () => {
  return useContext(ManagerContext);
};

export const ManageProvider = ({ children }) => {
  const navigate = useNavigate();
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState({});
   const[showDeleteModal , setShowDeleteModal] = useState(false)
  const [selectedManager, setSelectedManager] = useState(null);
  const [managerToDelete, setmanagerToDelete] = useState(null);

  const [managerData, setManagerData] = useState({
    managerID: "",
    name: "",
    email: "",
    projectName :"",
    dueDate:""
  });

  const handleDeleteOpenModal = (managerID) => {
    console.log("projID modal" , managerID)
    setmanagerToDelete(managerID);
    setShowDeleteModal(true);
  };

  const handleClose = () => setShow(false);
  const handleShow = (manager = null) => {
    setManagerData({
      managerID: manager?.managerID || "",
      name: manager?.name || "",
      email: manager?.email || "",
    });
    setShow(true);
    setSelectedManager(manager || null); // Ensure no invalid data is passed
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setManagerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setManagerData((prevData) => ({ ...prevData, imagePath: file }));
  };

  const handleManagerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const [firstName, lastName] = (managerData.name || "").split(" ", 2);
    const payload = {
      email: managerData.email || "",
      firstName: firstName || "",
      lastName: lastName || "",
     
    };
  
    console.log("payload:", payload);
  
    try {
        const response = await axiosInstance.post("/account/register-manager", payload);
      if (response.data) {
        toast.success("Manager saved successfully!");
        handleClose();
        fetchManagers();
      } else {
        toast.error("Failed to save manager.");
      }
    } catch (err) {
      console.error("Error during API call:", err);
      console.log("API error details:", err.response?.data);
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleManagerUpdateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const [firstName, lastName] = (managerData.name || "").split(" ", 2);
    const payload = {
      email: managerData.email || "",
      firstName: firstName || "",
      lastName: lastName || "",
      projectName : managerData.projectName || "",
      dueDate : managerData.dueDate || "",
    };
  
    console.log("payload:", payload);
  
    try {
      let response;
  
      if (managerData.managerID) {
        response = await axiosInstance.put(
          `/UpdateManager/${managerData.managerID}`,
          payload
        );
      } 
  
      if (response.data) {
        toast.success("Manager Updated successfully!");
        handleClose();
        fetchManagers();
      } else {
        toast.error("Failed to save manager.");
      }
    } catch (err) {
      console.error("Error during API call:", err);
      console.log("API error details:", err.response?.data);
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  
  const fetchManagers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/GetManagers");
      setManagers(response.data);
    } catch (err) {
      console.error("Failed to fetch managers.");
    } finally {
      setLoading(false);
    }
  };

    const handleDelete = async (managerID) => {
      try {
        const response = await axiosInstance.delete(`/DeleteManager?id=${managerID}`);
    
        if (response.status === 200) {
             await fetchManagers();
          toast.success("Project Deleted Successfully.")
          setShowDeleteModal(false)
  
        } else {
          console.error("Failed to delete project");
          toast.error("Failed to add project.");
        }
      } catch (error) {
        console.error("Error deleting project:", error);
        toast.error("Something went wrong!");
        
      }
    };
  

  useEffect(() => {
    fetchManagers();
  }, []);

  return (
    <ManagerContext.Provider
      value={{
        managers,
        loading,
        handleClose,
        handleShow,
        show,
        handleFileChange,
        handleManagerSubmit,
        handleChange,
        managerData,
        handleShow,
        selectedManager,
        handleDelete,
        handleDeleteOpenModal,
        showDeleteModal,
        managerToDelete,
        handleManagerUpdateSubmit

      }}
    >
      {children}
    </ManagerContext.Provider>
  );
};
