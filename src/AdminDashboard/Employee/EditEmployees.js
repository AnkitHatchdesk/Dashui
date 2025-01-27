import React from "react";
import { useEmployee } from "../Context/EmployeeContext";
import { Offcanvas } from "react-bootstrap";

function EditEmployees() {
    const {
        handleOffCanvasClose,
        show,
        handleEditChange,
        selectedEmployee,
        handleEditSubmit
    } = useEmployee();

    return (
        <Offcanvas show={show} onHide={handleOffCanvasClose} placement="end">
            <Offcanvas.Header closeButton>
                <h4>Edit Employee</h4>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <form encType="multipart/form-data" onSubmit={handleEditSubmit}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={selectedEmployee?.firstName || ""}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={selectedEmployee?.lastName || ""}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={selectedEmployee?.email || ""}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-secondary fs-6 me-2"
                            data-bs-dismiss="offcanvas"
                            style={{ width: "140px", height: "40px" }}
                            onClick={handleOffCanvasClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-warning fs-6"
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

export default EditEmployees;
