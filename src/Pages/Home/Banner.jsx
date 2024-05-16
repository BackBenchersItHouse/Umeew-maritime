import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Buttons/Button";
import shipVideo from "@/assets/icons/ummew_ship_film.mp4"
import scrollToTop from "@/components/Shared/NavBar/ScrollToTop";

const Banner = () => {

  return (
    <section className="bg-primary text-white  md:pb-20 -z-50 px-5 md:px-2">
      <div className="max-w-[1170px] mx-auto md:flex justify-between items-center gap-5 py-12">
        <div className="max-w-[592px] basis-1/2 mx-auto md:mx-0">
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-5xl leading-normal capitalize animate-motion-rl-300ms md:animate-motion-lr-300ms">
            United Marine Engineering & Electrical Works: Your One-Stop Shop for
            All Ship Needs
          </h1>
          <p className="text-lg md:text-xl pt-5 pb-12 text-neutral animate-motion-lr-500ms">
            Ensure smooth sailing with United Marine. We provide expert ship
            chandlery, repair (electrical & mechanical), supply, logistics, and
            export services. Get a free quote today!
          </p>
          <div className="w-1/3 mx-auto">
            <Link onClick={scrollToTop} to='/about-us' className="animate-motion-lr-500ms  md:animate-motion-lr-700ms"><Button>Learn More</Button></Link>

          </div>
        </div>
        <div className="max-w-[490px] basis-1/2 mx-auto md:mx-0 py-24 md:py-0 ">
          <video src={shipVideo}
            autoPlay
            loop
            className="rounded-xl px-2"></video>
        </div>
      </div>
    </section>
  );
};

export default Banner;
