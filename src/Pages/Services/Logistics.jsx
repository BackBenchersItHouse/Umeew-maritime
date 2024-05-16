// Service Banner Section
import ServiceBanner from "@/components/ServiceBanner";
import logisticsImg from "@/assets/service-pages/chandlery.svg";
// Service Commitment Section
import CommitmentCard from "@/components/Cards/CommitmentCard";
import anchorIcon from "@/assets/icons/anchor.png";
// Service Hero Section
import ServiceHero from "@/components/ServiceHero";
// Service Modular Content Section
import ModularContent from "@/components/ModularContent";
import logisticsFlag from "@/assets/service-pages/chandlery-flag.svg";

import Title from "@/components/Title";

const Logistics = () => {
  const logistics = {
    id: 1,
    title:
      "United Marine Engineering & Electrical Works: Your Streamlined Maritime Logistics Partner",
    subTitle: "Ensuring Your Vessel Receives the Right Supplies, Right on Time",
    description:
      "At United Marine Engineering & Electrical Works, we understand the critical role efficient logistics plays in the success of your maritime operations.  Whether you require ship chandlery supplies, vital equipment, or export products, our comprehensive logistics services ensure your vessel receives everything it needs, exactly when and where you need it.",
    src: logisticsImg,
    listItem: {
      itemTitle: "Seamless Deliveries for Every Need:",
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

  const commitments = [
    {
      id: 1,
      icon: anchorIcon,
      title: "Unparalleled Expertise",
      subTitle:
        "Our team of highly skilled and certified professionals possesses years of experience in all aspects of ship maintenance and repair",
    },
    {
      id: 2,
      icon: anchorIcon,
      title: "Quality You Can Trust",
      subTitle:
        "We use only the finest parts and materials to ensure long-lasting repairs and optimal performance.",
    },
    {
      id: 3,
      icon: anchorIcon,
      title: "Streamlined Efficiency",
      subTitle:
        "We prioritize clear communication and efficient service delivery to minimize downtime and keep your operations on schedule.",
    },
    {
      id: 4,
      icon: anchorIcon,
      title: "Competitive Rates",
      subTitle:
        "We offer competitive pricing and transparent cost structures to fit your budget.",
    },
  ];

  const slogan = {
    title: "Focus on Your Core Business, We Handle the Logistic",
    description:
      "United Marine Engineering & Electrical Works allows you to focus on your core business while we take care of the complexities of maritime logistics.  Our team of experienced professionals ensures your supplies reach your vessels efficiently, minimizing delays and disruptions to your operations.",
    src: logisticsFlag,
  };

  const props = {
    description:
      "Ready to experience the United Marine Engineering & Electrical Works logistics difference? Contact us today to discuss your specific needs and request a free quote!",
  };
  return (
    <>
      <Title title={"Logistics Services"} />

      <section className="max-w-[1170px] mx-auto my-14 md:my-[60px] px-2 xl:px-0">
        <ServiceBanner {...logistics} />

        <h1 className="mt-14 md:mt-[120px] mb-6 md:mb-[60px] text-center text-2xl md:text-3xl lg:text-[40px] font-bold min-w-[343px] max-w-[707px] mx-auto">
          United Marine Engineering & Electrical Works's Ship Chandlery Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between justify-items-center gap-[30px]">
          {commitments?.map((commitment) => (
            <div key={commitment.id}>
              <CommitmentCard {...commitment} />
            </div>
          ))}
        </div>

        <ServiceHero {...slogan} />
      </section>
      <ModularContent {...props} />
    </>
  );
};

export default Logistics;
