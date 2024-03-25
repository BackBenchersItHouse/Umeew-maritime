import ServiceCard from "@/components/Cards/ServiceCard";
import React from "react";

// Import Images 
import chandlery from '@/assets/services/chandlery.svg';
import shipRepair from '@/assets/services/chandlery.svg';
import shipSupply from '@/assets/services/chandlery.svg';
import logisticsServices from '@/assets/services/chandlery.svg';
import exportProducts from '@/assets/services/chandlery.svg';

const OurServices = () => {
  const services = [
    {
      img: chandlery,
      title: "Ship Chandlery",
      subTitle:
        "We provide a vast selection of provisions, deck & engine stores to meet all your vessel's requirements.",
      path: "/",
    },
    {
      icon: shipRepair,
      title: "Ship Repair",
      subTitle:
        "Our expert technicians tackle both electrical and mechanical repairs, ensuring your ship's systems function flawlessly.",
      path: "/",
    },
    {
      icon: shipSupply,
      title: "Ship Supply",
      subTitle:
        "United Marine is your one-stop shop for all ship supplies and equipment, from essential safety gear to specialized parts.",
      path: "/",
    },
    {
      icon: logisticsServices,
      title: "Logistics Services",
      subTitle:
        "Benefit from our streamlined logistics solutions for prompt and efficient deliveries, wherever you need them.",
      path: "/",
    },
    {
      icon: exportProducts,
      title: "Export Products Services",
      subTitle:
        "Navigating exports can be complex. Our team simplifies the process, ensuring your products reach their destination smoothly.",
      path: "/",
    },
  ];

  return <ServiceCard services={services} />;
};

export default OurServices;
