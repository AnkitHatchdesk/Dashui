// import React from "react";
// import {  NavLink } from "react-router-dom";

// function Sidebar() {
//   return (
//     <>
//       <nav className="sidebar close mb-5">
//         <header>
//           <div className="d-flex align-items-center justify-content-left mb-4 sidebar-logo">
//             <div className="justify-content-center ms-4 image">
//               <img src="/Images/image.png" alt="logo" className="img-fluid" />
//             </div>
//             <div className="text logo-text">
//               <span className="logo-name">DashUI</span>
//             </div>
//           </div>

//           <button className="toggle">
//             <i
//               className="fa-solid fa-chevron-right"
//               style={{ fontSize: "10px" }}
//             ></i>
//           </button>
//         </header>

//         <div className="menu-bar">
//           <div className="menu">
//             <li className="project-create-btn">
//               <NavLink to="/AddProject">
//                 <i className="bi bi-plus-lg"></i>
//                 <p style={{color:"#6f7173"}}>Create Project</p>
//               </NavLink>
//             </li>

//             <ul className="menu-links">
//               <li className="nav-link"  style={{color:"#3a3b3c"}}>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) => (isActive ? "active-link" : "")}
//                 >
//                   <i className="bi bi-house-door icon"></i>
//                   <span className="text nav-text">Dashboard</span>
//                 </NavLink>
//               </li>

//               <li className="nav-link">
//                 <NavLink
//                   to="/managers"
//                   className={({ isActive }) => (isActive ? "active-link" : "")}
//                 >
//                   <i className="bi bi-chat-dots icon"></i>
//                   <span className="text nav-text">Managers</span>
//                 </NavLink>
//               </li>

//               <li className="nav-link">
//                 <a href="#">
//                   <i className="bi bi-list-task icon"></i>
//                   <span className="text nav-text">Notifications</span>
//                 </a>
//               </li>

//               <li className="nav-link">
//                 <a href="#">
//                   <i className="bi bi-people icon"></i>
//                   <span className="text nav-text">Analytics</span>
//                 </a>
//               </li>

//               <li className="nav-link">
//                 <a href="#">
//                   <i className="bi bi-credit-card icon"></i>
//                   <span className="text nav-text">Likes</span>
//                 </a>
//               </li>

//               <li className="nav-link">
//                 <a href="#">
//                   <i className="bi bi-gear icon"></i>
//                   <span className="text nav-text">Wallets</span>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="bottom-content">
//             <li className="">
//               <a href="#">
//                 <i className="bx bx-log-out icon"></i>
//                 <span className="text nav-text">Logout</span>
//               </a>
//             </li>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Sidebar;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  // State to toggle the sidebar between collapsed and expanded
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className={`sidebar ${isSidebarOpen ? "open" : "close"} mb-5`}>
        <header>
          <div className="d-flex align-items-center justify-content-left mb-4 sidebar-logo">
            <div className="justify-content-center ms-4 image">
              <img src="/Images/image.png" alt="logo" className="img-fluid" />
            </div>
            {isSidebarOpen && (
              <div className="text logo-text">
                <span className="logo-name">DashUI</span>
              </div>
            )}
          </div>

          <button className="toggle" onClick={toggleSidebar}>
            <i
              className={`fa-solid ${isSidebarOpen ? "fa-chevron-left" : "fa-chevron-right"}`}
              style={{ fontSize: "10px" }}
            ></i>
          </button>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="project-create-btn">
              <NavLink to="/AddProject">
                <i className="bi bi-plus-lg"></i>
                {isSidebarOpen && <p style={{ color: "#6f7173" }}>Create Project</p>}
              </NavLink>
            </li>

            <ul className="menu-links">
              <li className="nav-link" style={{ color: "#3a3b3c" }}>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <i className="bi bi-house-door icon"></i>
                  {isSidebarOpen && <span className="text nav-text">Dashboard</span>}
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink
                  to="/managers"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <i className="bi bi-chat-dots icon"></i>
                  {isSidebarOpen && <span className="text nav-text">Managers</span>}
                </NavLink>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bi bi-list-task icon"></i>
                  {isSidebarOpen && <span className="text nav-text">Notifications</span>}
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bi bi-people icon"></i>
                  {isSidebarOpen && <span className="text nav-text">Analytics</span>}
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bi bi-credit-card icon"></i>
                  {isSidebarOpen && <span className="text nav-text">Likes</span>}
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bi bi-gear icon"></i>
                  {isSidebarOpen && <span className="text nav-text">Wallets</span>}
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                {isSidebarOpen && <span className="text nav-text">Logout</span>}
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;


