import React from "react";
import FormateDate from "../../FormateDate";

function ManagerList({ manager, handleShow, handleOpenModal  }) {

  

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
        <td>{FormateDate(manager.dateOfJoining)}</td>

        <td className="action-buttons d-flex">
          {/* <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => handleShow(manager)}
          >
             <i className="bi bi-pencil"></i>
          </button> */}

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
