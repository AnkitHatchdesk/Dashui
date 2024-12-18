import React from "react";

function TaskStatusDetails() {
  return (
    <tbody class="table-body p-5 m-5">
      <tr className="p-5">
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
                  class="circle-chart__percent p-3"
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
      <tr>
        <td>Event mgnt</td>
        <td>Jane Smith</td>
        <td>Nov 15, 2023</td>
        <td>
          <span class="status-badge pending">Pending</span>
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
                stroke="#E6B22C"
                stroke-width="4"
                stroke-dasharray="50,100"
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
                  50%
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
      <tr>
        <td>Web development</td>
        <td>Robert Johnson</td>
        <td>Nov 15, 2023</td>
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
      <tr>
        <td>Astrology</td>
        <td>Emily Brown</td>
        <td>Nov 14, 2023</td>
        <td>
          <span class="status-badge cancelled">Cancelled</span>
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
                stroke="#EA8A64"
                stroke-width="4"
                stroke-dasharray="65,100"
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
                  65%
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
      <tr>
        <td>knowledge</td>
        <td>Michael Wilson</td>
        <td>Nov 14, 2023</td>
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
