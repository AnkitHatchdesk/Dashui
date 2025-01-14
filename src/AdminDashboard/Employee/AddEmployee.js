import React from "react";
import { Offcanvas, Spinner } from "react-bootstrap";
import { useEmployee } from "../Context/EmployeeContext";

function AddEmployee() {
  const { handleOffCanvasClose, show, handleChange, handleEmployeeSubmit, EmployeeData, loading } = useEmployee();


  console.log("loading" , loading)

  return (
    <>
      <Offcanvas show={show} onHide={handleOffCanvasClose} placement="end">
        <Offcanvas.Header closeButton>
          <div className="d-flex justify-content-center align-items-center p-0">
            <h4 className="offcanvas-title" id="addManagerDrawerLabel">
              Add Employee
            </h4>
          </div>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {/* {loading ? (
            // Loader Display
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
              <Spinner animation="border" variant="warning" />
            </div>
          ) : ( */}
            {/* // Form Display */}
            <div className="offcanvas-body">
              <form onSubmit={handleEmployeeSubmit} encType="multipart/form-data">
                <div className="mb-2">
                  <label htmlFor="name" className="form-label" style={{ fontSize: "14px" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                    name="name"
                    value={EmployeeData.name}
                    onChange={handleChange}
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="email" className="form-label fs-6" style={{ fontSize: "14px" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={EmployeeData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    type="button"
                    className="btn btn-secondary fs-6 me-2"
                    data-bs-dismiss="offcanvas"
                    onClick={handleOffCanvasClose}
                    style={{ width: "140px", height: "40px" }}
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
            </div>
          {/* )} */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddEmployee;
