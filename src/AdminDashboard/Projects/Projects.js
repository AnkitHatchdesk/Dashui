import React, { useState } from "react";
import ProjectList from "./ProjectList";
import { useProject } from "../Context/ProjectContext";
import Loader from "../../Loader";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import DeleteModal from "../Modal/DeleteProjectModal";
import DeleteProjectModal from "../Modal/DeleteProjectModal";


const Projects = () => {
  const {
    projects,
    loading,
    totalPages,
    handlePageChange,
    currentPage,
    totalEntries,
    getEndIndex,
    getStartIndex,
    handleSearchChange,
    searchQuery,
    handleSearchSubmit,
    handleOpenModal,
    handleCloseModal,
    handleDelete,
    showModal,
    projectToDelete,

  } = useProject();

  const disablePrevious = currentPage === 1;
  const disableNext = currentPage === totalPages;

  return (
    <>
      <div>
        <div className="form-accrdian">
          <Link to="/AdminHome" className="text-decoration-none" style={{ color: "#787486" }}>
            Home
          </Link>
          <i className="bi bi-chevron-right mx-2"></i>
          <Link className="text-decoration-none" style={{ color: "#787486" }}>
            Projects
          </Link>
        </div>
        <div className="todo-container"></div>
        <div className="container">
          <div className="manager-member-box">
            <div>
              <div className="mnager-member d-flex justify-content-between mt-2 mx-2">
                <div className="manager-head">
                  <p></p>
                </div>
              </div>
              <div className="container-xl">
                <div className={` table-responsive ${styles.tables}`}>
                  <div className="table-wrapper">
                    <div className="table-title ">
                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-6">
                          <h2 className="fs-2 text-black">Manage Projects</h2>
                        </div>
                        <div className="col-sm-6 text-end">
                          <input
                            type="search"
                            className=" w-50 h-50"
                            value={searchQuery}
                            onChange={handleSearchChange}
                          />
                          <input type="submit" value="button" onClick={handleSearchSubmit} />
                        </div>
                      </div>
                    </div>
                    <table className={`table table-striped table-hover ${styles.abc}`}>
                      <thead>
                        <tr className="text-start">
                          <th>Project Name</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Ass. Manager</th>
                          <th>Technology</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <Loader loading={loading} />
                          </tr>
                        ) : projects && projects.length > 0 ? (
                          projects.map((project) => (
                            <ProjectList
                              key={project.id}
                              project={project}
                              handleOpenModal={handleOpenModal}
                            />
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6" className="text-center">
                              No projects available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <div className="clearfix">
                      <div className="hint-text">
                        Showing <b>{getStartIndex()}</b> to <b>{getEndIndex()}</b> of <b>{totalEntries}</b>{" "}
                        entries
                      </div>
                      {/* <ul className="pagination">
                        <li
                          className={`page-item ${disablePrevious ? "disabled" : ""}`}
                          onClick={() => !disablePrevious && handlePageChange(currentPage - 1)}
                        >
                          <a href="#" className="page-link">
                            Previous
                          </a>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                          <li
                            key={index + 1}
                            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                            onClick={() => handlePageChange(index + 1)}
                          >
                            <a href="#" className="page-link">
                              {index + 1}
                            </a>
                          </li>
                        ))}
                        <li
                          className={`page-item ${disableNext ? "disabled" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            !disableNext && handlePageChange(currentPage + 1);
                          }}
                        >
                          <a href="#" className="page-link">Next</a>
                        </li>
                      </ul> */}

                      <ul className="pagination">
                        <li
                          className={`page-item ${disablePrevious ? "disabled" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!disablePrevious) handlePageChange(currentPage - 1);
                          }}
                        >
                          <span className="page-link" style={{cursor:"pointer"}}>Previous</span>
                        </li>

                        {[...Array(totalPages)].map((_, index) => (
                          <li
                            key={index + 1}
                            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(index + 1);
                            }}
                          >
                            <span className="page-link" style={{cursor:"pointer"}}>{index + 1}</span>
                          </li>
                        ))}

                        <li
                          className={`page-item ${disableNext ? "disabled" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!disableNext) handlePageChange(currentPage + 1);
                          }}
                        >
                          <span className="page-link" style={{cursor:"pointer"}}>Next</span>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteProjectModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleDelete={handleDelete}
        id={projectToDelete}
      />
    </>
  );
};

export default Projects;



