import React from 'react'
import "./ProgressBar.css"

function ProgressBar() {

    const progressData = [
        { value: 85, color: "#05a301", title: "Completed" },
        { value: 91, color: "#0225ff", title: "In Progress" },
        { value: 68, color: "#f21e1e", title: "Not Started" },
      ];
  return (
    <div className="circular-progress-container">
    {progressData.map((item, index) => (
      <div className="circular-progress-wrapper" key={index}>
        <div
          className="circular-progress"
          style={{
            background: `conic-gradient(${item.color} ${item.value * 3.6}deg, #e0e0e0 0deg)`,
          }}
        >
          <div className="circular-progress-value">
            <span>{item.value}%</span>
          </div>
        </div>
        <h3 className="progress-title">{item.title}</h3>
      </div>
    ))}
  </div>
  )
}

export default ProgressBar
