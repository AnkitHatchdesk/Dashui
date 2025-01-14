
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar  , user}) {

  // console.log("user sidebar" , user)
  return (
    <nav className={`sidebar ${isOpen ? '' : 'close'} mb-5`}>
      <header>
      <div className="d-flex align-items-center justify-content-left mb-4 sidebar-logo">
          <div className="justify-content-center ms-3 image">
            <Link to="/">  <img
              src="Worksphere.svg"
              alt="logo"
              className="img-fluid"
              style={{ fontSize: "40px" }}
            />
            </Link>
          </div>

          {/* Conditionally render logo text */}
          {isOpen && (
            <div className="text logo-text" style={{ marginRight: "20px" }}>
              <Link className="logo-name text-decoration-none" to="/">WorkSphere</Link>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button className="toggle" onClick={toggleSidebar}>
          <i
            className={`fa-solid ${isOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}
            style={{ fontSize: "10px" }}
          ></i>
        </button>
      </header>

      <div className="menu-bar">
        <div className="menu">
        <ul className="menu-links">
          {user?.rollid === 3 && ( 
              <>
            <li className="nav-link" style={{ color: "#3a3b3c" }}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <i className="bi bi-house-door icon"></i>
                <span className="text nav-text">Dashboard</span>
              </NavLink>
            </li>
            </>
          )}
          </ul>


          {user?.rollid === 1 && ( 
            <>
          <li className="project-create-btn">
            <NavLink to="/AddProject">
              <i className="bi bi-plus-lg"></i>
              <p  className= "text" style={{ color: "#6f7173" }}>Create Project</p>
            </NavLink>
          </li>

          <ul className="menu-links">
            <li className="nav-link" style={{ color: "#3a3b3c" }}>
              <NavLink
                to="/admin-dashboard"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <i className="bi bi-house-door icon"></i>
                <span className="text nav-text">Dashboard</span>
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink
                to="/managers"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <i className="bi bi-chat-dots icon"></i>
                <span className="text nav-text">Managers</span>
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <i className="bi bi-chat-dots icon"></i>
                <span className="text nav-text">Projects</span>
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink
                to="/employees"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <i className="bi bi-chat-dots icon"></i>
                <span className="text nav-text">Employees</span>
              </NavLink>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bi bi-people icon"></i>
                <span className="text nav-text">Notification</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bi bi-credit-card icon"></i>
                <span className="text nav-text">Likes</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bi bi-gear icon"></i>
                <span className="text nav-text">Wallets</span>
              </a>
            </li>
          </ul>
            </>
          )}

          <ul className="menu-links">
          {user?.rollid === 2 && ( 
              <>
            <li className="nav-link" style={{ color: "#3a3b3c" }}>
              <NavLink
                to="/manager-dashboard"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <i className="bi bi-house-door icon"></i>
                <span className="text nav-text">Dashboard</span>
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink
                to="/manager-projects"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <i className="bi bi-chat-dots icon"></i>
                <span className="text nav-text">Projects</span>
              </NavLink>
            </li>
          
            <li className="nav-link">
              <NavLink
                to="/ManageTask"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <i className="bi bi-chat-dots icon"></i>
                <span className="text nav-text">Task</span>
              </NavLink>
            </li>
            </>
          )}
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a href="#">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;


