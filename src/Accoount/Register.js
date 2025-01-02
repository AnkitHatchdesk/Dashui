import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AdminDashboard/Context/AuthContext";
import Loader from "../Loader"; // Import Loader component

function Register() {
  const { handleSignUpChange, handleSignUpForm, FormSignUpData, errors, loading } = useAuth();

  console.log("loading register", loading);

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 login-container illustration-bg">
        {/* Login Form Section */}
        <div className="col-md-7 p-5 form-box-bg">
          <div
            className="login-form-container mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h3 className="fw-bold mb-2">Sign Up for a Smarter Way to Work</h3>

            {/* Show Loader while loading */}
            {loading ? (
              <Loader loading={loading} />
            ) : (
              <form onSubmit={handleSignUpForm}>
                {/* First Name and Last Name in one row */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="fname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value={FormSignUpData.fname}
                      onChange={handleSignUpChange}
                      className="form-control py-2"
                      id="firstName"
                      placeholder="Enter your First name here"
                    />
                    {errors.fname && <p className="error" style={{ color: "red" }}>{errors.fname}</p>}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lname"
                      value={FormSignUpData.lname}
                      onChange={handleSignUpChange}
                      className="form-control py-2"
                      id="lastName"
                      placeholder="Enter your Last name here"
                    />
                    {errors.lname && <p className="error" style={{ color: "red" }}>{errors.lname}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={FormSignUpData.email}
                    onChange={handleSignUpChange}
                    className="form-control py-2"
                    id="email"
                    placeholder="Enter your Email"
                  />
                  {errors.email && <p className="error" style={{ color: "red" }}>{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <a href="" className="text-primary text-decoration-none small">
                      Forgot Password
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={FormSignUpData.password}
                    onChange={handleSignUpChange}
                    className="form-control py-2"
                    id="password"
                    placeholder="Enter your password"
                  />
                  {errors.password && <p className="error" style={{ color: "red" }}>{errors.password}</p>}
                </div>

                {/* Terms and Conditions */}
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terms"
                    />
                    <label className="form-check-label small" htmlFor="terms">
                      I agree to terms & policy
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-dark w-100 py-2 mb-3"
                  style={{ background: "#000" }}
                >
                  Sign Up
                </button>

                {/* Social Login */}
                <div className="text-center mb-3">
                  <span className="text-muted">or</span>
                </div>
                <div className="d-flex gap-2 mb-3">
                  <button
                    type="button"
                    className="btn social-btn flex-grow-1 py-2 text-white"
                    style={{ background: "#000" }}
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    Sign in with Google
                  </button>
                  <button
                    type="button"
                    className="btn social-btn flex-grow-1 py-2 text-white"
                    style={{ background: "#000" }}
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    Sign in with Apple
                  </button>
                </div>

                {/* Redirect to Login */}
                <div className="text-center">
                  <span className="text-muted small">
                    Already have an account?{" "}
                  </span>
                  <Link
                    to="/login"
                    className="text-primary text-decoration-none small"
                  >
                    Sign In
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Illustration Section */}
        <div className="col-md-5 d-none d-md-block">
          <img
            style={{ width: "500px", height: "500px" }}
            src="Images/Untitled design 1.png"
            alt="Login illustration"
            className="illustration-img img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
