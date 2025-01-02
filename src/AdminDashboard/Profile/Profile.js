import React from 'react';
import styles from './Profile.module.css'; // Import CSS module
import { useAuth } from '../Context/AuthContext';


function Profile() {
  const{user} = useAuth()
  return (
    <div className={`container py-2 ps-4`}>
      <div className={`card ${styles['shadow-sm']}`}>
        <div className="card-body">
          {/* Header Section */}
          <div
            className={`d-flex align-items-center mb-4 p-3 rounded ${styles['user-profile-box']}`}
          >
            <div className="position-relative">
              <img
                src="https://via.placeholder.com/48"
                alt="Profile"
                className="rounded-circle"
                width="48"
                height="48"
              />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">{`${user.firstName}${user.lastName}`}</h6>
              <small className="text-muted">{user.email}</small>
            </div>
            <button
              className={`btn btn-sm ms-auto ${styles['go-back-btn']} text-white`}
            >
              Edit
            </button>
          </div>

          {/* Form Section */}
          <form>
            <div className="row g-3">
              {/* Full Name */}
              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Type here"
                  value={`${user.firstName} ${user.lastName}`}
                />
              </div>

              {/* Gender */}
              <div className="col-md-6">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select className="form-select" id="gender">
                  <option value="">—Select—</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-light">@</span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email}
                    placeholder="Type here"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="col-md-6">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select className="form-select" id="country">
                  <option value="">—Select—</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
              </div>

              {/* Phone Number */}
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={user.phoneNumber}
                  placeholder="Type here"
                />
              </div>

              {/* DOB */}
              <div className="col-md-6">
                <label htmlFor="dob" className="form-label">
                  DOB
                </label>
                <input type="date" className="form-control" id="dob" />
              </div>
            </div>

            {/* Buttons */}
            <div
              className={`d-flex justify-content-end align-items-center gap-2 mt-4 ${styles['bottom-submit-box']} pe-4`}
            >
              <button
                type="submit"
                className={`btn btn-warning px-4 me-4 ${styles['save-btn-box']} text-white`}
              >
                Save
              </button>
              <button
                type="button"
                className={`btn btn-outline-warning px-4 ${styles['cancel-btn-box']} text-white`}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
