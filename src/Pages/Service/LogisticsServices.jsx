import ServiceBanner from "@/components/ServiceBanner";
import React from "react";
import logisticsImg from '@/assets/service-pages/chandlery.svg';

const LogisticsServices = () => {
  const logistics = {
    id: 1,
    title:
      "United Marine Engineering & Electrical Works: Your Streamlined Maritime Logistics Partner",
    subTitle: "Ensuring Your Vessel Receives the Right Supplies, Right on Time",
    description:
      "At United Marine Engineering & Electrical Works, we understand the critical role efficient logistics plays in the success of your maritime operations.  Whether you require ship chandlery supplies, vital equipment, or export products, our comprehensive logistics services ensure your vessel receives everything it needs, exactly when and where you need it.",
    src: logisticsImg,
    listItem: {
      itemTitle: "Seamless Deliveries for Every Need",
      itemDescription:
        "Our logistics expertise encompasses a wide range of maritime-specific services:",
      lists: [
        {
          listId: 1,
          listHead: "Global Network & Strategic Partnerships",
          listPara:
            "We have established relationships with reliable shipping lines and logistics partners worldwide, offering a variety of transportation options tailored to your specific cargo type, budget, and delivery timeframes.",
        },
        {
          listId: 2,
          listHead: "24/7 Operations & Emergency Support",
          listPara:
            "Our dedicated logistics team operates 24/7 to ensure timely responses and address any urgent delivery needs you may have (consider including this if applicable).",
        },
        {
          listId: 3,
          listHead: "Real-Time Shipment Tracking",
          listPara:
            "Enjoy peace of mind with our robust tracking system, allowing you to monitor your shipment's progress in real-time.",
        },
        {
          listId: 4,
          listHead: "Customs Clearance Expertise",
          listPara:
            "Our team handles all customs clearance procedures meticulously, ensuring your cargo reaches its destination efficiently and compliant with international regulations.",
        },
        {
          listId: 5,
          listHead: "Inland Transportation",
          listPara:
            "We offer a range of inland transportation options, including trucking services, to ensure your supplies reach the port or shipyard on time.",
        },
        {
          listId: 6,
          listHead: "Vessel-Side Delivery",
          listPara:
            "Depending on port regulations, we can arrange for direct delivery of your supplies right to your vessel, minimizing downtime and maximizing operational efficiency.",
        },
      ],
    },
  };
  return (
    <section className="max-w-[1170px] mx-auto my-[60px] px-2 xl:px-0">
      <ServiceBanner {...logistics} />
    </section>
  );
};

export default LogisticsServices;
