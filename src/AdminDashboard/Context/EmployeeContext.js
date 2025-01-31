import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api";
import { toast } from "react-toastify";
import Employee from "../Employee/Employee";

const EmployeeContext = createContext();

export const useEmployee = () => {
    return useContext(EmployeeContext);
};

export const EmployeeProvider = ({ children }) => {
    const [Employees, setEmployees] = useState([]);
    const [selectedEmployee, setselectedEmployee] = useState(null);
    const [error, setError] = useState({});
    const[loading , setLoading] = useState(false)
    const [show, setShow] = useState(false)

    const[EmployeeData , setEmployeeData] = useState({
        empId: "",
        name: "",
        email: "",

    })


    //using fatching data with Id
    const fetchEmployeeData = async (empId) => {
        console.log("empId" , empId)
        try {
            const response = await axiosInstance.get(`/Employee/${empId}`);
            console.log("Project Data:", response.data);
            const data = response.data;
            setEmployeeData((prevData) => ({
                ...prevData,
                firstName: data.employee.firstName,
                lastName: data.employee.lastName,
                empId: parseInt(empId),
                email: data.employee.email,
            }));
        } catch (err) {
            console.error("Failed to fetch project data:", err);
        }
    };

    // Fetch projects with pagination
    useEffect(() => {
        setLoading(true);
        fetchEmployees();
        fetchEmployeeData();
    }, []);


    const handleOffCanvasClose  = ()=>{
        setShow (false)
    }

    const fetchEmployees = async () => {
        // setLoading(true);
        try {
            const response = await axiosInstance.get(`/GetAllEmployee`);
            // console.log("response employee", response.data)
            setEmployees(response.data);
            // setTotalPages(response.data.totalPages);
            // setTotalEntries(response.data.total);
        } catch (err) {
            setError("Failed to fetch projects.");
            // setLoading(false);
        } finally {
            // setLoading(false);
        }
    };

    const handleShow = (employee =null) => {
        console.log("employee handle show", employee); 
        if (!employee) {
            // Agar null hai toh blank values set karo
            setEmployeeData({
                Id: employee?.Id || "",
                name: employee?.name || "",
                email: employee?.email || "",
              });
        } else {
            // Agar employee hai toh uska data set karo
            setselectedEmployee({
                id: employee.id,
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email,
            });
        }
        setShow(true);
        setselectedEmployee(employee || null); 
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setEmployeeData((prevData) => ({ ...prevData, [name]: value }));

        setError((prevErrors) => {
            const updatedErrors = { ...prevErrors };
            if (updatedErrors[name]) {
                delete updatedErrors[name];
            }
            return updatedErrors;
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setselectedEmployee((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const [firstName, lastName] = (EmployeeData.name || "").split(" ", 2);
        const payload = {
            email: selectedEmployee?.email || "",
            firstName: selectedEmployee?.firstName || "",
            lastName: selectedEmployee?.lastName || "",
        };

    
        try {
            // API call to update the employee
            const response = await axiosInstance.put(`/UpdateEmployee/${selectedEmployee.id}`, payload);
            if (response.status === 200) {
                // Update the employee list with the updated data
                const updatedEmployees = Employees.map((employee) =>
                    employee.id === selectedEmployee.id ? response.data : employee
                );
                console.log("updatedEmployee" , updatedEmployees)
                // Set the updated employee list and reset the selected employee
                setselectedEmployee(updatedEmployees);
                toast.success("Employee Updated successfully!");
                fetchEmployees();
            }else {
                toast.error("Failed to updated employee.");
            }
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };

    const handleEmployeeSubmit = async (e) => {
        alert("hi")
        e.preventDefault();
        setLoading(true);
      
        const [firstName, lastName] = (EmployeeData.name || "").split(" ", 2);
        const payload = {
          email: EmployeeData.email || "",
          firstName: firstName || "",
          lastName: lastName || "",
        };
      
        try {
            const response = await axiosInstance.post("/account/register-Employee", payload);
            console.log("response employee" , response.data)
          if (response.data) {
            toast.success("Employee saved successfully!");
            setEmployeeData(response.data)
            handleOffCanvasClose();
            fetchEmployees();
          } else {
            toast.error("Failed to save manager.");
          }
        } catch (err) {
        //   console.error("Error during API call:", err);
        //   console.log("API error details:", err.response?.data);
          toast.error(err.response?.data?.message || "Something went wrong!");
        } finally {
          setLoading(false);
        }
      };
    

      const handleDelete = async (Id) => {
        try {
            const response = await axiosInstance.delete(`/Employee/${Id}`);
    
            if (response.status === 200) {
                toast.success("Employee Deleted Successfully.");
                    setShow(false);
                await fetchEmployees();
            } else {
                console.error("Failed to delete project");
                toast.error("Failed to delete Employee.");
            }
        } catch (error) {
            console.error("Error deleting project:", error);
            toast.error("Something went wrong!");
        }
    };
    


    return (
        <EmployeeContext.Provider
            value={{
                handleChange,
                handleEmployeeSubmit,
                EmployeeData,
                fetchEmployees,
                Employees,
                handleShow,
                selectedEmployee,
                show,
                handleOffCanvasClose,
                loading,
                handleDelete,
                EmployeeData,
                selectedEmployee,
                handleEditChange,
                handleEditSubmit
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
};
