import React from "react";
import ManagerList from "./ManagerList";

function Managers() {
  return (
    <>
      <div>
        <div className="todo-container">
          <div className="welcome-text ps-3">Manage Managers</div>
          <div className="d-flex align-items-center me-4">
            <div className="todo-group">
              <button className="invite-button">
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
              <div className="mnager-member d-flex justify-content-between mt-2 mx-2">
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
                <div className="table-responsive">
                  <div className="table-wrapper">
                    <div className="table-title">
                      <div className="row">
                        <div className="col-sm-6">
                          <h2>Manage Contacts</h2>
                        </div>
                      </div>
                    </div>
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Project</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th>Progress</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <ManagerList />
                      </tbody>
                    </table>
                    <div className="clearfix">
                      <div className="hint-text">
                        Showing <b>5</b> out of <b>25</b> entries
                      </div>
                      <ul className="pagination">
                        <li className="page-item">
                          <a href="#" className="page-link">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            2
                          </a>
                        </li>
                        <li className="page-item active">
                          <a href="#" className="page-link">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            5
                          </a>
                        </li>
                        <li className="page-item">
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
        </div>
      </div>
    </>
  );
}

export default Managers;
