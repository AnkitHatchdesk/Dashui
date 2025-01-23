import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api";
import Loader from "../../Loader";
import { jwtDecode } from 'jwt-decode';


const AuthContext = createContext();

export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};

export const AuthProvider = ({ children }) => {
  const [FormSignUpData, setFormSignUpData] = useState({
    email: "",
    password: "",
    fname: "",
    lname: "",
  });
  const [FormloginData, setFormloginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const[user , setUser] = useState("")
  const[errors , setErrors]= useState({})

  console.log("user in detail" , user)

  // console.log("loading" ,loading)

  const Navigate = useNavigate();

  // const checkAuth = async () => {
  //   try {
  //     const response = await axiosInstance.get("/account/checkAuth");
  //     // console.log("response user", response.data.user);

  //     if (response.data.isAuthenticated) {
  //       setUser(response.data.user)
  //     } else {
  //       // setIsLoggedIn(false);
  //     }
  //   } catch (error) {
  //     console.error("Error checking auth:", error.response?.data || error.message);
  //     // setIsLoggedIn(false);
  //   }
  // };




  // useEffect(() => {
  //   checkAuth();
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
  
        const currentTime = Date.now() / 1000; // Current time in seconds
        if (decodedToken.exp < currentTime) {
          console.log("Token expired");
          localStorage.removeItem("token");
          setUser(null); // Expired token ke case me user null kar do
        } else {
          setUser(decodedToken);
          localStorage.setItem("user", JSON.stringify(decodedToken)); // Decode token se user ko set karo
        }
      } catch (error) {
        console.error("Invalid token", error);
        setUser(null); 
        localStorage.removeItem("token");
        localStorage.removeItem("user");// Invalid token ke case me bhi user null kar do
      }
    } else {
      setUser(null); // Agar token hi nahi hai to user null hoga
    }
  }, [Navigate]);



  const validate = () => {
    const newErrors = {};
    if (!FormSignUpData.fname.trim()) {
      newErrors.fname = "First name is required.";
    }
    if (!FormSignUpData.lname.trim()) {
      newErrors.lname = "Last name is required.";
    }
    if (!FormSignUpData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(FormSignUpData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!FormSignUpData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (FormSignUpData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!FormloginData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(FormloginData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!FormloginData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (FormloginData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return; 
  
    setLoading(true);
  
    if (validateLogin()) {
      const payload = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      try {
        const response = await axiosInstance.post("/account/login", payload);
        console.log("response data user" , response.data)
        if (response.status === 200 || response.status === 201) {
          console.log("Login Successful:", response.data);
          localStorage.setItem("token", response.data.token);
          setUser(response.data)

          const userRole = response.data.user.name;
          console.log("userRole" , userRole)
            
          // Navigate based on role
          if (userRole.toLowerCase() === "admin") {
            Navigate("/Admin/Dashboard");
          } else if (userRole.toLowerCase() === "manager") {
            Navigate("/Manager/Dashboard");
          } else if (userRole.toLowerCase() === "employee") {
            Navigate("/Employee/Dashboard"); // Redirect to home page for employee role
          } else {
            Navigate("/login"); // Default route for other roles
          }
          
          
          // Navigate("/");
        
        }
      } catch (error) {
        if (error.response?.status === 401) {
          setErrors(error.response?.data?.message || "Invalid email or password");
        } else {
          setErrors("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };


  const handleLogOut =  ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    Navigate("/login")
  };


  
  const handleSignUpForm = async (e) => {
    e.preventDefault();
    if (loading) return;  

    setLoading(true);

    if (validate()) {
      const payload = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };
      console.log("payload", payload);

      try {
        const response = await axiosInstance.post("/account/register", payload);
        console.log("response" , response)

        if (response.status === 201 || response.status === 200) {
          Navigate("/");
        }
      } catch (error) {
        console.error("Signup Error:", error.response?.data?.message || error.message);
        setErrors(error.response?.data?.message || "An error occurred during signup.");
      } finally {
        setLoading(false);
      }
    } 
    else {
      setLoading(false);
    }
  };



  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setFormSignUpData({
      ...FormSignUpData,
      [name]: value,
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setFormloginData({
      ...FormloginData,
      [name]: value,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        handleSignUpForm,
        FormloginData,
        FormSignUpData,
        handleLogin,
        handleLoginChange,
        handleSignUpChange,
        errors,
        // isLoggedIn,
        handleLogOut,
        loading,
        user
      }}
    >
     {loading ? <div><Loader loading={loading}/></div> : children}
    </AuthContext.Provider>
  );
}

