import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  // Retrieve the user object from localStorage and parse it
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("User object:", user);

  // Agar user logged in nahi hai, to login page par redirect karein
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Ensure `user.role` exists and normalize it for comparison
  const userRole =
    user.role && typeof user.role === "string"
      ? user.role.toLowerCase() // Normalize to lowercase
      : null;

  console.log("userRole", userRole);

  // Normalize allowedRoles for case-insensitive comparison
  const normalizedAllowedRoles = allowedRoles.map((role) => role.toLowerCase());

  console.log("Normalized allowed roles", normalizedAllowedRoles);

  // Agar user ka role allowedRoles me nahi hai, to unauthorized page par redirect karein
  if (!normalizedAllowedRoles.includes(userRole)) {
    return <Navigate to="/UnAuthorized" replace />;
  }

  // If everything is correct, render the children
  console.log("Rendering children: ", children);
  return children;
};

export default PrivateRoute;
