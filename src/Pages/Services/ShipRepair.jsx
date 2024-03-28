import React from "react";
import dotIcon from "@/assets/icons/dotPoint.png";
import shipIcon from "@/assets/icons/ship.png";
// import Card from "@/components/Shared/Card";
import ModularContent from "@/components/ModularContent";
import CommitmentCard from "@/components/Cards/CommitmentCard";

const storeTypesData = [
  {
    id: 1,
    title: "Engine Repair & Overhaul",
    description:
      "Our technicians are proficient in servicing and repairing all types of marine engines, ensuring optimal performance and fuel efficiency.",
  },
  {
    id: 2,
    title: "Generator Repair & Maintenance:",
    description:
      "We keep your onboard power generation systems running smoothly, guaranteeing reliable electricity for all your vessel's needs."
  },
  {
    id: 3,
    title: "Electrical System Troubleshooting & Repair",
    description:
      "From basic wiring issues to complex electrical faults, our team can diagnose and repair any electrical problem efficiently."

  },
  {
    id: 4,
    title: "Navigation & Communication Equipment Repair",
    description:
      "We ensure your navigation and communication systems function flawlessly, keeping you safely connected and on course."
  },
  {
    id: 5,
    title: "Pump & Valve Repair & Maintenance",
    description:
      "Our team maintains and repairs pumps and valves, critical components for the smooth operation of your vessel's systems."

  },
  {
    id: 6,
    title: "Steering & Rudder System Repair",
    description:
      "We keep your steering and rudder systems in top condition, ensuring precise vessel control and maneuverability."
  },
];

const services = [
  {
    title: "Experienced & Certified Technicians",
    subTitle: "Our team holds the necessary qualifications and certifications to handle all electrical and mechanical repairs with expertise.",
    icon: shipIcon,
    id: 1,
  },
  {
    title: "Advanced Diagnostic Tools",
    subTitle: "We utilize cutting-edge diagnostic tools to pinpoint the root cause of any issue quickly and accurately.",
    icon: shipIcon,
    id: 2,
  },
  {
    title: "Genuine Parts & Quality Workmanship",
    subTitle: "We use only genuine manufacturer parts and ensure the highest quality workmanship for lasting repairs.",
    icon: shipIcon,
    id: 3,
  },
  {
    title: "24/7 Emergency Support (Optional)",
    subTitle: "We understand that emergencies can arise at any time. Our 24/7 emergency support ensures we're there for you when you need us most (consider including this if applicable).",
    icon: shipIcon,
    id: 4,
  },
  {
    title: "Global Service Network",
    subTitle: "With a network of partners across the globe, we can provide repair services at most major ports (consider including this if applicable).",
    icon: shipIcon,
    id: 5,
  },
  {
    title: "Customized Service",
    subTitle: "Our dedicated ship chandlery team works closely with you to understand your specific requirements and create a tailored supply plan.",
    icon: shipIcon,
    id: 1,
  },
];

const ShipRepair = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto md:block flex flex-col-reverse items-center text-lg my-10 p-4">
        <img
          className="md:ml-4 md:float-right w-[530px] h-[470px] mt-8 md:mt-0"
          src="https://i.ibb.co/1vnZBQP/image-86.png"
          alt="man"
        />
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-10 leading-snug">
          United Marine Engineering & Electrical Works: Your Trusted Partner for Expert Ship Repair (Electrical & Mechanical)
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Keeping Your Vessel Running Smoothly, Wherever You Sail

          </h2>
          <p className=" mb-8">
          At United Marine Engineering & Electrical Works, we understand that even the most reliable vessels require repairs from time to time.  That's why we offer a comprehensive suite of electrical and mechanical ship repair services designed to get you back on the water quickly and efficiently.  Our team of highly skilled and experienced technicians are passionate about keeping your vessel operating at peak performance.

          </p>
          <h3 className="text-xl md:text-3xl font-semibold mb-4">
          Addressing Your Electrical and Mechanical Challenges:

          </h3>
          <p>
          Our expertise encompasses a wide range of electrical and mechanical systems, ensuring we can address any challenge your vessel may face:

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
        <p className="text-3xl md:text-5xl text-center my-14 font-bold md:w-[70%] leading-tight mx-auto px-2">
        The United Marine Engineering & Electrical Works Advantage:

        </p>
        <div className="flex flex-wrap justify-around gap-8">
          {services.map((service) => (
            <CommitmentCard {...service} />
          ))}
        </div>
      </section>
      {/* 3 */}
      <section className="md:flex max-w-7xl mx-auto gap-24 mb-32 hidden p-4">
        <img src="https://i.ibb.co/wMLN7NZ/image-86-1.png" alt="" />
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-bold mb-4">
          Seamless Repairs & Minimized Downtime

          </h3>
          <p className="text-lg">
          Our priority is to get your vessel back in operation as quickly as possible, minimizing downtime and lost revenue.  We work closely with you to understand the nature of the repairs needed and provide transparent communication throughout the repair process.
          </p>
          <h3 className="text-4xl font-bold my-4">
          Why Choose United Marine Engineering & Electrical Works for Ship Repair?
          </h3>
          <p className="text-lg">
          When it comes to your vessel's electrical and mechanical repairs, trust matters.  At United Marine Engineering & Electrical Works, we offer a unique combination of expertise, experience, and a commitment to exceptional service.  We are your one-stop shop for all your ship repair needs, ensuring your vessel continues to navigate the seas with confidence.

          </p>
        </div>
      </section>
      {/*  */}
      <ModularContent
        description={
          "Contact United Marine Engineering & Electrical Works today to discuss your specific repair requirements and request a free quote!"
          
        }
      />
    </>
  );
};

export default ShipRepair;
