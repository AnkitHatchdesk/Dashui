import React from "react";

function ManagerList({ manager, handleShow, handleDeleteOpenModal }) {
  return (
    <>
      <tr>
        <td>{manager.fullName}</td>
        <td>
          {manager.projects.length > 0 ? manager.projects[0].title : "No Project Assigned"}
        </td>
        <td>Nov, 30, 2019</td>

        <td className="action-buttons d-flex">
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => handleShow(manager)}
          >
            Edit
          </button>

          <button
            onClick={() => handleDeleteOpenModal(manager.id)}
            className="btn btn-danger btn-sm"
            title="Delete"
          >
            <i className="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default ManagerList;
