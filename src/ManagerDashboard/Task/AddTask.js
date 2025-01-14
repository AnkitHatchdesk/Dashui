import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./AddTask.module.css";
import { useManagerDash } from "../Context/ManagerDashContext";

function AddTask() {
    const { handleFileChange, status , severityOptions, handleChange, TaskData, Employees , handleTaskSubmit , setTaskIdInContext } = useManagerDash();

    console.log("Employees", Employees)

     const{id} = useParams();

     useEffect(() => {
        setTaskIdInContext(id);
    }, [id, setTaskIdInContext]);

    return (
        <div>
            <div className="form-accrdian">
                <Link
                    to="/manager-dashboard"
                    className="text-decoration-none"
                    style={{ color: "#787486" }}
                >
                    Home
                </Link>
                <i className="bi bi-chevron-right mx-2"></i>
                <span className="text-decoration-none" style={{ color: "#787486" }}>
                    Add Task
                </span>
            </div>

            <div className="form-content mx-5">
                <div className="form-box">
                    <div className="container-fluid py-5">
                        <div className="form-container p-4">
                            <div className="admin-create-new-task d-flex justify-content-between align-items-center mb-4">
                                <h4 className="create-new-task-head mb-0">Create New Task</h4>
                            </div>

                            <form onSubmit={handleTaskSubmit}   encType="multipart/form-data">
                                <div className="row g-4">
                                    {/* Task Title */}
                                    <div className="col-lg-6">
                                        <label className="form-label">Task Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Task Title"
                                            name="taskTitle"
                                            value={TaskData.taskTitle}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Severity Level */}
                                    <div className="col-lg-6">
                                        <label className="form-label">Severity Level</label>
                                        <select
                                            className="form-select"
                                            name="severityLevel"
                                            value={TaskData.severityLevel}
                                            onChange={handleChange}
                                        >
                                            <option value="">---Select---</option>
                                            {severityOptions.map((option) => (
                                                <option key={option.id} value={option.id}>
                                                    {option.level}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Start Date */}
                                    <div className="col-md-6">
                                        <label className="form-label">Start Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="startDate"

                                            value={TaskData.startDate}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* End Date */}
                                    <div className="col-md-6">
                                        <label className="form-label">End Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="endDate"

                                            value={TaskData.endDate}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Task Description */}
                                    <div className="col-12">
                                        <label className="form-label">Task Description</label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            placeholder="Enter task details here"
                                            name="taskDescr"
                                            value={TaskData.taskDescr}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <div className="row d-flex  align-items-start mt-3 justify-content-center">
                                        {/* Upload Image */}
                                        <div className="col-md-7">
                                            <label className="form-label">Status</label>
                                            <select
                                                className="form-select"
                                                name="status"
                                                value={TaskData.status}
                                                onChange={handleChange}
                                            >
                                                <option value="">---Select---</option>
                                                {status.map((option) => (
                                                    <option key={option.statusId} value={option.statusId}>
                                                        {option.statusName}
                                                    </option>
                                                ))}
                                            </select>

                                            <label className="form-label">Assign To</label>
                                            <select
                                                className="form-select"
                                                name="AssignManager"
                                                value={TaskData.AssignManager}
                                                onChange={handleChange}
                                            >
                                                <option value="">---Select---</option>
                                                {Employees.map((option) => (
                                                    <option key={option.id} value={option.id}>
                                                        {`${option.firstName}  ${option.lastName}`}
                                                    </option>
                                                ))}
                                            </select>

                                            <div className="mt-5 d-flex flex-column">
                                                <label for="progress">Progress</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name="progress"
                                                    value={TaskData.progress}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <label className="form-label">Upload Document</label>
                                            <div className={`${styles.uploadimagebox}`}>
                                                <i className="bi bi-image"></i>
                                                <p className="text-muted mb-0 text-center">
                                                    Drag and drop files here
                                                </p>
                                                <input
                                                    type="file"
                                                    className="btn btn-light mt-2 border"
                                                    name="imagePath"
                                                    accept="*/"
                                                    multiple
                                                    onChange={handleFileChange}
                                                    style={{ width: "70%" }}
                                                />
                                            </div>
                                        </div>

                                        {/* Form Buttons */}
                                        <div
                                            className={`${styles.FormlastButtonbox} col-12 d-flex justify-content-end gap-2`}
                                        >
                                            <button
                                                type="button"
                                                className={`btn px-4 ${styles.lastButtoncancel}`}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className={`btn px-4 me-4 ${styles.lastButtoncreate}`}
                                            >
                                                Create Task
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTask;
