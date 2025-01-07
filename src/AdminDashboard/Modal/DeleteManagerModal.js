import React from 'react'

function DeleteManagerModal({ showDeleteModal, managerID, handleCloseDeleteModal, handleDelete }) {
    if (!showDeleteModal) return null;
    return (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={handleCloseDeleteModal}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this Manager?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseDeleteModal}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(managerID)} 
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  
}

export default DeleteManagerModal
