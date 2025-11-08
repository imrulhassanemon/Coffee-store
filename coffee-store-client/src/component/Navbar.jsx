import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

  const nav = [
    <li>
      <Link>Home</Link>
    </li>,
    <li>
      <Link>All Product</Link>
    </li>,
    <li>
      <Link>My product</Link>
    </li>,
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      {user ? (
        <div className="avatar navbar-end avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-10 rounded-full">
            <span className="text-xl">AI</span>
          </div>
        </div>
      ) : (
        <div className="navbar-end gap-5">
          <Link>
            <button className="btn border-[#0088FF] text-[#0088FF] hover:bg-[#0088FF] hover:text-white">Register</button>
          </Link>
          <Link>
            <button className="btn border text-[#0088FF]  hover:bg-[#0088FF] border-[#0088FF] hover:text-white">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
