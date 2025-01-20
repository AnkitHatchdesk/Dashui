import React from 'react'

import { useNavigate } from 'react-router-dom';

import FormateDate from '../FormateDate';



function EmployeeProjectCard({empProject}) {
    console.log("empProject in card", empProject)
    const navigate = useNavigate();
  
    const handleCardClick = () => {
    
      console.log("Navigating to Task List with ID:", empProject.projectId);
      navigate(`/Employee/tasks/${empProject.projectId}`);
    };
    
  
    return (
      <>
      <div class="card-hover"  onClick={handleCardClick} style={{cursor:"pointer"}}>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{empProject.name}</h4>
            <p class="card-text" style={{textAlign:"justify" , cursor:"pointer"}}>{empProject.description}</p>
  
            <div class="row">
              <div class="col-md-10">
                <span>Status</span>
                <div class="progress mt-2">
                  <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-md-2">
                <div style={{width:"40px", height:"40px"}}>
                  <img class="rounded" src="Images/Employee-images/user.jpg" alt="" style={{width: "auto", height:"100%"}} />
                </div>
                <span class="more-emp">+3</span>
              </div>
            </div>
  
            <div class="d-flex justify-content-between mt-2">
              <div class="d-flex flex-column">
                <span class="text-secondary">start time</span>
                <span>{FormateDate(empProject.startDate)}</span>
              </div>
              <div class="d-flex flex-column">
                <span class="text-secondary">end time</span>
                <span>{FormateDate(empProject.endDate)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default EmployeeProjectCard
