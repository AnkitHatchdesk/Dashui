// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("FormData login", FormloginData);

    Navigate("/");
  };

  const handleSignUpForm = async (e) => {
    e.preventDefault();
    console.log("FormData signup", FormSignUpData);
    Navigate("/");
  };

  const handleSignUpChange = async (e) => {
    const { name, value } = e.target;
    setFormSignUpData({
      ...FormSignUpData,
      [name]: value,
    });
  };

  const handleLoginChange = async (e) => {
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
