import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import umeewLogo from "../../assets/umeew-logo.svg";
import dropDownIcon from "../../assets/icons/drop-down-icon.svg";

const NavBar_V2 = () => {
  return (
    <nav>
      <div className="logo">
        <img src={umeewLogo} alt="UMEEW Logo" />
      </div>
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
            Blog
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn">
              <img src={dropDownIcon} alt="Drop Down Icon" />
            </label>
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
