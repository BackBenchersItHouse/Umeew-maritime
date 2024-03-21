import React from "react";
// import logo from "../../../assets/umeew-logo.svg";
import dropDownIcon from "../../../assets/icons/drop-down-icon.svg";
<<<<<<< HEAD
=======
import Button from "../../../components/Buttons/Button";
>>>>>>> 2bb70e774bf47bf8c6781b1040c319256f0fbdeb
import { Link } from "react-router-dom";
import Button from './../../../Components/Button/Button';

const NavBar = () => {
  return (
    <nav className="bg-primary py-2.5 text-white">
      <section className="max-w-[1170px] mx-auto flex justify-between items-center">
        <div>
          <img src='' alt="Umeew logo" />
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
          <li className="group relative">
            <span className="flex items-center gap-2 hover:font-normal hover:text-secondary">
              <Link to="/">Blog </Link>
              <img
                className="hover:font-normal hover:text-secondary"
                src={dropDownIcon}
                alt="menu drop down icon"
              />
            </span>

            <ul
              className="transition transform -translate-y-[72px] ease-in-out duration-1000 invisible absolute group-hover:visible group-hover:translate-y-5 border bg-primary w-32 divide-y divide-dashed -z-10">
              <li className="px-5 py-2.5">Blog 1</li>
              <li className="px-5 py-2.5">Blog 2</li>
              <li className="px-5 py-2.5">Blog 3</li>
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
