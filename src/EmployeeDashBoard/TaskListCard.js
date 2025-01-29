
import "./TaskListCard.css"
import { useEmployeeDash } from './Context/EmployeeDashContext'


function TaskListCard() {
  const { groupedTasks, handleStatusChange, Status  } = useEmployeeDash();

  return (
    <div class="container-fluid" >
      <div class="container">
        <div class="projectname d-flex justify-content-between align-items-center pt-4 pb-2">
          <div class="d-flex justify-content-center align-items-center">
            <h2 className="fw-bold fs-1">Event Management</h2>
            <a href="#"><i class='bx bxs-edit ms-2 text-primary'></i></a>
            <a href="#"><i class='bx bx-link-alt ms-2 text-primary' ></i></a>
          </div>
          <div class="dropdown">
            <button class="btn dropdown-toggle text-white" style={{ background: "rgb(183, 127, 247)" }} type="" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              last 30 days
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">last 30 days</a></li>
              <li><a class="dropdown-item" href="#">last week</a></li>
              <li><a class="dropdown-item" href="#">today</a></li>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-flex">
            <div class="dropdown me-2">
              <button class="btn btn-white border-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-filter me-2"></i>Filter
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">filter1</a></li>
                <li><a class="dropdown-item" href="#">filter2</a></li>
                <li><a class="dropdown-item" href="#">filter3</a></li>
              </ul>
            </div>
            <div class="dropdown mx-2">
              <button class="btn btn-white border-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-calendar-week me-2"></i> Today
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item" href="#">today</a></li>
                <li><a class="dropdown-item" href="#">tomorrow</a></li>
                <li><a class="dropdown-item" href="#">yesterday</a></li>
              </ul>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button class="btn btn-white border-secondary me-3" type="button" >
              <i class='bx bx-user-circle me-2' ></i>Share
            </button>
            <a href="" class="text-decoration-none text-dark fs-4">
              <i class='bx bx-grid-alt'></i>
            </a>
          </div>
        </div>

        <div class="row ">
          {/* For To Do task */}
          <div class="col-md-4 rounded" style={{ background: "#f5f5f5" }}>
            <div class="d-flex justify-content-between align-items-center">
              <h6>
                <span class="fs-2">.</span>
                To Do
                <span class="badge bg-danger mx-2 rounded-circle">{groupedTasks.Todo.length}</span>
              </h6>
              <a href="#" class="text-decoration-none"><div class="border px-2 rounded" style={{ backgroundColor: "rgb(163, 163, 247)", color: "blue" }}>+</div></a>
            </div>
            <hr class="border-3 border-primary" />
            {groupedTasks.Todo.length === 0 ? (
              <div className="text-center text-muted py-4">
                No Task Available
              </div>
            ) : (
              groupedTasks.Todo.map((task) => (
                <div className="priority p-4 mb-3 rounded" key={task.taskID} style={{ backgroundColor: "white" }}>
                  <div className="low d-flex justify-content-between align-items-center pb-3">
                    <div className="border px-2 rounded" style={{ backgroundColor: "rgb(246, 246, 158)", color: "rgb(239, 196, 5)" }}>low</div>


                    <div className="status-dropdown ">
                    <select
                      className="form-select"
                      value={task.statusId} // Bind to each task's current statusId
                      onChange={(event) => handleStatusChange(task.taskID, parseInt(event.target.value, 10))}// Pass taskID to identify which task is being updated
                    >
                      <option value="">Select Status</option>
                      {Status.map((status) => (
                        <option key={status.statusId} value={status.statusId}>
                          {status.statusName}
                        </option>
                      ))}
                    </select>
                    </div>

                  </div>
                  <h6>{task.taskTitle}</h6>
                  <p className="text-secondary">{task.taskDescr}</p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex position-relative">
                      <a href="#" className="position-relative">
                        <img src="images/Employee-images/user.jpg" alt="userprofile" className="rounded-circle" width="30" height="30" />
                      </a>
                      <a href="#" className="position-absolute" style={{ left: "20px" }}>
                        <img src="images/Employee-images/user.jpg" alt="userprofile" className="rounded-circle" width="30" height="30" />
                      </a>
                      <a href="#" className="position-absolute" style={{ left: "40px" }}>
                        <img src="images/Employee-images/user.jpg" alt="userprofile" className="rounded-circle" width="30" height="30" />
                      </a>
                    </div>
                    <a href="#" className="text-decoration-none">
                      <div className="text-secondary d-flex align-items-center">
                        <i className="bx bx-message-alt-dots px-2"></i>
                        comment
                      </div>
                    </a>
                    <a href="#" className="text-decoration-none">
                      <div className="text-secondary d-flex align-items-center">
                        <i className="bx bx-file px-2"></i>
                        files
                      </div>
                    </a>
                  </div>
                </div>
              ))
            )}

          </div>


          {/* For In progress  */}
          <div class="col-md-4 rounded pt-3" style={{ background: "#f5f5f5" }}>
            <div class="d-flex justify-content-between align-items-center">
              <h6>On Progress <span class="badge bg-warning mx-2 rounded-circle">{groupedTasks.InProgress.length}</span></h6>
              {/* <a href="#" class="text-decoration-none"><div class="border px-2 rounded" style={{ backgroundColor: "rgb(163, 163, 247)", color: "blue" }}>+</div></a> */}
            </div>
            <hr class="border-3 border-warning" />
            {groupedTasks.InProgress.length === 0 ? (
              <div className="text-center text-muted py-4">
                No Task Available
              </div>
            ) : (
              groupedTasks.InProgress.map((task) => (
                <div className="priority p-4 mb-3 rounded" key={task.taskID} style={{ backgroundColor: "white" }}>
                  <div className="low d-flex justify-content-between align-items-center pb-3">
                    <div className="border px-2 rounded" style={{ backgroundColor: "rgb(246, 246, 158)", color: "rgb(239, 196, 5)" }}>low</div>
                   
                    <div className="status-dropdown ">
                    <select
                      className="form-select"
                      value={task.statusId} // Bind to each task's current statusId
                      onChange={(event) => handleStatusChange(task.taskID, parseInt(event.target.value, 10))}// Pass taskID to identify which task is being updated
                    >
                      <option value="">Select Status</option>
                      {Status.map((status) => (
                        <option key={status.statusId} value={status.statusId}>
                          {status.statusName}
                        </option>
                      ))}
                    </select>
                    </div>
                  </div>
                  <h6>{task.taskTitle}</h6>
                  <p className="text-secondary">{task.taskDescr}</p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex position-relative">
                      <a href="#" className="position-relative">
                        <img src="images/Employee-images/user.jpg" alt="userprofile" className="rounded-circle" width="30" height="30" />
                      </a>
                      <a href="#" className="position-absolute" style={{ left: "20px" }}>
                        <img src="images/Employee-images/user.jpg" alt="userprofile" className="rounded-circle" width="30" height="30" />
                      </a>
                      <a href="#" className="position-absolute" style={{ left: "40px" }}>
                        <img src="images/Employee-images/user.jpg" alt="userprofile" className="rounded-circle" width="30" height="30" />
                      </a>
                    </div>
                    <a href="#" className="text-decoration-none">
                      <div className="text-secondary d-flex align-items-center">
                        <i className="bx bx-message-alt-dots px-2"></i>
                        comment
                      </div>
                    </a>
                    <a href="#" className="text-decoration-none">
                      <div className="text-secondary d-flex align-items-center">
                        <i className="bx bx-file px-2"></i>
                        files
                      </div>
                    </a>
                  </div>
                </div>
              ))
            )}

          </div>


          {/* for done */}
          <div className="col-md-4 rounded pt-3" style={{ background: "#f5f5f5" }}>
            <div className="d-flex justify-content-between align-items-center">
              <h6>Done <span className="badge bg-success mx-2 rounded-circle">{groupedTasks.Done.length}</span></h6>

            </div>
            <hr className="border-3 border-success" />

            {/* Check if there are any completed tasks */}
            {groupedTasks.Done.length === 0 ? (
              <p className="text-center text-secondary py-4">Not Yet Task Complete</p>
            ) : (

              groupedTasks.Done.map((task) => (
                <div className="priority p-4 mb-3 rounded" key={task.taskID} style={{ backgroundColor: "white" }}>
                  <div className="low d-flex justify-content-between align-items-center pb-3">
                    <div className="border px-2 rounded" style={{ backgroundColor: "#9ce8bc", color: "#68B266" }}>completed</div>
                   
                    <div className="status-dropdown ">
                    <select
                      className="form-select"
                      value={task.statusId} // Bind to each task's current statusId
                      onChange={(event) => handleStatusChange(task.taskID, parseInt(event.target.value, 10))}// Pass taskID to identify which task is being updated
                    >
                      <option value="">Select Status</option>
                      {Status.map((status) => (
                        <option key={status.statusId} value={status.statusId}>
                          {status.statusName}
                        </option>
                      ))}
                    </select>
                    </div>
                  </div>
                  <h6>{task.taskTitle}</h6>
                  <p className="text-secondary">{task.taskDescr}</p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex position-relative">
                      <a href="#" className="position-relative">
                        <img src="images/Employee-images/user.jpg" alt="userprofile" className="rounded-circle" width="30" height="30" />
                      </a>
                      <a href="#" className="position-absolute" style={{ left: "40px" }}>
                        <img src="images/Employee-images/user.jpg" alt="userprofile" className="rounded-circle" width="30" height="30" />
                      </a>
                      <a href="#" className="position-absolute" style={{ left: "40px" }}>
                        <img src="images/Employee-images/user.jpg" alt="userprofile" className="rounded-circle" width="30" height="30" />
                      </a>
                    </div>
                    <a href="#" className="text-decoration-none">
                      <div className="text-secondary d-flex align-items-center">
                        <i className="bx bx-message-alt-dots px-2"></i>
                        comment
                      </div>
                    </a>
                    <a href="#" className="text-decoration-none">
                      <div className="text-secondary d-flex align-items-center">
                        <i className="bx bx-file px-2"></i>
                        files
                      </div>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default TaskListCard;












