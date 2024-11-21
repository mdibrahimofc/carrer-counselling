import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contextapi/ContextApi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="ml-6">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          Profile
        </NavLink>
      </li>
      <li className="ml-6">
        <NavLink
          to="/careerplanner"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          Career-Planner
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-red-100 via-yellow-100 to-red-100 shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold">
          Career Goals
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center space-x-4">
            <img
              className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User Avatar"
            />
            <button className="btn btn-primary" onClick={logout}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn btn-accent">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
