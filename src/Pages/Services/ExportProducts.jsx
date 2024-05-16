// Service Banner Section
import ServiceBanner from "@/components/ServiceBanner";
import exportProductsImg from "@/assets/service-pages/chandlery.svg";
// Service Commitment Section
import CommitmentCard from "@/components/Cards/CommitmentCard";
import anchorIcon from "@/assets/icons/anchor.png";
// Service Hero Section
import ServiceHero from "@/components/ServiceHero";
// Service Modular Content Section
import ModularContent from "@/components/ModularContent";
import exportProductsFlag from "@/assets/service-pages/chandlery-flag.svg";

import Title from "@/components/Title";

const ExportProducts = () => {
  const exportProducts = {
    id: 1,
    title:
      "United Marine Engineering & Electrical Works: Your Trusted Partner for Streamlined Ship Parts & Equipment Export",
    subTitle: "Navigate International Trade with Confidence",
    description:
      "At United Marine Engineering & Electrical Works, we're not just experts in keeping your vessel operational - we're also here to facilitate your international trade needs. Our export product service simplifies the process of acquiring and delivering essential ship spare parts, equipment, and machinery globally.",
    src: exportProductsImg,
    listItem: {
      itemTitle: "Exporting Ship Essentials: Our Expertise",
      itemDescription:
        "We understand the complexities of international trade.  Our export services ensure a smooth and efficient process for acquiring and delivering the following ship-related products:",
      lists: [
        {
          listId: 1,
          listHead: "Ship Spare Parts",
          listPara:
            "Extensive inventory of spare parts for all types of engines, electrical systems, and mechanical components, ensuring you maintain your vessel's operational efficiency.",
        },
        {
          listId: 2,
          listHead: "Marine Motors & Pumps",
          listPara:
            "From propulsion motors to essential pumps, we provide a wide range of options to meet your specific vessel requirements.",
        },
        {
          listId: 3,
          listHead: "Engine Accessories",
          listPara:
            "Optimize engine performance and longevity with a comprehensive selection of engine accessories.",
        },
        {
          listId: 4,
          listHead: "Sewage Treatment Plants",
          listPara:
            "Comply with environmental regulations and ensure sustainable practices with high-quality sewage treatment plants",
        },
        {
          listId: 5,
          listHead: "Shipbuilding & Repair Supplies",
          listPara:
            "Steel plates, pipes, valves, welding equipment, and other essential materials for shipbuilding and repair.",
        },
        {
          listId: 6,
          listHead: "Marine Equipment & Machinery",
          listPara:
            "Spare parts, engines, generators, deck equipment, navigation and communication systems, and a variety of other marine equipment.",
        },
      ],
    },
  };

  const commitments = [
    {
      id: 1,
      icon: anchorIcon,
      title: "Global Network & Reliable Suppliers",
      subTitle:
        "We have established relationships with reputable manufacturers and suppliers worldwide, guaranteeing high-quality products and competitive pricing.",
    },
    {
      id: 2,
      icon: anchorIcon,
      title: "Seamless Export Process",
      subTitle:
        "Our team handles all the complexities of international trade, allowing you to focus on your core business.",
    },
    {
      id: 3,
      icon: anchorIcon,
      title: "Transparent Communication",
      subTitle:
        "We keep you informed throughout the export process, from order confirmation to delivery.",
    },
    {
      id: 4,
      icon: anchorIcon,
      title: "Cost-Effective Solutions",
      subTitle:
        "We leverage our expertise to ensure you receive the best value for your export needs.",
    },
  ];

  const slogan = {
    title: "Expand Your Reach with Confidence",
    description:
      "United Marine Engineering & Electrical Works is your one-stop shop for all your ship spare parts, equipment, and machinery export needs. With our extensive expertise, global network, and commitment to efficient service, we empower you to navigate international trade with confidence.",
    src: exportProductsFlag,
  };

  const props = {
    description:
      "Contact United Marine Engineering & Electrical Works today to discuss your export requirements and request a free quote!",
  };
  return (
    <>
      <Title title={"Export Products Services"} />

      <section className="max-w-[1170px] mx-auto my-14 md:my-[60px] px-2 xl:px-0">
        <ServiceBanner {...exportProducts} />

        <h1 className="mt-14 md:mt-[120px] mb-6 md:mb-[60px] text-center text-2xl md:text-3xl lg:text-[40px] font-bold min-w-[343px] max-w-[707px] mx-auto">
          The United Marine Engineering & Electrical Works Advantage
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

export default ExportProducts;
