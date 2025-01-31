import React from "react";
import { Link } from "react-router-dom";
import { useEmployee } from "../Context/EmployeeContext";

function EmployeeList({ employee, handleShow, handleOpenModal }) {
    console.log("employee in list", employee);

    const formatDate = (date) => {
        return date ? date.split("T")[0] : "";
    };

    return (
        <tr className="text-start">
            <td>{`${employee.firstName} ${employee.lastName}`}</td>
            <td>{employee.email}</td>

            <td className="action-buttons">
                <button
                    className="btn btn-warning btn-sm"
                    title="Edit"
                    onClick={() => handleShow(employee)} // Pass individual employee object
                >
                    <i className="bi bi-pencil"></i>
                </button>

                <button
                    onClick={() => handleOpenModal(employee.id)}
                    className="btn btn-danger btn-sm"
                    title="Delete"
                >
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    );
}

export default EmployeeList;
