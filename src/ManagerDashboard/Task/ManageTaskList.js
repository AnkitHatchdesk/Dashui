import React from 'react'
import { Link } from 'react-router-dom'
import FormateDate from '../../FormateDate'

function ManageTaskList({ Tasks  , handleOpenModal}) {

    // console.log("Task in list", Tasks)

 
    
    return (
        <tr>
            <td>{Tasks.taskTitle}</td>
            <td>{Tasks.employeeName}</td>
            <td>{Tasks.severityLevelName}</td>
            <td>{FormateDate(Tasks.startDate)}</td>
            <td>{FormateDate(Tasks.startDate)}</td>
            <td>{Tasks.progress}</td>

            <td className="action-buttons d-flex">
                <Link
                    to={`/UpdateTask/${Tasks.taskID}`}
                    className="btn btn-warning btn-sm"
                    title="Edit"
                >
                    <i className="bi bi-pencil"></i>
                </Link>

                <button
                    onClick={() => handleOpenModal(Tasks.taskID)}
                    className="btn btn-danger btn-sm"
                    title="Delete"
                >
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    )
}

export default ManageTaskList
