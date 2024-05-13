// Service Banner Section
import ServiceBanner from "@/components/ServiceBanner";
import shipSupplyImg from "@/assets/service-pages/chandlery.svg";
// Service Commitment Section
import CommitmentCard from "@/components/Cards/CommitmentCard";
import commitmentIcon from "@/assets/icons/ship.svg";
// Service Hero Section
import ServiceHero from "@/components/ServiceHero";
// Service Modular Content Section
import ModularContent from "@/components/ModularContent";
import shipSupplyFlag from "@/assets/service-pages/chandlery-flag.svg";

import Title from "@/components/Title";

const ShipSupply = () => {
  const shipSupply = {
    id: 1,
    title:
      "United Marine Engineering & Electrical Works: Your Complete Ship Supply Solution (Electrical, Mechanical & Beyond)",
    subTitle: "Ensuring Your Vessel Has Everything It Needs to Thrive",
    description:
      "At United Marine Engineering & Electrical Works, we understand the complexities of keeping your vessel operational.  That's why we offer a comprehensive ship supply solution, encompassing all the essential equipment and supplies you need to navigate any voyage with confidence.",
    src: shipSupplyImg,
    listItem: {
      itemTitle: "From Anchors to Electrical Generators: We Supply It All",
      itemDescription:
        "Our extensive inventory includes a vast array of ship supplies, categorized to simplify your procurement process:",
      lists: [
        {
          listId: 1,
          listHead: "Deck Equipment",
          listPara:
            "Anchors, winches, mooring lines, cargo handling equipment, safety gear, and more.",
        },
        {
          listId: 2,
          listHead: "Engine Room Supplies",
          listPara:
            "Spare parts for all engine types, lubricants, filters, gaskets, and other essential engine room consumables.",
        },
        {
          listId: 3,
          listHead: "Navigation & Communication Equipment",
          listPara:
            "Radars, GPS systems, radios, charts, and other equipment for safe and efficient navigation.",
        },
        {
          listId: 4,
          listHead: "Safety Equipment",
          listPara:
            "Life rafts, life jackets, fire extinguishers, personal protective equipment, and other safety essentials to comply with regulations and ensure crew safety.",
        },
        {
          listId: 5,
          listHead: "Galley & Cabin Supplies",
          listPara:
            "Appliances, cooking equipment, utensils, linens, toiletries, and everything your crew needs for a comfortable and well-maintained living environment.",
        },
        {
          listId: 6,
          listHead: "Electrical Supplies",
          listPara:
            "Cables, transformers, switchboards, control panels, and a wide range of electrical components to keep your vessel's power systems functioning optimally.",
        },
        {
          listId: 7,
          listHead: "Mechanical Supplies",
          listPara:
            "Bearings, pumps, valves, piping, tools, and other essential mechanical components for maintaining your vessel's operational efficiency.",
        },
      ],
    },
  };

  const equipmentAndMachinery = {
    listItem: {
      itemTitle: "Beyond the Basics:  Specialized Equipment & Machinery",
      itemDescription:
        "Our expertise extends beyond standard ship supplies. We can source and supply specialized equipment and machinery for your specific needs, including:",
      lists: [
        {
          listId: 1,
          listHead: "Cargo Handling Equipment",
          listPara:
            "Cranes, forklifts, lashing equipment, and other cargo handling solutions tailored to your specific cargo type.",
        },
        {
          listId: 2,
          listHead: "Pollution Prevention Equipment",
          listPara:
            "We offer a range of equipment to comply with environmental regulations and ensure sustainable maritime operations.",
        },
        {
          listId: 3,
          listHead: "Waste Management Equipment",
          listPara:
            "Radars, GPS systems, radios, charts, and other equipment for safe and efficient navigation.",
        },
      ],
    },
  };

  const commitments = [
    {
      id: 1,
      icon: commitmentIcon,
      title: "Extensive Inventory & Global Sourcing",
      subTitle:
        "We maintain a vast inventory and have strong relationships with global suppliers, ensuring you get the right equipment quickly and efficiently.",
    },
    {
      id: 2,
      icon: commitmentIcon,
      title: "Competitive Prices",
      subTitle:
        "We leverage our buying power to offer competitive prices on all ship supplies.",
    },
    {
      id: 3,
      icon: commitmentIcon,
      title: "Expert Advice & Recommendations",
      subTitle:
        "Our team of experienced professionals can provide expert advice and recommendations to ensure you select the most suitable equipment for your vessel.",
    },
    {
      id: 4,
      icon: commitmentIcon,
      title: "Just-in-Time Delivery",
      subTitle:
        "We understand the importance of timely deliveries. We work closely with logistics partners to ensure your supplies reach you when and where you need them.",
    },
  ];

  const slogan = {
    title: "Streamlined Procurement & Peace of Mind",
    description:
      "United Marine Engineering & Electrical Works simplifies ship supply by providing a one-stop shop for all your needs.  With our extensive inventory, expert advice, and efficient logistics network, you can rest assured that your vessel is fully equipped for a successful voyage.",
    src: shipSupplyFlag,
  };

  const props = {
    description:
      "Ready to experience the United Marine Engineering & Electrical Works difference? Contact us today to discuss your ship supply requirements and request a quote!",
  };
  return (
    <>
      <Title title={"Ship Supply"} />

      <section className="max-w-[1170px] mx-auto my-14 md:my-[60px] px-2 xl:px-0">
        <ServiceBanner {...shipSupply} />

        <ServiceBanner {...equipmentAndMachinery} />

        <h1 className="mt-14 md:mt-[120px] mb-6 md:mb-[60px] text-center text-2xl md:text-3xl lg:text-[40px] font-bold min-w-[343px] max-w-[707px] mx-auto">
          The United Marine Engineering & Electrical Works Advantage:
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

export default ShipSupply;
