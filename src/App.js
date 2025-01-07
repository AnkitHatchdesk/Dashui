import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
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
import "bootstrap/dist/css/bootstrap.min.css";


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
