import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api"; 
// import { toast } from "react-toastify";

const ManagerContext = createContext();

export const useManager = () => {
  return useContext(ManagerContext);
};

export const ManageProvider = ({ children }) => {
  const [managers, setManagers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [totalEntries, setTotalEntries] = useState(0);
//   const [searchQuery, setSearchQuery] = useState();
//   const[showModal , setShowModal] = useState(false)
//   const [projectToDelete, setProjectToDelete] = useState(null);
const[loading , setLoading] = useState(false)
// const[error , setError] = useState({})
 
  const navigate = useNavigate();
//   const [pageSize] = useState(10);

  // Fetch projects with pagination
  useEffect(() => {
    setLoading(true);
    fetchManagers();
  }, []);

  const fetchManagers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/GetManagers");
      setManagers(response.data);
    //   setTotalPages(response.data.totalPages);
    //   setTotalEntries(response.data.total);
    } catch (err) {
    //   setError("Failed to fetch projects.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };


  return (
    <ManagerContext.Provider
      value={{
        managers,
        loading

      }}
    >
      {children}
    </ManagerContext.Provider>
  );
};
