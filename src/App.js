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
import { AuthProvider, useAuth } from "./AdminDashboard/Context/AuthContext";
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
import { ManagerDashProvider } from "./ManagerDashboard/Context/ManagerDashContext";
import AddTask from "./ManagerDashboard/Task/AddTask";
import EmployeeHome from "./EmployeeDashBoard/EmployeeHome";
import Employee from "./AdminDashboard/Employee/Employee";
import { EmployeeProvider } from "./AdminDashboard/Context/EmployeeContext";
import AddEmployee from "./AdminDashboard/Employee/AddEmployee";
import ManagerProjects from "./ManagerDashboard/ManagerProjects/ManagerProjects";
import Task from "./AdminDashboard/Task/Task";
import ManageTask from "./ManagerDashboard/Task/ManageTask";
import EditTask from "./ManagerDashboard/Task/EditTask";
import PrivateRoute from "./PrivateRoute";
import UnAuthorized from "./UnAuthorized";
import { EmployeeDashProvider } from "./EmployeeDashBoard/Context/EmployeeDashContext";
import TaskListCard from "./EmployeeDashBoard/TaskListCard";


function Layout({ children }) {

  console.log("children app", children)
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = useAuth();

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
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} user={user} />
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

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <ProjectProvider>
//           <ManageProvider>
//             <ManagerDashProvider >
//               <EmployeeProvider>
//                 <Routes>
//                   <Route
//                     path="/"
//                     element={
//                       <Layout>
//                         <EmployeeHome />
//                       </Layout>
//                     }
//                   />
//                   <Route
//                     path="/admin-dashboard"
//                     element={
//                       <Layout>
//                         <AdminHome />
//                       </Layout>
//                     }
//                   />
//                   <Route
//                     path="/manager-dashboard"
//                     element={
//                       <Layout>
//                         <ManagerHome />
//                       </Layout>
//                     }
//                   />

//                   <Route
//                     path="/manager-projects"
//                     element={
//                       <Layout>
//                         <ManagerProjects />
//                       </Layout>
//                     }
//                   />

//                   <Route
//                     path="/ManageTask/:id"
//                     element={
//                       <Layout>
//                         <ManageTask />
//                       </Layout>
//                     }
//                   />

//                   <Route
//                     path="/AddTask/:id"
//                     element={
//                       <Layout>
//                         <AddTask />
//                       </Layout>
//                     }
//                   />

//                   <Route
//                     path="/UpdateTask/:id"
//                     element={
//                       <Layout>
//                         <EditTask />
//                       </Layout>
//                     }
//                   />
//                   <Route
//                     path="/AddProject"
//                     element={
//                       <Layout>
//                         <AddProject />
//                       </Layout>
//                     }
//                   />
//                   <Route
//                     path="/Update/:id"
//                     element={
//                       <Layout>
//                         <EditProject />
//                       </Layout>
//                     }
//                   />
//                   <Route
//                     path="/managers"
//                     element={
//                       <Layout>
//                         <Managers />
//                       </Layout>
//                     }
//                   />

//                   <Route
//                     path="/employees"
//                     element={
//                       <Layout>
//                         <Employee />
//                       </Layout>
//                     }
//                   />

//                   <Route
//                     path="/AddEmployee"
//                     element={
//                       <Layout>
//                         <AddEmployee />
//                       </Layout>
//                     }
//                   />


//                   <Route
//                     path="/projects"
//                     element={
//                       <Layout>
//                         <Projects />
//                       </Layout>
//                     }
//                   />
//                   <Route
//                     path="/profile"
//                     element={
//                       <Layout>
//                         <Profile />
//                       </Layout>
//                     }
//                   />
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/register" element={<Register />} />
//                 </Routes>
//               </EmployeeProvider>
//             </ManagerDashProvider>
//           </ManageProvider>
//         </ProjectProvider>
//       </AuthProvider>
//       <ToastContainer />
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProjectProvider>
          <ManageProvider>
            <ManagerDashProvider>
              <EmployeeProvider>
                <EmployeeDashProvider>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/UnAuthorized" element={<UnAuthorized />} />

                    {/* Private Routes */}
                    <Route
                      path="/Employee/DashBoard"
                      element={
                        <PrivateRoute allowedRoles={["employee", "manager", "admin"]}>
                          <Layout>
                            <EmployeeHome />
                          </Layout>
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/Admin/Dashboard"
                      element={
                        <PrivateRoute allowedRoles={["admin"]}>
                          <Layout>
                            <AdminHome />
                          </Layout>
                        </PrivateRoute>
                      }
                    />

                    <Route
                      path="/managers"
                      element={
                        <PrivateRoute allowedRoles={["admin"]}>
                          <Layout>
                            <Managers />
                          </Layout>
                        </PrivateRoute>
                      }
                    />


                    <Route
                      path="/projects"
                      element={
                        <PrivateRoute allowedRoles={["admin"]}>
                          <Layout>
                            <Projects />
                          </Layout>
                        </PrivateRoute>
                      }
                    />

                    <Route
                      path="/employees"
                      element={
                        <PrivateRoute allowedRoles={["admin"]}>
                          <Layout>
                            <Employee />
                          </Layout>
                        </PrivateRoute>
                      }
                    />

                    <Route
                      path="/AddEmployee"
                      element={
                        <PrivateRoute allowedRoles={["admin"]}>
                          <Layout>
                            <AddEmployee />
                          </Layout>
                        </PrivateRoute>
                      }
                    />


                    <Route
                      path="/Manager/Dashboard"
                      element={
                        <PrivateRoute allowedRoles={["manager"]}>
                          <Layout>
                            <ManagerHome />
                          </Layout>
                        </PrivateRoute>
                      }
                    />


                    <Route
                      path="/manager-projects"
                      element={
                        <PrivateRoute allowedRoles={["manager"]}>
                          <Layout>
                            <ManagerProjects />
                          </Layout>
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/ManageTask/:id"
                      element={
                        <PrivateRoute allowedRoles={["manager"]}>
                          <Layout>
                            <ManageTask />
                          </Layout>
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/AddTask/:id"
                      element={
                        <PrivateRoute allowedRoles={["manager"]}>
                          <Layout>
                            <AddTask />
                          </Layout>
                        </PrivateRoute>
                      }
                    />

                    <Route
                      path="/UpdateTask/:id"
                      element={
                        <PrivateRoute allowedRoles={["manager"]}>
                          <Layout>
                            <EditTask />
                          </Layout>
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/AddProject"
                      element={
                        <PrivateRoute allowedRoles={["admin"]}>
                          <Layout>
                            <AddProject />
                          </Layout>
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/Update/:id"
                      element={
                        <PrivateRoute allowedRoles={["admin"]}>
                          <Layout>
                            <EditProject />
                          </Layout>
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <PrivateRoute allowedRoles={["employee", "manager", "admin"]}>
                          <Layout>
                            <Profile />
                          </Layout>
                        </PrivateRoute>
                      }
                    />

                    <Route
                      path="/Employee/tasks/:id"
                      element={
                        <PrivateRoute allowedRoles={["employee", "manager", "admin"]}>
                          <Layout>
                            <TaskListCard />
                          </Layout>
                        </PrivateRoute>
                      }
                    />
                  </Routes>
                </EmployeeDashProvider>
              </EmployeeProvider>
            </ManagerDashProvider>
          </ManageProvider>
        </ProjectProvider>
      </AuthProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;






