import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AdminDashboard/Context/AuthContext";
import { Dropdown } from "react-bootstrap"; // Import Dropdown from react-bootstrap

function Navbar() {
  const {  handleLogOut, user } = useAuth();
  const token = localStorage.getItem("token");

  return (
    <div className="topbar sticky-top">
      <div className="d-flex justify-content-between align-items-center mb-4 me-3 px-3 top-bar index-nav">
        <div className="d-flex main-content-icon-box">
          <div className="search-input-box">
            <form className="search_box">
              <i className="bi bi-search"></i>
              <input
                type="search"
                className="search-input"
                placeholder="Search for anything..."
              />
            </form>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="main-content-icon d-flex">
            <div className="calender-icon me-3">
              <i className="bi bi-calendar2-check"></i>
            </div>
            <div className="chat-icon me-3">
              <i className="bi bi-chat-square-text"></i>
            </div>
            <div className="bell-icon me-3">
              <i className="bi bi-bell"></i>
            </div>
          </div>
          <div className="avatar pt-2">
            <div className="avatar-para">
              <p className="ms-2">{`${user.FirstName} ${user.LastName}`}</p>
              <span className="avatar-address">up india</span>
            </div>
          </div>

          {/* React-bootstrap Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" id="dropdown-basic" className="btn text-black">
              {/* Empty button to toggle dropdown */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/* Token check for logged in */}
              {token ? (
                <Dropdown.Item onClick={handleLogOut}>
                  <i className="fa-solid fa-right-from-bracket me-2"></i> Log Out
                </Dropdown.Item>
              ) : (
                <Dropdown.Item as={Link} to="/login">
                  <i className="fas fa-sign-in-alt me-2"></i> Log In
                </Dropdown.Item>
              )}
              <Dropdown.Item as={Link} to="/profile">
                <i className="fa-solid fa-user me-2"></i> My Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/">
                <i className="fa-solid fa-gear me-2"></i> Settings
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
