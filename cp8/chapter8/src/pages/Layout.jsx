import React from "react";
import { Link, Outlet } from "react-router-dom";

const AppLayout = (props) => {
  return (
    <>
      <nav style={{ backgroundColor: "lightgreen" }}>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/identity">Identity</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>{" "}
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/blogs/new">Create Blog</Link>
          </li>
        </ul>
      </nav>
      <div
        style={{
          backgroundColor: "lightgreen",
          padding: "10px",
        }}
      >
        <div style={{ backgroundColor: "white", minHeight: "200px" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
