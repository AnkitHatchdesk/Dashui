import React from 'react'

function ManagerProjectList({ project }) {

  console.log("projects in list", project)


  const formatDate = (date) => {
    return date ? date.split("T")[0] : "";
  };

  return (
    <>
      <tr>
        <td>
          {project.title}
        </td>
        <td>
          {formatDate(project.createdOn)}
        </td>

        <td className="action-buttons d-flex">
          <button
            className="btn btn-warning btn-sm me-2"
          // onClick={() => handleShow(manager)}
          >
            <i className="bi bi-pencil"></i>
          </button>

          <button
            // onClick={() => handleOpenModal(manager.id)}
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

export default ManagerProjectList
