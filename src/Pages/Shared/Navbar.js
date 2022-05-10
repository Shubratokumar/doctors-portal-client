import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
                <a>Appointment</a>
            </li>
            <li>
                <a>Reviews</a>
            </li>
            <li>
                <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Appointment</a>
            </li>
            <li>
                <a>Reviews</a>
            </li>
            <li>
                <a>Contact Us</a>
            </li>
            <li>
                <a>Login</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
