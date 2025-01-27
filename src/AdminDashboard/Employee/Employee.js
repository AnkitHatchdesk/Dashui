import React, { useState, useEffect } from "react";
import styles from "./Employees.module.css";
import { Link } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import { useEmployee } from "../Context/EmployeeContext";
import { useProject } from "../Context/ProjectContext";
import AddEmployee from "./AddEmployee";
import EditEmployees from "./EditEmployees";
import DeleteProjectModal from "../Modal/DeleteProjectModal";

const Employee = () => {
    const { Employees, selectedEmployee, handleDelete, handleShow } = useEmployee();
    const { projectToDelete, handleCloseModal, showModal, handleOpenModal } = useProject();

    return (
        <>
            <div>
                <div className="form-accrdian">
                    <Link to="/" className="text-decoration-none" style={{ color: "#787486" }}>
                        Home
                    </Link>
                    <i className="bi bi-chevron-right mx-2"></i>
                    <Link className="text-decoration-none" style={{ color: "#787486" }}>
                        Employees
                    </Link>
                </div>

                <div className="todo-container mt-5 d-flex align-items-center justify-content-between">
                    <div className="welcome-text ps-3 fs-2 mt-5">Manage Employees</div>
                    <div className="d-flex align-items-center me-4 mt-5">
                        <div className="todo-group">
                            <button
                                className={`${styles.invitebutton} container d-flex justify-content-center align-items-center `}
                                style={{ width: "160px" }}
                                onClick={() => handleShow(null)}
                            >
                                Add Employee{" "}
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

                <div className="todo-container"></div>
                <div className="container">
                    <div className="manager-member-box">
                        <div>
                            <div className="mnager-member d-flex justify-content-between mt-2 mx-2">
                                <div className="manager-head">
                                    <p></p>
                                </div>
                            </div>
                            <div className="container-xl">
                                <div className={`table-responsive ${styles.tables}`}>
                                    <div className="table-wrapper">
                                        <div className="table-title ">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h2 className="fs-2 text-black">Manage Employees</h2>
                                                </div>
                                            </div>
                                        </div>

                                        <table className={`table table-striped table-hover ${styles.abc}`}>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Employees && Employees.length > 0 ? (
                                                    Employees.map((employee) => (
                                                        <EmployeeList
                                                            key={employee.id} // Make sure `id` is correct here
                                                            employee={employee} // Pass employee object to EmployeeList
                                                            handleShow={handleShow} // Handle show
                                                            handleOpenModal={handleOpenModal} // Delete
                                                        />
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="3" className="text-center">
                                                            No Employees available
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

            {/* Render AddEmployee or EditEmployee based on selectedEmployee */}
            {selectedEmployee === null && <AddEmployee />}
            {selectedEmployee !== null && <EditEmployees />}
            <DeleteProjectModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handleDelete={handleDelete}
                id={projectToDelete}
            />
        </>
    );
};

export default Employee;
