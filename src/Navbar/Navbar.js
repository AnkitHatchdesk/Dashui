import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AdminDashboard/Context/AuthContext";


function Navbar() {
  const { isLoggedIn, handleLogOut, user } = useAuth();
  const token = localStorage.getItem("token");

  console.log("token", token);
  return (
    <div class="topbar sticky-top">
      <div class="d-flex justify-content-between align-items-center mb-4 me-3 px-3 top-bar index-nav">
        <div class="d-flex main-content-icon-box">
          <div class="search-input-box">
            <form class="search_box">
              <i class="bi bi-search"></i>
              <input
                type="search"
                class="search-input"
                placeholder="Search for anything..."
              />
            </form>
          </div>
        </div>

        <div class="d-flex align-items-center">
          <div class="main-content-icon d-flex">
            <div class="calender-icon me-3">
              <i class="bi bi-calendar2-check"></i>
            </div>
            <div class="chat-icon me-3">
              <i class="bi bi-chat-square-text"></i>
            </div>
            <div class="bell-icon me-3">
              <i class="bi bi-bell"></i>
            </div>
          </div>
          <div class="avatar pt-2">
            <div class="avatar-para">
              <p className="ms-2">{`${user.firstName} ${user.lastName}`}</p>
              <span class="avatar-address"> up india</span>
            </div>
          </div>
          <div class="topbar-dropdown dropdown pe-3">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              {/* for logged in   */}
              {token ? (
                <li className="d-flex justify-content-start align-items-center p-2">
                  <i
                    className="fa-solid fa-right-from-bracket"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <button className="dropdown-item" onClick={handleLogOut}>
                    Log Out
                  </button>
                </li>
              ) : (
                <li className="d-flex justify-content-start align-items-center p-2">
                  <i
                    className="fas fa-sign-in-alt"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <Link className="dropdown-item" to="/login">
                    Log in
                  </Link>
                </li>
              )}
              <li className="d-flex justify-content-start align-items-center p-2">
                <i class="fa-solid fa-user" style={{ fontSize: "20px" }}></i>
                <Link className="dropdown-item" to="/profile">
                  My Profile
                </Link>
              </li>
              <li className="d-flex justify-content-start align-items-center p-2">
                <i
                  class="fa-duotone fa-solid fa-gear"
                  style={{ fontSize: "20px" }}
                ></i>
                <Link className="dropdown-item" to="/">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
