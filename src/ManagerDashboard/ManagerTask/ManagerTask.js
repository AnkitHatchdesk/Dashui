import React, { useEffect, useState } from 'react';
import styles from "./ManagerTask.module.css";
import { Link } from "react-router-dom";
import { useProject } from '../../AdminDashboard/Context/ProjectContext';

function ManagerTask({ projects }) {
    // console.log("manager in managerTask", projects);
  
    if (!projects) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div class="div-2 d-flex justify-content-between mt-5">
                <div class="d-flex position-relative">
                    <div>
                        <i
                            class="bi bi-calendar fs-2"
                            style={{ color: "#a1a3ab" }}
                        ></i>
                    </div>
                    <div>
                        <i class="bi bi-clock"></i>
                    </div>
                </div>
                <Link to={`/AddTask/${projects.id}`} className={`text-decoration-none ${styles.addtask}`} >
                    <i class="bi bi-plus-lg"></i>
                    Add Task
                </Link>
            </div>
            <div class="d-flex">
                <div>20 june</div>
                <div class="d-flex">
                    <i class="bi bi-dot"></i>
                    <span>Today</span>
                </div>

            </div>
            <div className={`${styles.Todoinner} mt-5}`}>
                <div className={`${styles.Todoinnerbox} d-flex justify-content-between px-3}`}>
                    <div className="circle-heading d-flex">
                        <h3 className={`${styles.managerdasboardheading}`}>
                            {projects.title}
                        </h3>
                    </div>
                    <div className="three-dot">
                        <i className="bi bi-three-dots" style={{ color: "#a1a3ab", fontSize: "38px", marginRight: "25px" }}></i>
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
