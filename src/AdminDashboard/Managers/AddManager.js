
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useManager } from '../Context/ManagerContext';

function AddManager() {
  const { handleClose, show, handleManagerSubmit, handleChange, managerData } = useManager();

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <div
            class="d-flex justify-content-center align-items-center p-0"
          >
            <h4 class="offcanvas-title" id="addManagerDrawerLabel">
              Add Manager
            </h4>
          </div>
        </Offcanvas.Header>

        <Offcanvas.Body>

          <div class="offcanvas-body">
            <form onSubmit={handleManagerSubmit} encType="multipart/form-data">

              <div class="mb-2">
                <label for="name" class="form-label" style={{ fontSize: "14px" }}
                >Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  name="name"
                  value={managerData.name}
                  onChange={handleChange}
                  style={{ width: "100%", height: "40px" }}
                />
              </div>

              <div class="mb-2">
                <label
                  for="email"
                  class="form-label fs-6"
                  style={{ fontSize: "14px" }}
                >Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  value={managerData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  style={{ width: "100%", height: "40px" }}
                />
              </div>
              <div class="d-flex justify-content-center mt-3">
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
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddManager;
