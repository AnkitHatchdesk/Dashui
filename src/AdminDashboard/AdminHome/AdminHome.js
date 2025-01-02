import React from "react";
import RevenueCard from "../Revenue/RevenueCard";
import Task from "../Task/Task";
import TaskStatus from "../TaskStatus/TaskStatus";

function AdminHome() {
  return (
    <div className="container">
      <div className="row g-4 mb-4 mx-3">
        <div className="col-lg-3 col-sm-6">
          <RevenueCard />
        </div>
        <div className="col-lg-3 col-sm-6">
          <RevenueCard />
        </div>
        <div className="col-lg-3 col-sm-6">
          <RevenueCard />
        </div>
        <div className="col-lg-3 col-sm-6">
          <RevenueCard />
        </div>
      </div>
      
      {/* Task Status and Task components */}
      <div className="row g-4 mb-4 mx-3">
        <div className="col-12">
          <TaskStatus />
        </div>
      </div>
      <div className="row g-4 mb-4 mx-3">
        <div className="col-12">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
