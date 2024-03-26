import React from "react";
import dotIcon from "@/assets/icons/dotPoint.png";
import shipIcon from "@/assets/icons/ship.png";
import Card from "@/Components/Shared/Card";

const storeTypesData = [
  {
    id: 1,
    title: "Provisions",
    description:
      "Food, beverages, and other essential items for the crew to maintain their well-being.",
  },
  {
    id: 2,
    title: "Bonded Stores",
    description:
      "Tobacco products and alcohol subject to duty upon arrival at port (applicable regulations apply).",
  },
  {
    id: 3,
    title: "Deck & Engine Stores",
    description:
      "Critical supplies for the safe operation of the vessel, encompassing ropes, paints, lubricants, cleaning products, and safety equipment.",
  },
  {
    id: 4,
    title: "Cabin Stores",
    description:
      "Items that ensure crew comfort and hygiene, such as toiletries, linens, and cleaning supplies.",
  },
];

const services = [
  {
    title: "Reliable Sourcing",
    text: "We source high-quality products from reputable suppliers, guaranteeing competitive prices.",
    iconSrc: shipIcon,
  },
  {
    title: "Timely Delivery",
    text: "Our efficient logistics network ensures your supplies reach your vessel on time, every time.",
    iconSrc: shipIcon,
  },
  {
    title: "24/7 Emergency Support (Optional)",
    text: "We understand unexpected situations can arise. Our 24/7 emergency support ensures we're there for you when you need us most.",
    iconSrc: shipIcon,
  },
  {
    title: "Inventory Management (Optional)",
    text: "We can assist with onboard inventory management to streamline your operations (optional service).",
    iconSrc: shipIcon,
  },
  {
    title: "Customs Clearance (Optional)",
    text: "For bonded stores, we can help navigate customs clearance procedures (consider including this if applicable).",
    iconSrc: shipIcon,
  },
  {
    title: "Customized Service",
    text: "Our dedicated ship chandlery team works closely with you to understand your specific requirements and create a tailored supply plan.",
    iconSrc: shipIcon,
  },
];

const Service = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto md:block flex flex-col-reverse items-center text-lg my-10 p-4">
        <img
          className="md:ml-4 md:float-right w-[530px] h-[470px] mt-8 md:mt-0"
          src="https://i.ibb.co/1vnZBQP/image-86.png"
          alt="man"
        />
        <div>
          <h1 className="text-5xl font-bold mb-10 leading-snug">
            United Marine Engineering & Electrical Works's Ship Chandlery: Your
            One-Stop Shop for a Smooth Voyage
          </h1>
          <h2 className="text-4xl font-semibold mb-4">
            Keeping Your Vessel Well-Stocked and Operational
          </h2>
          <p className=" mb-8">
            United Marine Engineering & Electrical Works's ship chandlery
            service is your lifeline for essential supplies, ensuring your
            vessel operates smoothly throughout its voyage. We provide a
            comprehensive range of products and services to cater to all your
            ship's needs.
          </p>
          <h3 className="text-3xl font-semibold mb-4">
            What is Ship Chandlery?
          </h3>
          <p>
            Simply put, ship chandlery is the provisioning of essential supplies
            for ships. United Marine Engineering & Electrical Works acts as your
            one-stop shop, offering a vast array of products, including:
          </p>
          <div className="container mx-auto px-4 py-8">
            <ul className="list-none flex flex-col gap-4">
              {storeTypesData.map((storeType) => (
                <li key={storeType.id}>
                  <div className="flex items-center gap-4">
                    <img src={dotIcon} alt="" />
                    <h4 className="text-lg font-semibold">{storeType.title}</h4>
                  </div>
                  <p className="text-gray-700 pl-8">{storeType.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Chandlery Services */}
      <section className="max-w-7xl mx-auto mb-28">
        <p className="text-5xl text-center my-14 font-bold md:w-[70%] leading-tight mx-auto">
          United Marine Engineering & Electrical Works's Ship Chandlery Services
        </p>
        <div className="flex flex-wrap justify-around gap-8">
          {services.map((service) => (
            <Card data={service} />
          ))}
        </div>
      </section>
      {/* 3 */}
      <section className="md:flex max-w-7xl mx-auto gap-24 mb-32 hidden p-4">
        <img src="https://i.ibb.co/wMLN7NZ/image-86-1.png" alt="" />
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-bold mb-4">
            Peace of Mind for Every Voyage
          </h3>
          <p className="text-lg">
            By partnering with United Marine Engineering & Electrical Works for
            your ship chandlery needs, you gain peace of mind knowing your
            vessel is fully equipped for a successful voyage. Our commitment to
            quality, reliability, and personalized service ensures you have
            everything you need to navigate with confidence.
          </p>
        </div>
      </section>
      {/*  */}
      {/* <ModularContent
        description={
          "Contact United Marine Engineering & Electrical Works today to discuss your ship chandlery requirements!"
        }
      /> */}
    </>
  );
};

export default Service;
