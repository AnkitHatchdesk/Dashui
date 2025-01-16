import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormateDate from "../../FormateDate";

function ProjectList({ project, handleOpenModal }) {

  return (
    <tr className="text-start">
      <td>{project.title}</td>
      <td>{FormateDate(project.startDate)}</td>
      <td>{FormateDate(project.deadline)}</td>
      <td>{project.managerName}</td>
      <td>{project.departmentName}</td>
      <td className="action-buttons">
        <Link
          to={`/Update/${project.id}`}
          className="btn btn-warning btn-sm"
          title="Edit"
        >
          <i className="bi bi-pencil"></i>
        </Link>

        <button
          onClick={() => handleOpenModal(project.id)}
          className="btn btn-danger btn-sm"
          title="Delete"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default ProjectList;
