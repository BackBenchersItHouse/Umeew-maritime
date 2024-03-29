// Service Banner Section
import ServiceBanner from "@/components/ServiceBanner";
import shipRepairImg from "@/assets/service-pages/chandlery.svg";
// Service Commitment Section
import CommitmentCard from "@/components/Cards/CommitmentCard";
import commitmentIcon from "@/assets/icons/ship.svg";
// Service Hero Section
import ServiceHero from "@/components/ServiceHero";
// Service Modular Content Section
import ModularContent from "@/components/ModularContent";
import shipRepairFlag from "@/assets/service-pages/chandlery-flag.svg";

const ShipRepair = () => {
  const shipRepair = {
    id: 1,
    title:
      "United Marine Engineering & Electrical Works: Your Trusted Partner for Expert Ship Repair (Electrical & Mechanical)",
    subTitle: "Keeping Your Vessel Running Smoothly, Wherever You Sail",
    description:
      "At United Marine Engineering & Electrical Works, we understand that even the most reliable vessels require repairs from time to time.  That's why we offer a comprehensive suite of electrical and mechanical ship repair services designed to get you back on the water quickly and efficiently.  Our team of highly skilled and experienced technicians are passionate about keeping your vessel operating at peak performance.",
    src: shipRepairImg,
    listItem: {
      itemTitle: "Addressing Your Electrical and Mechanical Challenges:",
      itemDescription:
        "Our expertise encompasses a wide range of electrical and mechanical systems, ensuring we can address any challenge your vessel may face:",
      lists: [
        {
          listId: 1,
          listHead: "Engine Repair & Overhaul",
          listPara:
            "Our technicians are proficient in servicing and repairing all types of marine engines, ensuring optimal performance and fuel efficiency.",
        },
        {
          listId: 2,
          listHead: "Generator Repair & Maintenance",
          listPara:
            "We keep your onboard power generation systems running smoothly, guaranteeing reliable electricity for all your vessel's needs.",
        },
        {
          listId: 3,
          listHead: "Electrical System Troubleshooting & Repair",
          listPara:
            "From basic wiring issues to complex electrical faults, our team can diagnose and repair any electrical problem efficiently.",
        },
        {
          listId: 4,
          listHead: "Navigation & Communication Equipment Repair",
          listPara:
            "We ensure your navigation and communication systems function flawlessly, keeping you safely connected and on course.",
        },
        {
          listId: 5,
          listHead: "Pump & Valve Repair & Maintenance",
          listPara:
            "Our team maintains and repairs pumps and valves, critical components for the smooth operation of your vessel's systems.",
        },
        {
          listId: 6,
          listHead: "Steering & Rudder System Repair",
          listPara:
            "We keep your steering and rudder systems in top condition, ensuring precise vessel control and maneuverability.",
        },
      ],
    },
  };

  const commitments = [
    {
      id: 1,
      icon: commitmentIcon,
      title: "Experienced & Certified Technicians",
      subTitle:
        "Our team holds the necessary qualifications and certifications to handle all electrical and mechanical repairs with expertise.",
    },
    {
      id: 2,
      icon: commitmentIcon,
      title: "Advanced Diagnostic Tools",
      subTitle:
        "We utilize cutting-edge diagnostic tools to pinpoint the root cause of any issue quickly and accurately.",
    },
    {
      id: 3,
      icon: commitmentIcon,
      title: "Genuine Parts & Quality Workmanship",
      subTitle:
        "We use only genuine manufacturer parts and ensure the highest quality workmanship for lasting repairs.",
    },
    {
      id: 4,
      icon: commitmentIcon,
      title: "24/7 Emergency Support (Optional)",
      subTitle:
        "We understand that emergencies can arise at any time. Our 24/7 emergency support ensures we're there for you when you need us most (consider including this if applicable).",
    },
    {
      id: 5,
      icon: commitmentIcon,
      title: "Global Service Network",
      subTitle:
        "With a network of partners across the globe, we can provide repair services at most major ports (consider including this if applicable).",
    },
  ];

  const slogan = {
    title:
      "Why Choose United Marine Engineering & Electrical Works for Ship Repair?",
    description:
      "When it comes to your vessel's electrical and mechanical repairs, trust matters.  At United Marine Engineering & Electrical Works, we offer a unique combination of expertise, experience, and a commitment to exceptional service.  We are your one-stop shop for all your ship repair needs, ensuring your vessel continues to navigate the seas with confidence.",
    src: shipRepairFlag,
  };

  const props = {
    description:
      "Contact United Marine Engineering & Electrical Works today to discuss your specific repair requirements and request a free quote!",
  };
  return (
    <>
      <section className="max-w-[1170px] mx-auto my-14 md:my-[60px] px-2 xl:px-0">
        <ServiceBanner {...shipRepair} />

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

export default ShipRepair;
