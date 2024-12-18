import React from 'react'

function ManagerList() {
    return (
        <>
            <tr>
                <td>Thomas Hardy</td>
                <td>Stafli</td>
                <td>Nov, 30, 2019</td>
                <td>
                    <div className="circle-chart">
                        <svg
                            viewBox="0 0 35.83098862 35.83098862"
                            width="30"
                            height="30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                className="circle-chart__background"
                                stroke="#efefef"
                                strokeWidth="4"
                                fill="none"
                                cx="17.91549431"
                                cy="17.91549431"
                                r="15.91549431"
                            ></circle>
                            <circle
                                className="circle-chart__circle"
                                stroke="#46A453"
                                strokeWidth="4"
                                strokeDasharray="100,100"
                                strokeLinecap="none"
                                fill="none"
                                cx="17.91549431"
                                cy="17.91549431"
                                r="15.91549431"
                            ></circle>
                            <g className="circle-chart__info">
                                <text
                                    className="circle-chart__percent"
                                    x="16.91549431"
                                    y="16.5"
                                    alignmentBaseline="central"
                                    textAnchor="middle"
                                    fontSize="10"
                                >
                                    100%
                                </text>
                            </g>
                        </svg>
                    </div>
                </td>
                <td>
                    <span className="progrss-box progrss-box-1">Completed</span>
                </td>
                <td className="action-buttons">
                    <button className="btn btn-warning btn-sm" title="Edit">
                        <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-danger btn-sm" title="Delete">
                        <i className="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Dominique Perrier</td>
                <td>Event Manag</td>
                <td>nov,30,2019</td>
                <td>
                    <div class="circle-chart">
                        <svg
                            viewBox="0 0 35.83098862 35.83098862"
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
                            ></circle>
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
                            ></circle>
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
                <td>
                    <span class="progrss-box progrss-box-2">Delayed</span>
                </td>
                <td class="action-buttons">
                    <button class="btn btn-warning btn-sm" title="Edit">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" title="Delete">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Maria Anders</td>
                <td>web development</td>
                <td>nov,30,2019</td>
                <td>
                    <div class="circle-chart">
                        <svg
                            viewBox="0 0 35.83098862 35.83098862"
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
                            ></circle>
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
                            ></circle>
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
                <td>
                    <span class="progrss-box progrss-box-3"
                    >On going</span>
                </td>
                <td class="action-buttons">
                    <button class="btn btn-warning btn-sm" title="Edit">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" title="Delete">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Fran Wilson</td>
                <td>Astrology</td>
                <td>nov,30,2019</td>
                <td>
                    <div class="circle-chart">
                        <svg
                            viewBox="0 0 35.83098862 35.83098862"
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
                            ></circle>
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
                            ></circle>
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
                <td>
                    <span class="progrss-box progrss-box-4">At risk</span>
                </td>
                <td class="action-buttons">
                    <button class="btn btn-warning btn-sm" title="Edit">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" title="Delete">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td>Martin Blank</td>
                <td>matromony app</td>
                <td>nov,30,2019</td>
                <td>
                    <div class="circle-chart">
                        <svg
                            viewBox="0 0 35.83098862 35.83098862"
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
                            ></circle>
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
                            ></circle>
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
                <td>
                    <span class="progrss-box progrss-box-5"
                    >In Progress</span>
                </td>
                <td class="action-buttons">
                    <button class="btn btn-warning btn-sm" title="Edit">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" title="Delete">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}

export default ManagerList
