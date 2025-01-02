import React from "react";
import { Link } from "react-router-dom";

import Loader from "../Loader";
import { useAuth } from "../AdminDashboard/Context/AuthContext";


function Login() {
  const { handleLoginChange, handleLogin, FormloginData  , errors  , loading } = useAuth();
  return (
    <div class="container-fluid p-0">
      <div class="row g-0 login-container illustration-bg">
        {/* <!-- Login Form Section --> */}
        <div class="col-md-7 p-5 form-box-bg">
          <div class="login-form-container mx-auto" style={{maxWidth: "600px"}}>
            <h1 class="fw-bold mb-2">Welcome back!</h1>
            <p class="text-muted mb-4">Sign In to Manage Your Projects</p>

        {loading ? <Loader loading={loading} /> : (
            <form onSubmit={handleLogin}>
            <div class="mb-3">
              <label for="Email" class="form-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={FormloginData.email}
                onChange={handleLoginChange}
                class="form-control py-2"
                id="email"
                placeholder="Enter your name here"
              />
              {errors.email && <p className="error" style={{color:"red"}}>{errors.email}</p>}
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between align-items-center">
                <label for="password" class="form-label">
                  Password
                </label>
                <a href="#" class="text-primary text-decoration-none small">
                  Forgot Password
                </a>
              </div>
              <input
                type="password"
                name="password"
                value={FormloginData.password}
                onChange={handleLoginChange}
                class="form-control py-2"
                id="password"
                placeholder="Enter your password"
              />
              {errors.password && <p className="error" style={{color:"red"}}>{errors.password}</p>}
            </div>
            {errors && typeof errors === 'string' && <div className="error-message">{errors}</div>}

            <div class="mb-3">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="terms" />
                <label class="form-check-label small" for="terms">
                  I agree to terms & policy
                </label>
              </div>
            </div>

            <button
              type="submit"
              class="btn w-100 py-2 mb-3 text-white"
              style={{background: "#000"}}
            >
              Sign In
            </button>

            <div class="text-center mb-3">
              <span class="text-muted">or</span>
            </div>

            <div class="d-flex gap-2 mb-3">
              <button type="button" class="btn social-btn flex-grow-1 py-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  width="20"
                  height="20"
                  class="me-2"
                />
                Sign in with Google
              </button>
              <button type="button" class="btn social-btn flex-grow-1 py-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                  width="20"
                  height="20"
                  class="me-2"
                />
                Sign in with Apple
              </button>
            </div>

            <div class="text-center">
              <span class="text-muted small">Don't have an account? </span>
              <Link to="/register" class="text-primary text-decoration-none small">
                Sign Up
              </Link>
            </div>
          </form>
        )}
          

           
          </div>
        </div>

        {/* <!-- Illustration Section --> */}
        <div class="col-md-5 d-none d-md-block">
          {/* <!-- <div class="d-flex align-items-center justify-content-center p-5">
          <div class="hero-image"> --> */}
          <img
            style={{width: "500px", height: "500px"}}
            src="images/Untitled design 1.png"
            alt="Login illustration"
            class="illustration-img img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
