// Service Banner Section
import ServiceBanner from "@/components/ServiceBanner";
import shipChandleryImg from "@/assets/service-pages/chandlery.svg";
// Service Commitment Section
import CommitmentCard from "@/components/Cards/CommitmentCard";
import commitmentIcon from "@/assets/icons/ship.svg";
// Service Hero Section
import ServiceHero from "@/components/ServiceHero";
// Service Modular Content Section
import ModularContent from "@/components/ModularContent";
import shipChandleryFlag from "@/assets/service-pages/chandlery-flag.svg";

import Title from "@/components/Title";

const ShipChandlery = () => {
  const shipChandlery = {
    id: 1,
    title:
      "United Marine Engineering & Electrical Works's Ship Chandlery: Your One-Stop Shop for a Smooth Voyage",
    subTitle: "Keeping Your Vessel Well-Stocked and Operational",
    description:
      "United Marine Engineering & Electrical Works's ship chandlery service is your lifeline for essential supplies, ensuring your vessel operates smoothly throughout its voyage.  We provide a comprehensive range of products and services to cater to all your ship's needs.",
    src: shipChandleryImg,
    listItem: {
      itemTitle: "What is Ship Chandlery?",
      itemDescription:
        "Simply put, ship chandlery is the provisioning of essential supplies for ships.  United Marine Engineering & Electrical Works acts as your one-stop shop, offering a vast array of products, including:",
      lists: [
        {
          listId: 1,
          listHead: "Provisions",
          listPara:
            "Food, beverages, and other essential items for the crew to maintain their well-being.",
        },
        {
          listId: 2,
          listHead: "Bonded Stores",
          listPara:
            "Tobacco products and alcohol subject to duty upon arrival at port (applicable regulations apply).",
        },
        {
          listId: 3,
          listHead: "Deck & Engine Stores",
          listPara:
            "Critical supplies for the safe operation of the vessel, encompassing ropes, paints, lubricants, cleaning products, and safety equipment.",
        },
        {
          listId: 4,
          listHead: "Cabin Stores",
          listPara:
            "Items that ensure crew comfort and hygiene, such as toiletries, linens, and cleaning supplies.",
        },
      ],
    },
  };

  const commitments = [
    {
      id: 1,
      icon: commitmentIcon,
      title: "Reliable Sourcing",
      subTitle:
        "We source high-quality products from reputable suppliers, guaranteeing competitive prices.",
    },
    {
      id: 2,
      icon: commitmentIcon,
      title: "Timely Delivery",
      subTitle:
        "Our efficient logistics network ensures your supplies reach your vessel on time, every time.",
    },
    {
      id: 3,
      icon: commitmentIcon,
      title: "24/7 Emergency Support (Optional)",
      subTitle:
        "We understand unexpected situations can arise. Our 24/7 emergency support ensures we're there for you when you need us most (consider including this if applicable).",
    },
    {
      id: 4,
      icon: commitmentIcon,
      title: "Inventory Management",
      subTitle:
        "We can assist with onboard inventory management to streamline your operations (optional service).",
    },
    {
      id: 5,
      icon: commitmentIcon,
      title: "Customs Clearance (Optional)",
      subTitle:
        "For bonded stores, we can help navigate customs clearance procedures (consider including this if applicable).",
    },
    {
      id: 6,
      icon: commitmentIcon,
      title: "Customized Service",
      subTitle:
        "Our dedicated ship chandlery team works closely with you to understand your specific requirements and create a tailored supply plan.",
    },
  ];

  const slogan = {
    title: "Peace of Mind for Every Voyage",
    description:
      "By partnering with United Marine Engineering & Electrical Works for your ship chandlery needs, you gain peace of mind knowing your vessel is fully equipped for a successful voyage. Our commitment to quality, reliability, and personalized service ensures you have everything you need to navigate with confidence.",
    src: shipChandleryFlag,
  };

  const props = {
    description:
      "Contact United Marine Engineering & Electrical Works today to discuss your ship chandlery requirements!",
  };
  return (
    <>
      <Title title={"Ship Chandlery"} />

      <section className="max-w-[1170px] mx-auto my-14 md:my-[60px] px-2 xl:px-0">
        <ServiceBanner {...shipChandlery} />

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

export default ShipChandlery;
