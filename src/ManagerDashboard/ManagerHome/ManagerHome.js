import React from 'react'
import styles from "./ManagerHome.module.css"

function ManagerHome() {
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
                        <i className="bi bi-people-fill"></i><span>Invite</span>
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
                                                    style={{ color: "#a1a3ab" }}
                                                ></i>
                                            </div>
                                            <div><i class={`bi ${styles.biclock}`}></i></div>
                                        </div>
                                        <div><i class="bi bi-plus-lg"></i> Add Task</div>
                                    </div>
                                    <div class="d-flex">
                                        <div>20 june</div>
                                        <div class="d-flex">
                                            <i class={`bi ${styles.bidot}`}></i><span>Today</span>
                                        </div>
                                    </div>
                                    <div class={`${styles.Todoinner} mt-3}`}>
                                        <div
                                            class={`${styles.Todoinnerbox} d-flex justify-content-between px-3}   `}
                                        >
                                            <div class="circle-heading d-flex">
                                                <div><i class="fa-regular fa-circle"></i></div>
                                                <h3 class={`${styles.managerdasboardheading}`}>
                                                    Manager Deshboard Page
                                                </h3>
                                            </div>
                                            <div class={`${styles.threedot}`}>
                                                <i class={`bi ${styles.bithreedots}`}></i>
                                            </div>
                                        </div>
                                        <div className={`${styles.deshboasrpara} d-flex justify-content-between pe-3`}>
                                            <p>
                                                Designing of manager task management <br />
                                                dashboard in Figma...
                                            </p>
                                            <div className={`${styles.managerinnerboximg}`}>
                                                <img
                                                    src="images/Manager-images/360_F_679509191_FQW7KbRAaHVkCryRlomSQXOeM354SdJY2.png"
                                                    alt="Manager Task Dashboard"
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>


                                        <div class="desboard-text-box">
                                            <div class="desboar-Priority">
                                                <p>Priority: <span>Moderate</span></p>
                                            </div>
                                            <div class="desboar-status">
                                                <p>Priority: <span>Moderate</span></p>
                                            </div>
                                            <div class="desboar-created">
                                                <p>Created on:<span> 18/11/2024</span></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default ManagerHome
