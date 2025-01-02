import React from "react";

function RevenueCard() {
  return (
   
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
   
  );
}

export default RevenueCard;
