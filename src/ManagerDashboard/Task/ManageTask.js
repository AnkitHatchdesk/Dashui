import React, { useEffect } from "react";
import styles from "./ManageTask.module.css";
import ManageTaskList from "./ManageTaskList";
import { useManagerDash } from "../Context/ManagerDashContext";
import DeleteProjectModal from "../../AdminDashboard/Modal/DeleteProjectModal";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Loader";

function ManageTask() {
  const {
    handlePageChange,
    getEndIndex,
    getStartIndex,
    totalEntries,
    totalPages,
    currentPage,
    Tasks,
    handleOpenModal,
    handleCloseModal,
    handleDelete,
    showModal,
    projectToDelete,
    fetchTasks,
    loading,
    projects,
  } = useManagerDash();

  console.log("ManageTask projects:", projects);

  const { id } = useParams(); // Fetch project ID from URL

  useEffect(() => {
    fetchTasks(id); // Fetch tasks based on the project ID
  }, [id]);

  // Disable previous and next buttons
  const disablePrevious = currentPage === 1;
  const disableNext = currentPage === totalPages || Tasks.length === 0;

  const currentProject = projects?.find((project) => project.id === parseInt(id));

  return (
    <>
      <div className={`${styles.formaccrdian}`}>
        <Link
          to="/Manager/Dashboard"
          className="text-decoration-none"
          style={{ color: "#787486" }}
        >
          Home
        </Link>
        <i className="bi bi-chevron-right mx-2"></i>
        <span className="text-decoration-none" style={{ color: "#787486" }}>
          View Task
        </span>
      </div>

      <div className="container-xl">
        <div className={`table-responsive ${styles.tables}`}>
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2 className="fs-2 text-black">Tasks</h2>
                </div>
                <div className="col-sm-6 d-flex justify-content-end align-items-center">
                  <Link
                    type="button"
                    className="btn btn-secondary"
                    to={currentProject ? `/AddTask/${currentProject.id}` : "#"}
                  >
                    Add Task
                  </Link>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Assigned To</th>
                  <th>Priority</th>
                  <th>StartDate</th>
                  <th>EndDate</th>
                  <th>Progress</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      <Loader loading={loading} />
                    </td>
                  </tr>
                ) : Tasks && Tasks.length > 0 ? (
                  Tasks.map((Task) => (
                    <ManageTaskList
                      key={Task.taskID}
                      Tasks={Task}
                      handleOpenModal={handleOpenModal}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No Task available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>{getStartIndex()}</b> to <b>{getEndIndex()}</b> of{" "}
                <b>{totalEntries}</b> entries
              </div>
              <ul className="pagination">
                <li
                  className={`page-item ${disablePrevious ? "disabled" : ""}`}
                  onClick={() =>
                    !disablePrevious && handlePageChange(currentPage - 1)
                  }
                >
                  <a href="#" className="page-link">
                    Previous
                  </a>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index + 1}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    <a href="#" className="page-link">
                      {index + 1}
                    </a>
                  </li>
                ))}
                <li
                  className={`page-item ${disableNext ? "disabled" : ""}`}
                  onClick={() =>
                    !disableNext && handlePageChange(currentPage + 1)
                  }
                >
                  <a href="#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
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
}

export default ManageTask;
