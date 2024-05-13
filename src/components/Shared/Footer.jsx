import React from "react";
import umeewLogo from "../../assets/umeew.png";
import location from "../../assets/icons/location.svg";
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";
// Social Icons
import fb from "../../assets/icons/fb.svg";
import ig from "../../assets/icons/ig.svg";
import x from "../../assets/icons/x.svg";
import linkedin from "../../assets/icons/in.svg";
import { Link } from "react-router-dom";
import scrollToTop from "./NavBar/ScrollToTop";

const Footer = () => {
  return (
    <footer className="bg-primary text-neutral md:text-xl">
      <section>
        <div className="flex flex-col md:flex-row justify-between py-16 max-w-[1170px] mx-auto px-5 md:px-0">
          {/* <div className="flex flex-col md:flex-row justify-between py-16 max-w-[1170px] mx-auto px-5 md:px-0"> */}
          <section className="mx-auto md:mx-0">
            <h3
              onClick={scrollToTop}
              className="flex gap-2.5 items-center text-2xl md:text-3xl text-secondary font-semibold cursor-pointer"
            >
              <img className="h-10" src={umeewLogo} alt="UMEEW Logo" />
              <Link to="/">UMEEW</Link>
            </h3>
            <ul className="my-6">
              <li onClick={scrollToTop}>
                <span className="flex items-start gap-2.5">
                  <img className="pt-2" src={location} alt="Location icon" />
                  South Side of Aziz Mia Masjid Circle,
                  <br />
                  37No. Ward Munir Nagar,
                  <br />
                  Boropole, Chattogram, Bangladesh.
                </span>
              </li>
              <li>
                <Link
                  to="mailto:info@umeew.com"
                  target="_blank"
                  className="flex items-center gap-2.5"
                >
                  <img className="pt-2" src={email} alt="Email icon" />
                  info@umeew.com
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:technical@umeew.com?subject=Please Provide Subject"
                  target="_blank"
                  className="flex items-center gap-2.5"
                >
                  <img className="pt-2" src={email} alt="Email icon" />
                  technical@umeew.com
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <Link
                  to="tel:+880123456789"
                  target="_blank"
                  className="flex items-center gap-2.5"
                >
                  <img className="pt-2" src={phone} alt="Phone icon" />
                  +880 1682-036423,
                </Link>
                <span> +88031717297</span>
              </li>
            </ul>
          </section>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 md:gap-40">
            <section className="max-w-60">
              <h3 className="text-3xl text-secondary font-semibold mb-6">
                Quick Links
              </h3>
              <ul>
                <li onClick={scrollToTop}>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/contact-us">Get a Quote</Link>
                </li>
              </ul>
            </section>

            <section className="">
              <h3 className="text-3xl text-secondary font-semibold mb-6">
                Support
              </h3>
              <ul>
                <li onClick={scrollToTop}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/">Terms of Use</Link>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Medium Device Hidden */}
        <section className="md:hidden mb-5">
          <div className="flex gap-3 items-center justify-center">
            <Link
              to="https://www.facebook.com/unitedmarinecare"
              target="_blank"
            >
              <img src={fb} alt="Facebook icon" />
            </Link>
            <Link to="https://www.instagram.com/umeew2024" target="_blank">
              <img src={ig} alt="Instagram icon" />
            </Link>
            <Link to="https://twitter.com/marine_wor9861" target="_blank">
              <img src={x} alt="X icon" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/united-marine-engineering-electrical-works"
              target="_blank"
            >
              <img src={linkedin} alt="LinkedIn icon" />
            </Link>
          </div>
        </section>

        {/* ***** Border Natural ***** */}
        <div className="border border-neutral/20"></div>

        <div>
          <section className="max-w-[1170px] mx-auto px-5 md:px-0 flex flex-col-reverse sm:flex-row gap-5 justify-between items-center my-5">
            <p>&#169; 2024 , All rights reserved.</p>
            <div className="md:flex gap-3 items-center hidden">
              <Link
                className="hover:translate-y-1 duration-500"
                to="https://www.facebook.com/unitedmarinecare"
                target="_blank"
              >
                <img src={fb} alt="Facebook icon" />
              </Link>
              <Link
                className="hover:translate-y-1 duration-500"
                to="https://www.instagram.com/umeew2024/"
                target="_blank"
              >
                <img src={ig} alt="Instagram icon" />
              </Link>
              <Link
                className="hover:translate-y-1 duration-500"
                to="https://twitter.com/marine_wor9861"
                target="_blank"
              >
                <img src={x} alt="X icon" />
              </Link>
              <Link
                className="hover:translate-y-1 duration-500"
                to="https://www.linkedin.com/company/united-marine-engineering-electrical-works"
                target="_blank"
              >
                <img src={linkedin} alt="LinkedIn icon" />
              </Link>
            </div>
          </section>
        </div>

        <div className="bg-[#f763ab20] text-sm text-center py-5 border-t border-accent/20">
          <span>
            Developed by
            <Link
              className="text-[#6B40E3]"
              to="https://backbenchersithouse.com"
              target="_blank"
            >
              Backbenchers IT House
            </Link>
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
