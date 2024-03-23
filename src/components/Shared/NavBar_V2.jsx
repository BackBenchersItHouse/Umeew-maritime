import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
// import umeewLogo from "../../assets/umeew-logo.svg";
import dropDownIcon from "../../assets/icons/drop-down-icon.svg";

const NavBar_V2 = () => {
  return (
    <nav className="">
      <Link to='/' className="">
        {/* <img src={umeewLogo} alt="UMEEW Logo" /> */}
        <h3 className="text-3xl text-secondary font-semibold">UMEEW</h3>
      </Link>
      {/* ***** Unusually use for flex justify-between ***** */}
      <input type="checkbox" className="hidden" id="none" />
      <label htmlFor="none" className="hidden">
        Unusually for flex justify-between align
      </label>

      {/* ***** Mobile responsive icon ***** */}
      <input type="checkbox" id="click" className="order-5" />
      <label htmlFor="click" className="menu-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer block  rotate-180 stroke-white stroke-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </label>

      {/* ***** Navigation Routes ***** */}
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
          <Link className="inline-flex gap-2 items-center" to="/">
            Page
            {/* <input type="checkbox" id="clickDrop" />
            <label htmlFor="clickDrop" className="clickDrop-btn">
              <img src={dropDownIcon} alt="Drop Down Icon" />
            </label> */}
            {/* ***** Navigation Routes for Page ***** */}
            {/* <ul className="blog-lists -z-10 border border-neutral/50">
                  <li className="cursor-pointer px-5 py-2.5">
                    <Link to="blog1">Blog 1</Link>
                  </li>
                  <li className="cursor-pointer px-5 py-2.5">
                    <Link to="blog2">Blog 2</Link>
                  </li>
                  <li className="cursor-pointer px-5 py-2.5">
                    <Link to="blog2">Blog 3</Link>
                  </li>
            </ul> */}
          </Link>
        </li>
      </ul>

      <Link className="contact" to="/">
        <Button>Contact Us</Button>
      </Link>
    </nav>
  );
};

export default NavBar_V2;
