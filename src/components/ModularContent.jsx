import footerMsgBg from "@/assets/modular-content-bg.jpg";
import Button from "@/components/Buttons/Button";
import { Link } from "react-router-dom";
import scrollToTop from "./Shared/NavBar/ScrollToTop";

const ModularContent = ({ description, btn }) => {
  const style = {
    background: `url(${footerMsgBg})`,
  };
  return (
    // if no props, then only show bg img. if no need img when no props then remove h-[440px] in section className attribute.
    <section
      className="h-[200px] md:h-[440px] !bg-no-repeat !bg-cover !bg-center relative"
      style={style}
    >
      <div className="w-full h-full absolute top-0 left-0 backdrop-brightness-75">
      </div>
      {btn && (
        <div className="flex flex-col justify-center items-center align-middle text-white gap-6 md:gap-10 h-full relative">
          <p className="text-2xl md:text-5xl font-semibold">Get a Free Quote</p>
          <Link onClick={scrollToTop} to="/contact-us">
            <Button>Contact Our Team</Button>
          </Link>
        </div>
      )}
      {description && (
        <div className="text-white text-center text-xl md:text-4xl lg:text-5xl font-bold leading-tight min-w-[343px] max-w-[970px] mx-auto px-5 md:px-0 flex justify-center items-center align-middle h-full relative
        ">
          {description}
        </div>
      )}
    </section>
  );
};

export default ModularContent;
