import React from 'react'
import { Link } from 'react-router-dom'

function AddProject() {
  return (
    <div>
    <div class="form-accrdian">
        <Link to="/" className='text-decoration-none' style={{color:"#787486"}}>Home</Link>
      <i class="bi bi-chevron-right mx-2"></i>
      <Link className='text-decoration-none' style={{color:"#787486"}}>Create-Project</Link>
    </div>
    
    <div class="form-content  mx-5">
      <div class="form-box">
        <div class="container-fluid py-5">
          <div class="form-container p-4">
            <div class="admin-create-new-project d-flex justify-content-between align-items-center mb-4">
              <h4 class="create-new-project-head mb-0">Create New Project</h4>
              {/* <div class="admin-create-new-project-btn">
                <button class="btn text-white">New</button>
              </div> */}
            </div>

            <form>
              <div class="row g-4">
                {/* <!-- Title and Severity Level --> */}
                <div class="col-lg-6">
                  <label class="form-label">Title</label>
                  <input type="text" class="form-control" placeholder="Task Name" />
                </div>
                <div class="col-lg-6">
                  <label class="form-label">Severity Level</label>
                  <select class="form-select">
                    <option selected>---Select---</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>

                {/* <!-- Start Date, End Date, and Team Size --> */}
                <div class="col-md-4">
                  <label class="form-label">Start Date</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="col-md-4">
                  <label class="form-label">End Date</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="col-md-4">
                  <label class="form-label">Team Size</label>
                  <input type="number" class="form-control" min="1" />
                </div>

                {/* <!-- Project Description --> */}
                <div class="col-12">
                  <label class="form-label">Project Description</label>
                  <textarea class="form-control" rows="4"></textarea>
                </div>

                {/* <!-- Assign Manager and Upload Image --> */}
                <div class="col-md-7">
                  <div class="mb-3">
                    <label class="form-label">Assign Manager</label>
                    <select class="form-select">
                      <option selected>---Select---</option>
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Technology Stack</label>
                    <input type="text" class="form-control" placeholder="Eg: React, Angular" />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Client</label>
                    <input type="text" class="form-control" placeholder="Search Client" />
                  </div>
                </div>
                <div class="col-md-5">
                  <label class="form-label">Upload Image</label>
                  <div class="upload-image-box">
                    <i class="bi bi-image"></i>
                    <p class="text-muted mb-0 text-center">Drag and drop files here</p>
                    <input type="file" class="btn btn-light mt-2 border"/>
                  </div>
                </div>

                {/* <!-- Form Buttons --> */}
                <div class="Form-last-Button-box col-12 d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-primary  px-4 ">
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary  px-4 me-4">Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script> */}
      </div>

    </div>
    </div>
  )
}

export default AddProject
