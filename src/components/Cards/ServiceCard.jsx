import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ services }) => {
  console.log("services: ", services);
  return (
    <section className="my-[120px]">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-[60px]">
        Our Comprehensive <br /> Maritime Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between justify-items-center gap-8">
        {services?.map((service, idx) => {
          return (
            <div
              // className={`py-5 px-4 border border-accent/20 shadow-lg hover:-translate-y-1 duration-300 hover:border-b-4 hover:border-b-secondary ${
              //   idx === 3 ? "lg:col-start-1 lg:col-end-2" : ""
              // } ${
              //   idx === 4 ? "lg:col-end-4 lg:col-span-1" : ""
              // }`}
              className="py-5 px-4 border border-accent/20 shadow-lg hover:-translate-y-1 duration-300 hover:border-b-4 hover:border-b-secondary"
              key={idx}
            >
              <div>
                <img src={service.src} alt={`${service.title} image`} />
              </div>
              <h3 className="text-xl font-semibold my-4">{service.title}</h3>
              <p className="w-[338px] text-accent my-4">{service.subTitle}</p>
              <Link className="font-semibold text-secondary" to={service.path}>
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceCard;
