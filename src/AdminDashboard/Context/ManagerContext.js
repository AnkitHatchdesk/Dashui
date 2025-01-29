import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api";
import { toast } from "react-toastify";
import { useManagerDash } from "../../ManagerDashboard/Context/ManagerDashContext";

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
    id: "",
    name: "",
    email: "",
  });



  const handleDeleteOpenModal = (Id) => {
    // console.log("projID modal" , Id)
    setmanagerToDelete(Id);
    setShowDeleteModal(true);
  };

  const handleClose = () => {
    // alert("hi")
    setShowDeleteModal(false);
    setShow(false)
  }


  const handleShow = (manager =null) => {
    console.log("manager handle show", manager); 
    if (!manager) {
        // Agar null hai toh blank values set karo
        setManagerData({
            Id: manager?.Id || "",
            name: manager?.name || "",
            email: manager?.email || "",
          });
    } else {
        // Agar employee hai toh uska data set karo
        setSelectedManager({
            id: manager.id,
            firstName: manager.firstName,
            lastName: manager.lastName,
            email: manager.email,
        });
    }
    setShow(true);
    setSelectedManager(manager || null); 
};

const handleEditChange = (e) => {
  const { name, value } = e.target;
  setSelectedManager((prevData) => ({
      ...prevData,
      [name]: value,
  }));
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
  
    // console.log("payload:", payload);
  
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
      // console.error("Error during API call:", err);
      // console.log("API error details:", err.response?.data);
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
  
    // console.log("payload:", payload);
  
    try {
      let response;
  
      if (managerData.Id) {
        response = await axiosInstance.put(
          `/UpdateManager/${managerData.Id}`,
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

    const handleDelete = async (Id) => {
      try {
        const response = await axiosInstance.delete(`/DeleteManager?id=${Id}`);
    
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
        handleEditChange

      }}
    >
      {children}
    </ManagerContext.Provider>
  );
};
