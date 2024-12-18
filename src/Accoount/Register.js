import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Register() {
  const { handleSignUpChange , handleSignUpForm,FormSignUpData} = useAuth();

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h2>Register Here</h2>
            <form onSubmit={handleSignUpForm}>
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  value={FormSignUpData.fname}
                  onChange={handleSignUpChange}
                  className="form-control"
        
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lname" className="form-label">
                  Last Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lname"
                  value={FormSignUpData.lname}
                  onChange={handleSignUpChange}
          
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
              value={FormSignUpData.email}
                  onChange={handleSignUpChange}
             
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
            
                  name="password"
                  value={FormSignUpData.password}
                  onChange={handleSignUpChange}
                  className="form-control"
                 
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div className="mt-3">
              <p>
                If You have an account? <Link to="/login">login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
