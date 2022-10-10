import Link from "next/link";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/authSlice";

const Header = () => {
  const [cookies] = useCookies(["accessToken"]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.accessToken) {
      dispatch(setLogin(cookies.accessToken));
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blogs">
            <a className="nav-link">Blogs</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/users">
            <a className="nav-link">Users</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/login">
            <a className="nav-link">Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
