import React from "react";

function Charge() {
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      
      {/* Heading */}
      <h2 style={{ marginBottom: "30px" }}>
        Charges for account opening
      </h2>

      {/* Table */}
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Type of account</th>
            <th className="text-end">Charges</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Online account</td>
            <td className="text-end">
              <span className="badge bg-success">FREE</span>
            </td>
          </tr>

          <tr>
            <td>Offline account</td>
            <td className="text-end">
              <span className="badge bg-success">FREE</span>
            </td>
          </tr>

          <tr>
            <td>NRI account (offline only)</td>
            <td className="text-end">₹ 500</td>
          </tr>

          <tr>
            <td>
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </td>
            <td className="text-end">₹ 500</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default Charge;