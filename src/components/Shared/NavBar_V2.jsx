import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Buttons/Button";
// import umeewLogo from "../../assets/umeew-logo.svg";

const NavBar_V2 = () => {
  return (
    <nav className="">
      <Link to="/" className="">
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
          <Link className="" to="/about-us">
            About Us
          </Link>
        </li>
        <li>
          <Link className="" to="/service">
            Service
          </Link>
        </li>
        <li className="relative group">
          <Link className="" to="/">Page +</Link>
          
          <ul className="sub-pages group-hover:block transition">
            <li className=""><Link to='/afk'>Page 1</Link></li>
            <li className=""><Link to='/afk'>Page 2</Link></li>
            <li className=""><Link to='/afk'>Page 3</Link></li>
          </ul>
        </li>
      </ul>

      <Link className="contact" to="/contact-us">
        <Button>Contact Us</Button>
      </Link>
    </nav>
  );
};

export default NavBar_V2;
