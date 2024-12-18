import React from "react";

function RevenueCard() {
  return (
    <div className="row g-4 mb-4 mx-3">
      <div className="col-lg-3 col-sm-6">
        <div className="metric-card">
          <div className="metric-card-icon">
            <i className="bi bi-bar-chart fs-4"></i>
          </div>
          <div className="text-muted">Total Revenue</div>

          <div className="metric-value">$12,426</div>
          <div className="text-success small Progress-icon">
            <i className="bi bi-arrow-up"></i> 12.5% from last month
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
          <div class="metric-card">
            <div
              class="metric-card-icon"
              style={{ backgroundColor: "#e89271" }}
             
            >
              <i class="bi bi-bag-check text-white fs-4"></i>
            </div>
            <div class="text-muted">Project</div>

            <div class="metric-value">$189</div>
            <div class="text-danger small Progress-icon">
              <i class="bi bi-arrow-down"></i> 3.2% from last month
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="metric-card">
            <div class="metric-card-icon" style={{ backgroundColor: "#70a1e5" }}>
              <i class="bi bi-clock text-white fs-4"></i>
            </div>
            <div class="text-muted">Time Spent</div>
            <div class="metric-value">1,543</div>
            <div class="text-success small Progress-icon">
              <i class="bi bi-arrow-up"></i> 8.1% from last month
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="metric-card" >
            <div class="metric-card-icon" style={{ backgroundColor: "#f0c274" }} >
              <i class="bi bi-person text-white fs-4"></i>
            </div>
            <div class="text-muted">resources</div>

            <div class="metric-value">$240</div>
            <div class="text-success small Progress-icon">
              <i class="bi bi-arrow-down"></i> 1.8% from last month
            </div>
          </div>
        </div>
    </div>
  );
}

export default RevenueCard;
