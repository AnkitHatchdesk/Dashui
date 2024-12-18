import React from 'react'

function PerformanceCard() {
  return (
    <>
    <div class="card mb-4 cart-box">
         <div class="card-body">
           <div class="d-flex justify-content-between">
             <h5 class="card-title pt-4">Performance</h5>
             <select class="form-select mb-3">
               <option selected>All</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
             </select>
           </div>

           <div class="d-flex justify-content-center mb-4">
             <div class="chart-container">
               <canvas id="myChart2"></canvas>
             </div>
           </div>
           <div
             class="d-flex justify-content-evenly text-muted"
             style={{fontsize: "12px"}}
           >
             <span class="project-verification d-flex flex-column align-items-center">
               <h5>95</h5>
               <p>Total project</p>
             </span>
             <span class="project-verification d-flex flex-column align-items-center">
               <h5>95</h5>
               <p>Completed</p>
             </span>
             <span class="project-verification d-flex flex-column align-items-center">
               <h5>95</h5>
               <p>Delayed</p>
             </span>
             <span class="project-verification d-flex flex-column align-items-center">
               <h5>95</h5>
               <p>On going</p>
             </span>
           </div>
         </div>
       </div>

     
       </>
  )
}

export default PerformanceCard
