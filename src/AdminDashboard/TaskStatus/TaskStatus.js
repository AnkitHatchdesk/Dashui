import React from "react";

import TaskStatusDetails from "./TaskStatusDetails";
import styles from './TaskStatus.module.css';

function TaskStatus() {
  return (
    <>
      <div class="row ">
        <div class="col-lg-8">
          <div class="card task-card">
            <div class="card-body">
              <div
                class="d-flex justify-content-between flex-wrap lh-base
      "
              >
                <h5 class="card-title task-head">Today's Tasks</h5>
                <div class="card-title-name d-flex flex-nowrap gap-2 mb-4">
                  <button class="task-filter active">All (12)</button>
                  <button class="task-filter">Important(5)</button>
                  <button class="task-filter">Notes(4)</button>
                  <button class="task-filter">Links(3)</button>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-hover text-center">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Project Manager</th>
                      <th>Due Date</th>
                      <th>staus</th>
                      <th>progress</th>
                    </tr>
                  </thead>
                <TaskStatusDetails />
                <TaskStatusDetails />
                <TaskStatusDetails />
                <TaskStatusDetails />
                <TaskStatusDetails />
                <TaskStatusDetails />
                <TaskStatusDetails />
                <TaskStatusDetails />  
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
        <div class="card mb-4 cart-box">
         <div class="card-body">
           <div class="d-flex justify-content-between">
             <h5 class="card-title pt-4">Performance</h5>
             <select  className={`mb-3 ${styles['form-select']}`}>
               <option selected>All</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
             </select>
           </div>
           <div class="d-flex justify-content-center mb-4">
             <div class="chart-container">
               <canvas id="myChart2"></canvas>
             </div>
           </div>
           <div
             class="d-flex justify-content-evenly text-muted"
             style={{fontsize: "12px"}}
           >
             <span class="project-verification d-flex flex-column align-items-center">
               <h5>95</h5>
               <p>Total project</p>
             </span>
             <span class="project-verification d-flex flex-column align-items-center">
               <h5>95</h5>
               <p>Completed</p>
             </span>
             <span class="project-verification d-flex flex-column align-items-center">
               <h5>95</h5>
               <p>Delayed</p>
             </span>
             <span class="project-verification d-flex flex-column align-items-center">
               <h5>95</h5>
               <p>On going</p>
             </span>
           </div>
         </div>
       </div>
   
        </div>
      </div>
    </>
  );
}

export default TaskStatus;
