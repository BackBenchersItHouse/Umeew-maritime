import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";

const NavBar_V2 = () => {
  return (
    <nav className="">
      <div className="logo">UMEEW</div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn pr-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer block md:hidden rotate-180 stroke-white stroke-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </label>
      <ul>
        <li>
          <Link className="here" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="" to="/">
            Services
          </Link>
        </li>
        <li>
          <Link className="" to="/">
            Blog
          </Link>
        </li>
      </ul>
      <Link className="contact" to='/contact-us'>
        <Button >Contact Us</Button>
      </Link>
    </nav>
  );
};

export default NavBar_V2;
