import React from "react";
import { Link } from "react-router-dom";
import "../Design/PageNotFound.css"

function PageNotFound() {
  return (
    <div className="pnf">
      <h1>Page Not Found :/</h1>
      <h3>
        Go to the Home Page: <Link className="linkPNF" to="/"> Home Page</Link>
      </h3>
    </div>
  );
}

export default PageNotFound;