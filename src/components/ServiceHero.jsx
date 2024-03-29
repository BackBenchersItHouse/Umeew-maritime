import React from "react";

const ServiceHero = ({ title, description, src }) => {
  // console.log(src);
  return (
    <section className="my-14 md:my-[120px] flex flex-col lg:flex-row justify-center items-center gap-9 md:gap-[100px]">
      <img className="w-2/3 lg:h-full" src={src} alt={`${title}'s flag`} />
      <div className="min-w-[270px] max-w-[570px]">
        <h1 className="text-2xl md:text-[40px] font-semibold md:font-bold leading-normal mb-4">{title}</h1>
        <p className="text-lg text-accent">{description}</p>
      </div>
    </section>
  );
};

export default ServiceHero;
