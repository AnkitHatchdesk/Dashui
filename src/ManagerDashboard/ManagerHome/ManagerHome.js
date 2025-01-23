import React from "react";
import styles from "./ManagerHome.module.css";
import ManagerTask from "../ManagerTask/ManagerTask";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useManagerDash } from "../Context/ManagerDashContext";


function ManagerHome() {
  const { projects } = useManagerDash();


  // console.log("managers projects Home" , projects)

  return (
    <>
      <div className={`${styles.todocontainer}`}>
        <div className={`${styles.welcometext}`}>Welcome back, Anima 👋</div>
        <div className="d-flex align-items-center">
          <div className={`${styles.todogroup}`}>
            <img
              src="Images/Manager-images/360_F_679509191_FQW7KbRAaHVkCryRlomSQXOeM354SdJY2.png"
              alt="Team member"
              className={`${styles.todoavatar}`}
            />
            <img
              src="Images/Manager-images/9ea10b015ebe8467aaf9c0bbf30a4205.png"
              alt="Team member"
              className={`${styles.todoavatar}`}
            />
            <img
              src="Images/Manager-images/istockphoto-1354842602-612x612333.png"
              alt="Team member"
              className={`${styles.todoavatar}`}
            />
            <img
              src="Images/Manager-images/pexels-olly-3756681.jpg"
              alt="Team member"
              className={`${styles.todoavatar}`}
            />
            <img
              src="Images/Manager-images/9ea10b015ebe8467aaf9c0bbf30a4205.png"
              alt="Team member"
              className={`${styles.todoavatar}`}
            />
          </div>
          <span className={`${styles.addavatar}`}>+3</span>

          <button className={`${styles.invitebutton}`}>
            <i className="bi bi-people-fill"></i>
            <span>Invite</span>
          </button>
        </div>
      </div>

      <div class="container-fluid">
        <div class={`${styles.outerbox} mx-4`}>
          <div class={`row ${styles.innerouterbox}`}>
            <div class={`${styles.todobox} col-md-6 col-lg-7 mb-3`}>
              <div class={`${styles.innerbox}`}>
                <div class="div-1">
                <div class="div-2 d-flex justify-content-between">
                    <div class="d-flex position-relative">
                      <div>
                        <i
                          class="bi bi-calendar fs-2"
                          style={{color: "#a1a3a"}}
                        ></i>
                      </div>
                      <div><i class="bi bi-clock"></i></div>
                    </div>
                  
                  </div>
                  <div class="d-flex">
                    <div>20 june</div>
                    <div class="d-flex">
                      <i class="bi bi-dot"></i><span>Today</span>
                    </div>
                  </div>
                 
                  {/* start task container */}
                  {projects && projects.length > 0 ? (
                    projects.map((project) => (
                      <ManagerTask key={project.mangerId} projects={project} />
                    ))
                  ) : (
                    <p>No projects available</p>
                  )}
                </div>
              </div>
            </div>

            <div class="col-md-5 col-lg-5 h-auto">
              <div class="task-status-1">
                <div class={`${styles.taskstatusbox}`}>
                  <div class="To-do-inner-box d-flex justify-content-between px-3">
                    <div class="d-flex position-relative mt-2">
                      <div>
                        <i
                          class="bi bi-calendar fs-2"
                          style={{ color: "#a1a3ab" }}
                        ></i>
                      </div>
                      <div>
                        <i class="bi bi-check-lg"></i>
                        <span
                          style={{
                            color: "#ff6767",
                            lineHeight: "3",
                            paddingLeft: "15px",
                          }}
                        >
                          Task Status
                        </span>
                      </div>
                    </div>
                  </div>
                  <ProgressBar />
                </div>
              </div>

              {/* Task Completed  */}
              <div class={`${styles.taskstatusbox} mt-5`}>
                <div class="To-do-inner-box d-flex justify-content-between px-3">
                  <div class="d-flex position-relative mt-2">
                    <div>
                      <i
                        class="bi bi-calendar fs-2"
                        style={{ color: "#a1a3ab" }}
                      ></i>
                    </div>
                    <div>
                      <i class="bi bi-check-lg"></i>
                      <span
                        style={{
                          color: "#ff6767",
                          lineHeight: "3",
                          paddingLeft: "15px",
                        }}
                      >
                        Task Completed
                      </span>
                    </div>
                  </div>
                </div>
{/* 
                <ManagerTask />
                <ManagerTask /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagerHome;
