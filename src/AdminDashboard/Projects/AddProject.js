import React from "react";
import { Link } from "react-router-dom";
import { useProject } from "../Context/ProjectContext";
import Loader from "../../Loader";
import styles from "./AddProject.module.css";

function AddProject() {
  const {
    handleChange,
    // handleAddproject,
    handleProjectSubmit,
    projectData,
    handleFileChange,
    severityOptions,
    managers,
    technologies,
    loading,
    clients,
    error
  } = useProject();

  return (
    <div>
      <div className="form-accrdian">
        <Link
          to="/"
          className="text-decoration-none"
          style={{ color: "#787486" }}
        >
          Home
        </Link>
        <i className="bi bi-chevron-right mx-2"></i>
        <Link className="text-decoration-none" style={{ color: "#787486" }}>
          Create-Project
        </Link>
      </div>

      {loading ? <Loader loading={loading} /> :(
        <div className="form-content mx-5">
        <div className="form-box">
          <div className="container-fluid py-5">
            <div className="form-container p-4">
              <div className="admin-create-new-project d-flex justify-content-between align-items-center mb-4">
                <h4 className="create-new-project-head mb-0 ">
                  Create New Project
                </h4>
              </div>

              <form onSubmit={handleProjectSubmit} encType="multipart/form-data">
                <div className="row g-4">
                  {/* Title and Severity Level */}
                  <div className="col-lg-6">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Project Name"
                      name="title"
                      value={projectData.title}
                      onChange={handleChange}
                    />
                    {error.title && <span className="error-message">{error.title}</span>}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Severity Level</label>
                    <select
                      className="form-select"
                      name="severityLevel"
                      value={projectData.severityLevel}
                      onChange={handleChange}
                    >
                      <option value="">---Select---</option>
                      {severityOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.level}
                        </option>
                      ))}
                    </select>
                    {error.severityLevel && <span className="error-message">{error.severityLevel}</span>}
                  </div>

                  {/* Start Date, End Date, and Team Size */}
                  <div className="col-md-4">
                    <label className="form-label">Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="startDate"
                      value={projectData.startDate}
                      onChange={handleChange}
                    />
                    {error.startDate && <span className="error-message">{error.startDate}</span>}
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="deadline"
                      value={projectData.deadline}
                      onChange={handleChange}
                    />
                      {error.deadline && <span className="error-message">{error.deadline}</span>}
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Team Size</label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      name="teamSize"
                      value={projectData.teamSize}
                      onChange={handleChange}
                    />
                      {error.teamSize && <span className="error-message">{error.teamSize}</span>}
                  </div>

                  {/* Project Description */}
                  <div className="col-12">
                    <label className="form-label">Project Description</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name="description"
                      value={projectData.description}
                      onChange={handleChange}
                    ></textarea>
                      {error.description && <span className="error-message">{error.description}</span>}
                  </div>

                  {/* Assign Manager and Upload Image */}
                  <div className="col-md-7">
                    <div className="mb-3">
                      <label className="form-label">Assign Manager</label>
                      <select
                        className="form-select"
                        name="manager"
                        value={projectData.manager}
                        onChange={handleChange}
                      >
                        <option value="">---Select---</option>
                        {managers.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.fullName}
                          </option>
                        ))}
                      </select>
                      {error.manager && <span className="error-message">{error.manager}</span>}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Technology Stack</label>
                      <select
                        className="form-select"
                        name="technologyStack"
                        value={projectData.technologyStack}
                        onChange={handleChange}
                      >
                        <option value="">---Select---</option>
                        {technologies.map((option) => (
                          <option key={option.deptId} value={option.deptId}>
                            {option.deptName}
                          </option>
                        ))}
                      </select>
                      {error.technologyStack && <span className="error-message">{error.technologyStack}</span>}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Client</label>
                      <select
                        className="form-select"
                        name="client"
                        value={projectData.client}
                        onChange={handleChange}
                      >
                        <option value="">---Select---</option>
                        {clients.map((option) => (
                          <option key={option.clientID} value={option.clientID}>
                            {option.clientName}
                          </option>
                        ))}
                      </select>
                      {error.client && <span className="error-message">{error.client}</span>}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <label className="form-label">Upload Image</label>
                    <div className="upload-image-box">
                      <i className="bi bi-image"></i>
                      <p className="text-muted mb-0 text-center">
                        Drag and drop files here
                      </p>
                      <input
                        type="file"
                        className="btn btn-light mt-2 border"
                        name="imagePath"
            
                        onChange={handleFileChange} 
                        style={{ width: "70%" }}
                      />
                    </div>
                  </div>

                  {/* Form Buttons */}
                  <div
                    className={`${styles.FormlastButtonbox} col-12 d-flex justify-content-end gap-2`}
                  >
                    <button
                      type="submit"
                      className={`btn  px-4 me-4 ${styles.lastButtoncreate}`}
                    >
                      Create
                    </button>
                    <button
                      type="button"
                      className={`btn   px-4 ${styles.lastButtoncancel}`}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      )}

      
    </div>
  );
}

export default AddProject;
