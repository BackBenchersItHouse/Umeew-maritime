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

const Footer = () => {
  return (
    <footer className="bg-primary text-neutral text-xl">
      <section className="">
        <div className="flex justify-between py-16 max-w-[1170px] mx-auto px-5 md:px-0">
          <section>
            <h3 className="text-3xl text-secondary font-semibold mb-10">UMEEW</h3>
            <ul className="my-6">
              <li className="flex items-center gap-2.5"><img className="pt-2" src={location} alt="Location icon" />Ultimate Data Protection</li>
              <li className="flex items-center gap-2.5"><img className="pt-2" src={email} alt="Email icon" />info@egistic.com</li>
              <li className="flex items-center gap-2.5"><img className="pt-2" src={phone} alt="Phone icon" />+88 0123456789</li>
            </ul>
          </section>
          <div className="flex gap-40">
            <section className="max-w-60">
              <h3 className="text-3xl text-secondary font-semibold mb-6">Quick Links</h3>
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Track Your Shipment</li>
                <li>Get a Quote</li>
              </ul>
            </section>
            <section>
              <h3 className="text-3xl text-secondary font-semibold mb-6">Support</h3>
              <ul>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </section>
          </div>
        </div>

        {/* ***** Border Natural ***** */}
        <div className="border border-neutral/20"></div>

        <div>
          <section className="max-w-[1170px] mx-auto px-5 md:px-0 flex justify-between items-center mt-5 pb-10">
            <p>© 2024 , All rights reserved.</p>
            <div className="flex gap-3 items-center">
              <img src={fb} alt="Facebook icon" />
              <img src={ig} alt="Instagram icon" />
              <img src={x} alt="X icon" />
              <img src={linkedin} alt="LinkedIn icon" />
            </div>
          </section>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
