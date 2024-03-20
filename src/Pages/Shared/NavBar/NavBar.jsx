import React from "react";
import logo from "../../../assets/umeew-logo.svg";
import dropDownIcon from "../../../assets/icons/drop-down-icon.svg";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-primary text-white">
      <section className="max-w-[1170px] h-52 mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="Umeew logo" />
        </div>
        <ul className="flex justify-center gap-5 font-light">
          <li className="hover:font-normal hover:text-secondary">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:font-normal hover:text-secondary">
            <Link to="/">About Us</Link>
          </li>
          <li className="hover:font-normal hover:text-secondary">
            <Link to="/">Service</Link>
          </li>
          <li className="group">
            <span className="flex items-center gap-2 hover:font-normal hover:text-secondary">
              <Link to="/">Blog </Link>
              <img
                className="hover:font-normal hover:text-secondary"
                src={dropDownIcon}
                alt="menu drop down icon"
              />
            </span>

            <ul className="group-hover:block hidden absolute">
              <li>Blog 1</li>
              <li>Blog 2</li>
              <li>Blog 3</li>
            </ul>
          </li>
        </ul>
        <div>
          <Button>Contact Us</Button>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
