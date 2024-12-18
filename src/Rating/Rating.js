import React from 'react'

function Rating() {
  return (
    <div class="bar-card mb-5 ">
    <div class="bar-card-body">
      <div class="d-flex justify-content-between">
        <h5 class="bar-title">Project Workload</h5>
        <select class="Product-select">
          <option selected>Last 3 Month</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div>
        <canvas id="myChart" class="mychat-bar"></canvas>
      </div>
      <div class="Progres-text ps-4 ">
        <div class="pt-2">
          <span>Good</span>
          <div class="progress" style={{height: "8px", width: "85%"}}>
            <div
              class="progress-bar bg-danger "
              role="progressbar"
              style={{width: "50%"}}
              aria-valuenow="8"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="pt-2">
          <span>Average</span>
          <div class="progress" style={{height: "8px", width: "85%"}}>
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{width: "40%"}}
              aria-valuenow="8"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="pt-2 ">
          <span>Poor</span>
          <div class="progress" style={{height: "8px", width: "85%"}}>
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style={{width: "30%"}}
              aria-valuenow="8"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
     
  </div>
</div>
  )
}

export default Rating
