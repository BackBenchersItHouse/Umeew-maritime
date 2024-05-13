import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@/components/Buttons/Button";
import SubNavLinks from "./SubNavLinks";
import MenuOpen from "@/components/Icons/MenuOpen";
import MenuClose from "@/components/Icons/MenuClose";
import scrollToTop from "./ScrollToTop";
import umeewLogo from "@/assets/umeew.png";

const NavBar_V2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-[1170px] mx-auto text-black">
      <div className="flex items-center text-xl md:text-base font-medium justify-between">
        <div className="z-50 py-5 w-full md:w-auto flex justify-between">
          <NavLink
            className="flex gap-2.5 items-center "
            onClick={scrollToTop}
            to="/"
          >
            <img className="h-10" src={umeewLogo} alt="UMEEW Logo" />
            <h3
              onClick={scrollToTop}
              className="text-2xl md:text-3xl text-secondary font-semibold cursor-pointer"
            >
              UMEEW
            </h3>
          </NavLink>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <MenuClose /> : <MenuOpen />}
          </div>
        </div>

        {/* ***** Navigation Routes ***** */}
        <ul className="md:flex hidden capitalize items-center gap-5">
          <li onClick={scrollToTop}>
            <NavLink
              className="py-7 px-3 inline-block hover:text-secondary border-b-2 border-white hover:border-secondary duration-300"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li onClick={scrollToTop}>
            <NavLink
              className="py-7 px-3 inline-block hover:text-secondary border-b-2 border-white hover:border-secondary duration-300"
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <SubNavLinks />
        </ul>

        <NavLink className="contact" to="/contact-us" onClick={scrollToTop}>
          <Button divClass="!border-accent" btnClass="outline-accent">
            Contact Us
          </Button>
        </NavLink>

        {/* ***** Mobile Navigation Routes ***** */}
        <ul
          className={`bg-white/50 backdrop-blur-3xl md:hidden absolute w-full h-screen top-[77px] py-4 px-5 duration-500 ${
            open ? "left-0" : "-left-full"
          }`}
        >
          <li
            onClick={() => setOpen(!open) || scrollToTop()}
            className="border-b border-neutral/20 hover:border-secondary"
          >
            <NavLink className="py-2.5 px-3 inline-block" to="/">
              Home
            </NavLink>
          </li>
          <li
            onClick={() => setOpen(!open) || scrollToTop()}
            className="border-b border-neutral/20 hover:border-secondary"
          >
            <NavLink className="py-2.5 px-3 inline-block" to="/about-us">
              About Us
            </NavLink>
          </li>
          <SubNavLinks open={open} setOpen={setOpen} />

          <NavLink
            onClick={() => setOpen(!open) || scrollToTop()}
            to="/contact-us"
          >
            <Button
              divClass="fixed top-[75vh] !border-accent"
              btnClass="!outline-accent"
            >
              Contact Us
            </Button>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar_V2;
