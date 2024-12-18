import React from "react";

import PerformanceCard from "../Performance/PerformanceCard";
import TaskStatusDetails from "./TaskStatusDetails";
import Rating from "../Rating/Rating";
function TaskStatus() {
  return (
    <>
      <div class="row g-4 mx-3">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title mb-4">Recent Transactions</h5>
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
                <table class="table table-hover">
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
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
        <PerformanceCard />
   
        </div>
      </div>
    </>
  );
}

export default TaskStatus;
