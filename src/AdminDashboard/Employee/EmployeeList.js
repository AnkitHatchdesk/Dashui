import React from 'react'
import { Link } from 'react-router-dom'
import { useEmployee } from '../Context/EmployeeContext';

function EmployeeList({Employees , handleShow ,handleOpenModal }) {

    console.log("employees in list" , Employees)



    const formatDate = (date) => {
        return date ? date.split("T")[0] : "";
      };
    

    return (
        <tr className="text-start">
            <td>{`${Employees.firstName} ${Employees.lastName}`}</td>
            <td>{Employees.email}</td>
            <td>{Employees.departmentName}</td>
            <td>{formatDate(Employees.dateOfJoining)}</td>

            <td className="action-buttons">
                <button
                 
                    className="btn btn-warning btn-sm"
                    title="Edit"
                    onClick={()=>handleShow(Employees)}
                >
                    <i className="bi bi-pencil"></i>
                </button>

                <button
                    onClick={() => handleOpenModal(Employees.id)}
                    className="btn btn-danger btn-sm"
                    title="Delete"
                >
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    )
}

export default EmployeeList
