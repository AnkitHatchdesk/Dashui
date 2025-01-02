import React from "react";

function TaskStatusDetails() {
  return (
    <tbody class="table-body pt-5 mt-5">
      <tr>
        <td>Staffly</td>
        <td>John Doe</td>
        <td>Nov 16, 2023</td>
        <td>
          <span class="status-badge completed">Completed</span>
        </td>
        <td>
          <div class="circle-chart">
            <svg
              viewbox="0 0 35.83098862 35.83098862"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="circle-chart__background"
                stroke="#efefef"
                stroke-width="4"
                fill="none"
                cx="17.91549431"
                cy="17.91549431"
                r="15.91549431"
              />
              <circle
                class="circle-chart__circle"
                stroke="#46A453"
                stroke-width="4"
                stroke-dasharray="100,100"
                stroke-linecap="none"
                fill="none"
                cx="17.91549431"
                cy="17.91549431"
                r="15.91549431"
              />
              <g class="circle-chart__info">
                <text
                  class="circle-chart__percent"
                  x="16.91549431"
                  y="16.5"
                  alignment-baseline="central"
                  text-anchor="middle"
                  font-size="10"
                >
                  100%
                </text>
                <text
                  class="circle-chart__subline"
                  x="16.91549431"
                  y="21.5"
                  alignment-baseline="central"
                  text-anchor="middle"
                  font-size="2"
                ></text>
              </g>
            </svg>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default TaskStatusDetails;
