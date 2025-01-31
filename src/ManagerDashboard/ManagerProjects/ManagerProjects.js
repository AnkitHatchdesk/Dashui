import React from 'react'
import ManagerProjectList from './ManagerProjectList'
import styles from "./ManagerProject.module.css"
import { useManagerDash } from '../Context/ManagerDashContext'
import { Link } from 'react-router-dom';

function ManagerProjects() {

  const { projects } = useManagerDash();


  console.log("projects in manager project", projects)
  return (
    <div>
      <div>
        <div className="form-accrdian">
          <Link to="/Manager/DashBoard" className="text-decoration-none" style={{ color: "#787486" }}>
            Home
          </Link>
          <i className="bi bi-chevron-right mx-2"></i>
          <Link className="text-decoration-none" style={{ color: "#787486" }}>
            Projects
          </Link>
        </div>

        <div className="container">
          <div className="manager-member-box">
            <div>
              <div className="mnager-member d-flex justify-content-between mt-2 mx-2 mb-3">
                <div className="manager-head">
                  <p></p>
                </div>
                {/* <div className="d-flex">
                  <div className="select-container">
                    <div>
                      <select id="select1" className="select-box">
                        <option value="">Project</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    <div>
                      <select id="select2" className="select-box">
                        <option value="">Project Manager</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                      </select>
                    </div>
                    <div>
                      <select id="select3" className="select-box">
                        <option value="">Status</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="container-xl">
                <div className={`table-responsive ${styles.tables}`}>
                  <div className="table-wrapper">
                    <div className="table-title">
                      <div className="row">
                        <div className="col-sm-6">
                          <h2 className="fs-2 text-black">Manager Projects</h2>
                        </div>
                      </div>
                    </div>
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr className='text-center '>

                          <th>Project Name</th>
                          <th>Date Of Joining</th>
                          {/* <th>Action</th> */}
                        </tr>
                      </thead>
                      <tbody className='text-center'>
                        {projects.map((project) => (
                          <ManagerProjectList
                            key={project.id}
                            project={project}
                          //   handleShow={() => handleShow(manager)} 
                          //   handleOpenModal = {handleOpenModal}
                          />
                        ))}


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerProjects
