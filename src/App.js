import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import Login from "./Accoount/Login";

import Register from "./Accoount/Register";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { AuthProvider } from "./AdminDashboard/Context/AuthContext";
import Managers from "./AdminDashboard/Managers/Managers";
import { ProjectProvider } from "./AdminDashboard/Context/ProjectContext";

import Projects from "./AdminDashboard/Projects/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EditProject from "./AdminDashboard/Projects/EditProject";
import Profile from "./AdminDashboard/Profile/Profile";
import AddProject from "./AdminDashboard/Projects/AddProject";
import { ManageProvider } from "./AdminDashboard/Context/ManagerContext";
import AdminHome from "./AdminDashboard/AdminHome/AdminHome";
import ManagerHome from "./ManagerDashboard/ManagerHome/ManagerHome";

function Layout({ children }) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sidebar and Navbar hide for specific routes
  const hideSidebarAndNavbar = ["/login", "/register"].includes(
    location.pathname
  );

  // Toggle Sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div>
        {!hideSidebarAndNavbar && (
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
      </div>
      <div className={`home ${isSidebarOpen ? "" : "sidebar-closed"}`}>
        {/* Navbar */}
        {!hideSidebarAndNavbar && <Navbar />}
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProjectProvider>
          <ManageProvider>
            <Routes>
              <Route
                path="/AdminHome"
                element={
                  <Layout>
                    <AdminHome />
                  </Layout>
                }
              />

              <Route
                path="/ManagerHome"
                element={
                  <Layout>
                    <ManagerHome />
                  </Layout>
                }
              />
              <Route
                path="/AddProject"
                element={
                  <Layout>
                    <AddProject />
                  </Layout>
                }
              />
              <Route
                path="/Update/:projID"
                element={
                  <Layout>
                    <EditProject />
                  </Layout>
                }
              />
              <Route
                path="/managers"
                element={
                  <Layout>
                    <Managers />
                  </Layout>
                }
              />

              <Route
                path="/projects"
                element={
                  <Layout>
                    <Projects />
                  </Layout>
                }
              />

              <Route
                path="/profile"
                element={
                  <Layout>
                    <Profile />
                  </Layout>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </ManageProvider>
        </ProjectProvider>
      </AuthProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Accoount/Login';
// import Home from './Home/Home';
// import Register from './Accoount/Register';
// import AddProject from './AddProject/AddProject';
// import Navbar from './Navbar/Navbar';
// import Sidebar from './Sidebar/Sidebar';
// import { AuthProvider } from './Context/AuthContext';
// import Managers from './Managers/Managers';

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <div className="container-fluid">
//           <div className="row">
//             {/* Sidebar */}
//             <div className="col-lg-2">
//               <Sidebar />
//             </div>

//             {/* Main Content */}
//             <div className="col-lg-10">
//               {/* Navbar */}
//               <Navbar />

//               {/* Routes */}
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/AddProject" element={<AddProject />} />
//                 <Route path="/managers" element={<Managers />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;
