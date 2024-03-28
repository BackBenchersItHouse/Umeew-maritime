import React from "react";

const ServiceCard = ({ id, src, title, subTitle }) => {
  console.log(title);
  return (
    <div
      className="py-5 px-4 border border-b-4 border-b-accent/5 border-accent/20 shadow-lg hover:-translate-y-1 duration-300 hover:border-b-4 hover:border-b-secondary"
      key={id}
    >
      <div>
        <img src={src} alt={`${title} image`} />
      </div>
      <h3 className="text-xl font-semibold my-4">{title}</h3>
      <p className="w-[338px] text-accent my-4">{subTitle}</p>
      <span className="font-semibold text-secondary">Read More</span>
    </div>
  );
};

export default ServiceCard;
