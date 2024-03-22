import React from "react";
import logo from "../../assets/umeew-logo.svg";
import dropDownIcon from "../../assets/icons/drop-down-icon.svg";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-primary sticky top-0">
      <section className="bg-primary py-5 px-5 md:px-0 text-white border-b-2 border-silver/50">
        <div className="max-w-[1170px] md:mx-auto flex justify-between items-center">
          {/* ***** Umeew Logo ***** */}
          <Link to="/">
            <img src={logo} alt="Umeew logo" />
          </Link>

          {/* ***** Navigation Routes ***** */}
          <ul className="flex justify-center gap-5 font-light text-xl">
            <li className="hover:font-medium hover:text-secondary hidden md:block">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:font-normal hover:text-secondary hidden md:block">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="hover:font-normal hover:text-secondary hidden md:block">
              <Link to="/service">Service</Link>
            </li>
            <li className="group relative hidden md:block">
              <span className="flex items-center gap-2 hover:font-normal hover:text-secondary">
                Blog
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
              <ul className="blog-lists -z-10 border border-silver/50">
                <li className="cursor-pointer px-5 py-2.5">
                  <Link to="blog1">Blog 1</Link>
                </li>
                <li className="cursor-pointer px-5 py-2.5">
                  <Link to="blog2">Blog 2</Link>
                </li>
                <li className="cursor-pointer px-5 py-2.5">
                  <Link to="blog2">Blog 3</Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* ***** Contact Us Routes ***** */}
          <Link className="hidden md:block" to="/contact-us">
            <Button>Contact Us</Button>
          </Link>

          {/* ***** Medium Device Hidden ***** */}
          {/* ***** Small Device Block ***** */}
          <div className="group text-center relative md:hidden">
            {/* ***** Navigation Icon sm ***** */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-silver rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
            {/* ***** Navigation Routes sm ***** */}
            <ul className="blog-lists-sm pt-1 -z-10 font-light text-xl md:hidden">
              <Link to="/">
                <li className="select-none border-b border-silver/50 hover:font-medium hover:text-secondary md:hidden block py-5">
                  Home
                </li>
              </Link>
              <Link to="/about-us">
                <li className="select-none border-b border-silver/50 hover:font-normal hover:text-secondary md:hidden block py-5">
                  About Us
                </li>
              </Link>
              <Link to="/service">
                <li className="select-none border-b border-silver/50 hover:font-normal hover:text-secondary md:hidden block py-5">
                  Service
                </li>
              </Link>
              <li className="relative border-b border-silver/50 md:hidden block py-5">
                <span className="select-none hover:font-normal hover:text-secondary">
                  Blog
                  {/* <svg
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
                  </svg> */}
                </span>
                {/* <ul className="blog-lists -z-10 border border-silver/50">
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
              </li>
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
