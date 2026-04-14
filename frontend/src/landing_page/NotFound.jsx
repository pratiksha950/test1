import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-95 bg-light">
      <div className="text-center">

        <h1 
          className="fw-bold" 
          style={{ fontSize: "120px", color: "#0d6efd" }}
        >
          404
        </h1>

        <h3 className="mb-3">Oops! Page Not Found</h3>

        <p className="text-muted mb-4">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="btn btn-primary px-4 py-2">
          Go Back Home
        </Link>

      </div>
    </div>
  )
}

export default NotFound