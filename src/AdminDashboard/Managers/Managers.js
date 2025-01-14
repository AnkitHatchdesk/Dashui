import React from "react";
import ManagerList from "./ManagerList";

import styles from "./Manager.module.css";
import { useManager } from "../Context/ManagerContext";
import Loader from "../../Loader";
import AddManager from "./AddManager";
import EditManager from "./EditManager";
import DeleteProjectModal from "../Modal/DeleteProjectModal";
import { useProject } from "../Context/ProjectContext";


function Managers() {
  const {
    managers,
    loading,
    handleShow,
    selectedManager,
    handleDelete
  } = useManager();

  const{projectToDelete , handleCloseModal  , showModal  , handleOpenModal }  = useProject()


  return (
    <>
      <div>
        <div className="todo-container">
          <div className="welcome-text ps-3 fs-2">Manage Managers</div>
          <div className="d-flex align-items-center me-4">
            <div className="todo-group">
              <button
                className={`${styles.invitebutton} container d-flex justify-content-center align-items-center `}
                style={{ width: "160px" }}
                onClick={() => handleShow(null)} // Add Member ke liye
              >
                Add Member{" "}
                <span>
                  <i className="bi bi-plus-lg"></i>
                </span>
              </button>
            </div>
            <div className="download">
              <i className="bi bi-download"></i>
            </div>
            <div className="pdf-box">
              <i className="bi bi-file-earmark-pdf"></i>
            </div>
            <i className="bi bi-printer ps-3"></i>
          </div>
        </div>

        <div className="container">
          <div className="manager-member-box">
            <div>
              <div className="mnager-member d-flex justify-content-between mt-2 mx-2 mb-3">
                <div className="manager-head">
                  <p></p>
                </div>
                <div className="d-flex">
                  <div className="select-container">
                    <div>
                      <select id="select1" className="select-box">
                        <option value="">Project</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    <div>
                      <select id="select2" className="select-box">
                        <option value="">Project Manager</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                      </select>
                    </div>
                    <div>
                      <select id="select3" className="select-box">
                        <option value="">Status</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
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
                          <th>Name</th>
                          <th>Project Name</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <Loader loading={loading} />
                          </tr>
                        ) : managers && managers.length > 0 ? (
                          managers.map((manager) => (
                            <ManagerList
                              key={manager.id}
                              manager={manager}
                              handleShow={() => handleShow(manager)} 
                              handleOpenModal = {handleOpenModal}// Edit manager ke liye
                            />
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="text-center">
                              No managers available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Conditional rendering based on selectedManager */}
      {selectedManager === null && <AddManager />} {/* Add Manager modal */}
      {selectedManager !== null && <EditManager />} {/* Edit Manager modal */}
      <DeleteProjectModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleDelete={handleDelete}
        id={projectToDelete}
      />
    </>
  );
}

export default Managers;
