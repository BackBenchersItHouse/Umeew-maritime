import React from "react";
// import umeew from "../../assets/umeew-logo.svg";
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
  const scrollToLocation = () => {
    window.scrollTo(0, 1000);
  };
  return (
    <footer className="bg-primary text-neutral text-xl">
      <section className="">
        <div className="flex flex-col md:flex-row justify-between py-16 max-w-[1170px] mx-auto px-5 md:px-0">
          <section>
            <h3
              onClick={scrollToTop}
              className="text-3xl text-secondary font-semibold cursor-pointer"
            >
              <Link to="/">UMEEW</Link>
            </h3>
            <ul className="my-10 md:my-6">
              <li onClick={scrollToLocation}>
                <Link to="/contact-us" className="flex items-center gap-2.5">
                  <img className="pt-2" src={location} alt="Location icon" />
                  Ultimate Data Protection
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:info@egistic.com"
                  target="_blank"
                  className="flex items-center gap-2.5"
                >
                  <img className="pt-2" src={email} alt="Email icon" />
                  info@egistic.com
                </Link>
              </li>
              <li>
                <Link
                  to="tel:+880123456789"
                  target="_blank"
                  className="flex items-center gap-2.5"
                >
                  <img className="pt-2" src={phone} alt="Phone icon" />
                  +88 0123456789
                </Link>
              </li>
            </ul>
          </section>
          <div className="flex flex-col md:flex-row gap-10 md:gap-40">
            <section className="max-w-60">
              <h3 className="text-3xl text-secondary font-semibold mb-6">
                Quick Links
              </h3>
              <ul>
                <li onClick={scrollToTop}>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/service/ship-chandlery">Services</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/">Track Your Shipment</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/">Get a Quote</Link>
                </li>
              </ul>
            </section>
            <section>
              <h3 className="text-3xl text-secondary font-semibold mb-6">
                Support
              </h3>
              <ul>
                <li onClick={scrollToTop}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/careers">Careers</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/terms-of-us">Terms of Use</Link>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* ***** Border Natural ***** */}
        <div className="border border-neutral/20"></div>

        <div>
          <section className="max-w-[1170px] mx-auto px-5 md:px-0 flex flex-col-reverse sm:flex-row gap-5 justify-between items-center mt-5 pb-10">
            <p>&#169; 2024 , All rights reserved.</p>
            <div className="flex gap-3 items-center">
              <Link to="/">
                <img src={fb} alt="Facebook icon" />
              </Link>
              <Link to="/">
                <img src={ig} alt="Instagram icon" />
              </Link>
              <Link to="/">
                <img src={x} alt="X icon" />
              </Link>
              <Link to="/">
                <img src={linkedin} alt="LinkedIn icon" />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
