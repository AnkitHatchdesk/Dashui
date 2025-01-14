import React from "react";
import styles from "./ManageTask.module.css";
import ManageTaskList from "./ManageTaskList";
import { useManagerDash } from "../Context/ManagerDashContext";
import DeleteProjectModal from "../../AdminDashboard/Modal/DeleteProjectModal";

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
  } = useManagerDash();

  console.log("Tasks im mnagaerTasks", Tasks);

  const disablePrevious = currentPage === 1;
  const disableNext = currentPage === totalPages;
  return (
    <>
      <div>
        <div>
          <div className="todo-container">
            <div className="welcome-text ps-3 fs-2">Managers Projects</div>
          </div>
          <div className="container-xl">
            <div className={`table-responsive ${styles.tables}`}>
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2 className="fs-2 text-black">Managers</h2>
                    </div>
                  </div>
                </div>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Assigned To</th>
                      <th>Periority</th>
                      <th>StartDate</th>
                      <th>EndDate</th>
                      <th>Progress</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Tasks.map((Task) => (
                      <ManageTaskList key={Task.taskID} Tasks={Task}  handleOpenModal={handleOpenModal} />
                    ))}
                  </tbody>
                </table>
                <div className="clearfix">
                  <div className="hint-text">
                    Showing <b>{getStartIndex()}</b> to <b>{getEndIndex()}</b>{" "}
                    of <b>{totalEntries}</b> entries
                  </div>
                  <ul className="pagination">
                    <li
                      className={`page-item ${disablePrevious ? "disabled" : ""
                        }`}
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
                        className={`page-item ${currentPage === index + 1 ? "active" : ""
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
