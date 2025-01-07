import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useManager } from "../Context/ManagerContext";

function EditManager() {
    const {
        handleClose,
        show,
        handleManagerUpdateSubmit,
        handleChange,
        managerData,
    } = useManager();

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <h4>Edit Manager</h4>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <form onSubmit={handleManagerUpdateSubmit} encType="multipart/form-data">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={managerData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={managerData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Project</label>
                        <input
                            type="text"
                            className="form-control"
                            name="projectName"
                            value={managerData.projectName}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-12" style={{ fontSize: "14px" }}>
                            <label class="form-label fs-6">Due Date</label>
                            <input
                                type="date"
                                class="form-control"
                                id="startDate"
                                name="startDate"
                                value={managerData.dueDate}
                                onChange={handleChange}
                                style={{ width: "100%", height: "40px" }}
                            />
                        </div>
                    </div>
              <div class="d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn-secondary fs-6 me-2"
                  data-bs-dismiss="offcanvas"
                  style={{ width: "140px", height: "40px" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="btn btn-warning fs-6"
                  style={{ width: "140px", height: "40px" }}
                >
                  Save
                </button>
              </div>
                </form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default EditManager;
