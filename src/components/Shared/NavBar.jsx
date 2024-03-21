import React from "react";
import logo from "../../assets/umeew-logo.svg";
import dropDownIcon from "../../assets/icons/drop-down-icon.svg";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-primary py-5 text-white border-b-2 border-white/50">
      <section className="max-w-[1170px] mx-auto flex justify-between items-center">
        {/* ***** Umeew Logo ***** */}
        <Link to="/">
          <img src={logo} alt="Umeew logo" />
        </Link>

        {/* ***** Navigation Routes ***** */}
        <ul className="flex justify-center gap-5 font-light text-xl z-10">
          <li className="hover:font-medium hover:text-secondary">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:font-normal hover:text-secondary">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="hover:font-normal hover:text-secondary">
            <Link to="/service">Service</Link>
          </li>
          <li className="group relative">
            <span className="flex items-center gap-2 hover:font-normal hover:text-secondary">
              <Link to="/blog">Blog </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>

            <ul className="blog-lists hover:visible -z-10">
              <li className="cursor-pointer px-5 py-2.5"><Link to='blog1'>Blog 1</Link></li>
              <li className="cursor-pointer px-5 py-2.5"><Link to='blog2'>Blog 2</Link></li>
              <li className="cursor-pointer px-5 py-2.5"><Link to='blog2'>Blog 3</Link></li>
            </ul>
          </li>
        </ul>

        {/* ***** Contact Us Routes ***** */}
        <Link to="/contact-us">
          <Button>Contact Us</Button>
        </Link>
      </section>
    </nav>
  );
};

export default NavBar;
