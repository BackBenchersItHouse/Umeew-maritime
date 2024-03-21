import React from "react";
import Button from "../../../components/Buttons/Button";
import { Link } from "react-router-dom";
import BannerImg from "../../../assets/banner-img-no-radius.svg";

const Banner = () => {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-[1170px] mx-auto flex justify-between items-center py-12">
        <div className="max-w-[592px]">
          <h1 className="font-extrabold text-5xl leading-normal capitalize">
            United Marine Engineering & Electrical Works: Your One-Stop Shop for
            All Ship Needs
          </h1>
          <p className="text-xl pt-5 pb-12 text-silver">
            Ensure smooth sailing with United Marine. We provide expert ship
            chandlery, repair (electrical & mechanical), supply, logistics, and
            export services. Get a free quote today!
          </p>
          <div className="flex items-center gap-5">
            <Link to='/about-us'><Button>Learn More</Button></Link>
            <Link to='/service'><Button btnClass='!bg-primary' divClass='bg-secondary'>Our Services</Button></Link>
          </div>
        </div>
        <div className="max-w-[470px] translate-x-6">
          <img src={BannerImg} alt="UMEEW Cargo Ship" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
