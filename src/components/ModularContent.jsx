import React from "react";
import footerMsgBg from "@/assets/contact-bg-img.svg";
import Button from "@/components/Buttons/Button";
import { Link } from "react-router-dom";

const ModularContent = ({ description, btn }) => {
  return (
    // if no props, then only show bg img. if no need img when no props then remove h-[440px] in section className attribute.
    <section
      className="h-[440px] !bg-no-repeat !bg-cover !bg-center -z-50"
      style={{ background: `url(${footerMsgBg})` }}
    >
      {btn && (
        <div className="flex flex-col justify-center items-center align-middle text-white gap-6 md:gap-10 h-full">
          <p className="text-2xl md:text-5xl font-semibold">Get a Free Quote</p>
          <Link to="/contact-us">
            <Button>Contact Our Team</Button>
          </Link>
        </div>
      )}
      {description && (
        <div className="text-white text-center text-2xl md:text-4xl lg:text-5xl font-bold leading-tight min-w-[343px] max-w-[970px] mx-auto flex justify-center items-center align-middle h-full">
          {description}
        </div>
      )}
    </section>
  );
};

export default ModularContent;
