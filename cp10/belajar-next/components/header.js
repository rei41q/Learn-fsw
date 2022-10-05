import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/blogs" className="nav-link">Blogs</a>
        </li>
        <li className="nav-item">
          <a href="/users" className="nav-link">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
