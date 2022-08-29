import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutCounting = () => {
  return (
    <div>
      <Link to="/counter/version1">Version1</Link>
      <br />
      <Link to="/counter/version2">Version2</Link>
      <br />
      <div style={{ padding: "20px", backgroundColor: "orange" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutCounting;
