import React from "react";
import TaskList from "./TaskList";
import Rating from "../Rating/Rating";



function Task() {
  return (
    <>
      <div className="Container-fluid">
        <div className="Container">
          <div className="row">
            <div className="col-lg-8">
              <div class="today-task ">
                <div class="today-task-body">
                  <h5 class="card-title mb-4">Today's Tasks</h5>
                  <div class="">
                    <div class="today-task-box">
                      <ul class="task-list-body">
                        <li class="task-list d-flex">
                          <p>All</p>
                          <span class="counter-box">10</span>
                        </li>
                        <li class="task-list">
                          <p>Importent</p>
                        </li>
                        <li class="task-list d-flex">
                          <p>Notes</p>
                          <span class="counter-box">10</span>
                        </li>
                        <li class="task-list d-flex">
                          <p>Links</p>
                          <span class="counter-box">10</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
              </div>
            </div>
            <div className="col-lg-4">
            <Rating/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
