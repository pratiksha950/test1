import React from "react";
import { Link } from "react-router-dom";
import { Plus, User, Compass, IndianRupee, Layers, Circle } from "lucide-react";

function Create() {
  const items = [
    {
      icon: <Plus size={18} />,
      title: "Account Opening",
      content: [
        { label: "Resident individual", link: "/resident" },
        { label: "Minor", link: "/minor" },
        { label: "Non Resident Indian (NRI)", link: "/nri" },
        { label: "Company, Partnership, HUF and LLP", link: "/company" },
        { label: "Glossary", link: "/glossary" },
      ],
    },
    {
      icon: <User size={18} />,
      title: "Your Zerodha Account",
      content: [
        { label: "Your Profile", link: "/profile" },
        { label: "Account modification", link: "/modification" },
        { label: "CMR & DP", link: "/cmr" },
        { label: "Nomination", link: "/nomination" },
        { label: "Transfer securities", link: "/transfer" },
      ],
    },
    {
      icon: <Compass size={18} />,
      title: "Kite",
      content: [
        { label: "Orders", link: "/orders" },
        { label: "Positions", link: "/positions" },
        { label: "Charts", link: "/charts" },
        { label: "Login issues", link: "/login" },
      ],
    },
    {
      icon: <IndianRupee size={18} />,
      title: "Funds",
      content: [
        { label: "Add funds", link: "/add-funds" },
        { label: "Withdraw funds", link: "/withdraw" },
        { label: "Fund limits", link: "/limits" },
      ],
    },
    {
      icon: <Layers size={18} />,
      title: "Console",
      content: [
        { label: "Reports", link: "/reports" },
        { label: "Tax P&L", link: "/tax" },
        { label: "Portfolio", link: "/portfolio" },
      ],
    },
    {
      icon: <Circle size={18} />,
      title: "Coin",
      content: [
        { label: "Mutual funds", link: "/mutual-funds" },
        { label: "SIP", link: "/sip" },
        { label: "Portfolio tracking", link: "/tracking" },
      ],
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {/* LEFT SIDE */}
        <div className="col-md-8">
          <div className="accordion" id="supportAccordion">
            {items.map((item, index) => (
              <div className="accordion-item mb-3 border" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed d-flex align-items-center gap-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                  >
                    <span className="bg-light p-2 rounded">{item.icon}</span>
                    {item.title}
                  </button>
                </h2>

                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#supportAccordion"
                >
                  <div className="accordion-body">
                    <ul className="ps-3">
                      {item.content.map((subItem, i) => (
                        <li key={i} className="mb-2">
                          <Link
                            to={subItem.link}
                            className="text-primary text-decoration-none"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-4">
          <div
            className="p-3 mb-4"
            style={{ background: "#f5e6d3", borderLeft: "4px solid orange" }}
          >
            <ul className="mb-0">
              <li>
                <Link to="/intraday">
                  Latest Intraday leverages and Square-off timings
                </Link>
              </li>
              <li>
                <Link to="/surveillance">
                  Surveillance measure on scrips - April 2026
                </Link>
              </li>
            </ul>
          </div>

          <div className="border">
            <div className="bg-light p-3 fw-semibold">Quick links</div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link
                  to="/track-account"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  1. Track account opening
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/segment"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  2. Track segment activation
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/margins"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  3. Intraday margins
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/kite-manual"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  4. Kite user manual
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/ticket"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  5. Create a ticket
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
