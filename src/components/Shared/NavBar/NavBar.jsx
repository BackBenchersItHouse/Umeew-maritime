import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Buttons/Button";
import SubNavLinks from "./SubNavLinks";
// import umeewLogo from "@/assets/umeew-logo.svg";

const NavBar_V2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="max-w-[1170px] mx-auto text-white">
      <div className="flex items-center text-xl md:text-base font-medium justify-between">
        <div className="z-50 py-5 w-full md:w-auto flex justify-between">
          <Link to="/">
            {/* <img src={umeewLogo} alt="UMEEW Logo" /> */}
            <h3 className="text-3xl text-secondary font-semibold">UMEEW</h3>
          </Link>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            )}
          </div>
        </div>

        {/* ***** Navigation Routes ***** */}
        <ul className="md:flex hidden capitalize items-center gap-5">
          <li>
            <Link
              className="py-7 px-3 inline-block hover:text-secondary"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="py-7 px-3 inline-block hover:text-secondary"
              to="/about-us"
            >
              About Us
            </Link>
          </li>
          <SubNavLinks />
        </ul>

        <Link className="contact" to="/contact-us">
          <Button>Contact Us</Button>
        </Link>

        {/* ***** Mobile Navigation Routes ***** */}
        <ul
          className={`bg-primary md:hidden absolute w-full h-screen top-[77px] py-4 px-5 duration-500 ${
            open ? "left-0" : "-left-full"
          }`}
        >
          <li className="border-b border-neutral/20">
            <Link className="py-2.5 px-3 inline-block" to="/">
              Home
            </Link>
          </li>
          <li className="border-b border-neutral/20">
            <Link className="py-2.5 px-3 inline-block" to="/about-us">
              About Us
            </Link>
          </li>
          <li className="border-b border-neutral/20">
            <Link className="py-2.5 px-3 inline-block" to="/service">
              Services
            </Link>
          </li>
          <SubNavLinks />

          <Link to="/contact-us">
            <Button divClass="fixed top-[80vh]">Contact Us</Button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar_V2;
