import React from "react";

function ManagerList({ manager, handleShow, handleOpenModal  }) {

  console.log("manager" , manager)

  const projectTitles = manager.projects.length > 0 
  ? manager.projects.map(project => project.title).join(' | ') 
  : 'No Project Assigned';
  return (
    <>
      <tr>
        <td>{manager.fullName}</td>
        <td>
        {projectTitles}
        </td>
        <td>Nov, 30, 2019</td>

        <td className="action-buttons d-flex">
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => handleShow(manager)}
          >
             <i className="bi bi-pencil"></i>
          </button>

          <button
            onClick={() => handleOpenModal(manager.id)}
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
