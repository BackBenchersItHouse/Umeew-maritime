import React from "react";
import dotIcon from "@/assets/icons/dotPoint.png";
import shipIcon from "@/assets/icons/ship.png";
import Card from "@/components/Shared/Card";
import ModularContent from "@/components/ModularContent";

const storeTypesData = [
  {
    id: 1,
    title: "Global Network & Strategic Partnerships:",
    description:
      " We have established relationships with reliable shipping lines and logistics partners worldwide, offering a variety of transportation options tailored to your specific cargo type, budget, and delivery timeframes.",
  },
  {
    id: 2,
    title: "24/7 Operations & Emergency Support",
    description:
      "Our dedicated logistics team operates 24/7 to ensure timely responses and address any urgent delivery needs you may have (consider including this if applicable)."
  },
  {
    id: 3,
    title: "Real-Time Shipment Tracking",
    description:
      "Enjoy peace of mind with our robust tracking system, allowing you to monitor your shipment's progress in real-time. "

  },
  {
    id: 4,
    title: "Customs Clearance Expertise",
    description:
      "Our team handles all customs clearance procedures meticulously, ensuring your cargo reaches its destination efficiently and compliant with international regulations."

  },
  {
    id: 5,
    title: "Inland Transportation",
    description:
      "We offer a range of inland transportation options, including trucking services, to ensure your supplies reach the port or shipyard on time."

  },
  {
    id: 6,
    title: "Vessel-Side Delivery",
    description:
      "Depending on port regulations, we can arrange for direct delivery of your supplies right to your vessel, minimizing downtime and maximizing operational efficiency."

  },
];

const services = [
  {
    title: "Cost-Effectiveness",
    text: "We leverage our buying power and strategic partnerships to negotiate competitive shipping rates, optimizing your logistics budget.",
    iconSrc: shipIcon,
  },
  {
    title: "Flexibility & Scalability",
    text: "Our solutions adapt to your specific needs, accommodating various cargo sizes, delivery timeframes, and port locations.",
    iconSrc: shipIcon,
  },
  {
    title: "Transparency & Communication",
    text: "We maintain open communication throughout the logistics process, keeping you informed of your shipment's status every step of the way.",
    iconSrc: shipIcon,
  },
  {
    title: "Safety & Security",
    text: "We prioritize the safe and secure transportation of your cargo, adhering to the highest safety standards and regulations.",
    iconSrc: shipIcon,
  },
  
];

const LogisticService = () => {
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
          United Marine Engineering & Electrical Works: Your Streamlined Maritime Logistics Partner
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Ensuring Your Vessel Receives the Right Supplies, Right on Time


          </h2>
          <p className=" mb-8">
          At United Marine Engineering & Electrical Works, we understand the critical role efficient logistics plays in the success of your maritime operations.  Whether you require ship chandlery supplies, vital equipment, or export products, our comprehensive logistics services ensure your vessel receives everything it needs, exactly when and where you need it.


          </p>
          <h3 className="text-xl md:text-3xl font-semibold mb-4">
          Seamless Deliveries for Every Need:


          </h3>
          <p>
          Our logistics expertise encompasses a wide range of maritime-specific services:


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
        The United Marine Engineering & Electrical Works Logistics Advantage:

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
          Focus on Your Core Business, We Handle the Logistics:

          </h3>
          <p className="text-lg">
          United Marine Engineering & Electrical Works allows you to focus on your core business while we take care of the complexities of maritime logistics.  Our team of experienced professionals ensures your supplies reach your vessels efficiently, minimizing delays and disruptions to your operations.

          </p>
          
        </div>
      </section>
      {/*  */}
      <ModularContent
        description={
          "Ready to experience the United Marine Engineering & Electrical Works logistics difference? Contact us today to discuss your specific needs and request a free quote!"

          
        }
      />
    </>
  );
};

export default LogisticService;
