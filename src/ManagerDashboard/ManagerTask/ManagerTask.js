import React, { useEffect, useState } from 'react';
import styles from "./ManagerTask.module.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useProject } from '../../AdminDashboard/Context/ProjectContext';

function ManagerTask({ projects }) {
    // console.log("manager in managerTask", projects);

    if (!projects) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className={`${styles.Todoinner} mt-5}`}>
                <div className={`${styles.Todoinnerbox} d-flex justify-content-between px-3}`}>
                    <div className="circle-heading d-flex">
                        <h3 className={`${styles.managerdasboardheading}`}>
                            {projects.title}
                        </h3>
                    </div>
                    <div className="three-dot pe-4" style={{ color: "#a1a3ab", fontSize: "38px", marginRight: "25px" }}>
                        {/* <i className="bi bi-three-dots" style={{ color: "#a1a3ab", fontSize: "38px", marginRight: "25px" }}></i> */}

                        <Dropdown align="end">
                            <Dropdown.Toggle
                                variant="link"
                                id="dropdown-basic"
                                className="btn text-black p-0"
                                bsPrefix="custom-dropdown-toggle"
                            >
                                <i
                                    className="bi bi-three-dots"
                                    style={{ fontSize: "38px", cursor: "pointer" }}
                                ></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>

                                <Dropdown.Item as={Link} to={`/AddTask/${projects.id}`}>
                                    <i className="fa-solid fa-right-from-bracket me-2"></i> Add Task
                                </Dropdown.Item>

                                <Dropdown.Item as={Link} to={`/ManageTask/${projects.id}`}>
                                    <i className="fa-solid fa-gear me-2"></i> View Task
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between px-4">
                    <p style={{ fontSize: "14px", maxWidth: "320px", textAlign: "justify" }}>
                        {projects.projDescr}
                    </p>
                    <div className={`${styles.managerinnerboximg}`}>
                        <img
                            src="images/Manager-images/360_F_679509191_FQW7KbRAaHVkCryRlomSQXOeM354SdJY2.png"
                            alt="Manager Task Dashboard"
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div className={`${styles.desboarPriority}`}>
                        <p>Priority: <span style={{ color: "blue" }}>Moderate</span></p>
                    </div>
                    <div className={`${styles.desboarstatus}`}>
                        <p>Status: <span style={{ color: "#f21e1e" }}>Moderate</span></p>
                    </div>
                    <div className={`${styles.desboarcreated}`}>
                        <p>Created on: <span>{new Date(projects.createdOn).toLocaleDateString()}</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManagerTask;
