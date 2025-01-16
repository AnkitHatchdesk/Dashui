import React from 'react'
import { Link } from 'react-router-dom'

function UnAuthorized() {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <h1>Access Denied</h1>
            <p>You are not authorized to view this page.</p>
            <Link to="/login" type="button" class="btn btn-primary" >Go to login</Link>
        </div>
    )
}

export default UnAuthorized
