import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Accoount/Login';
import Home from './Home/Home';
import Register from './Accoount/Register';
import AddProject from './AddProject/AddProject';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import { AuthProvider } from './Context/AuthContext';
import Managers from './Managers/Managers';

function Layout({ children }) {
  const location = useLocation();

  // Sidebar and Navbar hide for specific routes
  const hideSidebarAndNavbar = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        {!hideSidebarAndNavbar && (
          <div className="col-lg-2">
            <Sidebar />
          </div>
        )}

        {/* Main Content */}
        <div className={!hideSidebarAndNavbar ? "col-lg-10" : "col-lg-12"}>
          {/* Navbar */}
          {!hideSidebarAndNavbar && <Navbar />}
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
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
            path="/managers"
            element={
              <Layout>
                <Managers />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;


// import React from 'react';
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