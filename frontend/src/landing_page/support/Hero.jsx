import React from "react";
import { Search } from "lucide-react";

function Hero() {
  return (
    <div className="bg-light py-5 px-3">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-semibold text-dark m-0">
            Support Portal
          </h1>

          <button className="btn btn-primary">
            My tickets
          </button>
        </div>

        <div className="position-relative">
          <input
            type="text"
            placeholder="Search for help (e.g. hdfc)"
            className="form-control ps-5 py-2"
          />

          <Search
            size={20}
            className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;