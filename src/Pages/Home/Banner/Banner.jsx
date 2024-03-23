import React from "react";
import Button from "../../../components/Buttons/Button";
import { Link } from "react-router-dom";
import BannerImgSm from "../../../assets/banner-img-sm.png";
import BannerImg from "../../../assets/banner-img-no-radius.svg";

const Banner = () => {
  return (
    <section className="bg-primary text-white -z-50">
      <div className="max-w-[1170px] mx-auto md:flex justify-between items-center gap-5 py-12 space-y-12">
        <div className="max-w-[592px] px-10 md:px-0">
          <h1 className="font-extrabold text-3xl md:text-5xl leading-normal capitalize animate-motion-rl-300ms md:animate-motion-lr-300ms">
            United Marine Engineering & Electrical Works: Your One-Stop Shop for
            All Ship Needs
          </h1>
          <p className="text-xl pt-5 pb-12 text-silver animate-motion-lr-500ms">
            Ensure smooth sailing with United Marine. We provide expert ship
            chandlery, repair (electrical & mechanical), supply, logistics, and
            export services. Get a free quote today!
          </p>
          <div className="flex items-center gap-0 md:gap-5 justify-around md:justify-start">
            <Link to='/about-us' className="animate-motion-lr-500ms md:animate-motion-lr-700ms"><Button>Learn More</Button></Link>
            <Link to='/service' className="animate-motion-rl-500ms md:animate-motion-lr-400ms"><Button btnClass='!bg-primary' divClass='bg-secondary'>Our Services</Button></Link>
          </div>
        </div>
        <div className="max-w-[470px] py-24 md:py-0 md:animate-motion-rl-1s">
          <img className="block md:hidden h-96 animate-motion-lr-300ms" src={BannerImgSm} alt="UMEEW Cargo Ship" />
          <img className="hidden md:block" src={BannerImg} alt="UMEEW Cargo Ship" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
