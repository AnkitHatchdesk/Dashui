import React from 'react'
import { useEmployeeDash } from './Context/EmployeeDashContext';
import EmployeeProjectCard from './EmployeeProjectCard';
import  "./EmployeeHome.css"


function EmployeeHome() {
  const{empProjects}  =useEmployeeDash();
  return (
    <div class="container-fluid" style={{ backgroundColor: "rgb(248, 251, 251)" }}>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center rounded">
          <img src="Images/Employee-images/Welcome img 1.png " class="img-fluid mt-3 rounded " alt="..." style={{ width: "100%", height: "450px" }} />
          <h1 class="name">Anima Sinha</h1>
        </div>
      </div>
      <div class="row">
        <div class="mb-5">
          <h3 class="my-3">Projects</h3>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">On going</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Complete</a>
            </li>
          </ul>


        </div>
      </div>

      <div className='row '>
        {empProjects.map((empProject) => (
          <>
          <div className='col-lg-6 '>
            <EmployeeProjectCard empProject={empProject} />
          </div>
          </>
        ))}
      </div>

    </div>
  </div>
)
}


export default EmployeeHome
