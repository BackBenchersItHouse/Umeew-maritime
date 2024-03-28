import React from 'react'
import dotIcon from "@/assets/icons/dotPoint.png";
import shipIcon from "@/assets/icons/ship.png";
import Card from "@/components/Shared/Card";
import ModularContent from "@/components/ModularContent";
//Naimur Rahman
// array of  store
const storeTypesData = [
  {
    id: 1,
    title: "Deck Equipment",
    description:
      "Anchors, winches, mooring lines, cargo handling equipment, safety gear, and more.",
  },
  {
    id: 2,
    title: "Engine Room Supplies",
    description:
      "Spare parts for all engine types, lubricants, filters, gaskets, and other essential engine room consumables.",
  },
  {
    id: 3,
    title: "Navigation & Communication Equipment",
    description:
      "Radars, GPS systems, radios, charts, and other equipment for safe and efficient navigation.",
  },
  {
    id: 4,
    title: "Safety Equipment",
    description:
      "Life rafts, life jackets, fire extinguishers, personal protective equipment, and other safety essentials to comply with regulations and ensure crew safety.",
  },
  {
    id: 5,
    title:"Galley & Cabin Supplies" ,
    description:"Appliances, cooking equipment, utensils, linens, toiletries, and everything your crew needs for a comfortable and well-maintained living environment."
      ,
  },

  {
    id: 6,
    title: "Electrical Supplies",
    description:"Cables, transformers, switchboards, control panels, and a wide range of electrical components to keep your vessel's power systems functioning optimally."
      ,
  },

  {
    id: 7,
    title: "Mechanical Supplies",
    description:"Bearings, pumps, valves, piping, tools, and other essential mechanical components for maintaining your vessel's operational efficiency."
      ,
  },

 
];
// array of service
const services = [
  { 
    id: 1,
    title:"Cargo Handling Equipment" ,
    text: "Cranes, forklifts, lashing equipment, and other cargo handling solutions tailored to your specific cargo type.",
    iconSrc: shipIcon,
  },

  { 
    id: 2,
    title:"Pollution Prevention Equipment" ,
    text: "We offer a range of equipment to comply with environmental regulations and ensure sustainable maritime operations.",
    iconSrc: shipIcon ,
  },
  {
    id: 3,
    title: "Waste Management Equipment",
    text:"We provide solutions for efficient onboard waste management",
    iconSrc:shipIcon ,
      
  },
  {
    id:4 ,
    title:"Extensive Inventory & Global Sourcing" ,
    text: "We maintain a vast inventory and have strong relationships with global suppliers, ensuring you get the right equipment quickly and efficiently.",
    iconSrc:shipIcon ,
  },
  {
    id: 5,
    title:"Competitive Prices" ,
    text: "We leverage our buying power to offer competitive prices on all ship supplies."  ,
    iconSrc:shipIcon ,
  },
  {
    id: 6,
    title: "Expert Advice & Recommendations",
    text:  "Our team of experienced professionals can provide expert advice and recommendations to ensure you select the most suitable equipment for your vessel.",
    iconSrc:shipIcon ,
  },

  {
    id: 6,
    title: "Just-in-Time Delivery",
    text:  "We understand the importance of timely deliveries. We work closely with logistics partners to ensure your supplies reach you when and where you need them.",
    iconSrc:shipIcon ,
  },
]
const ShipSupply = () => {
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
        United Marine Engineering & Electrical Works: Your Complete Ship Supply Solution (Electrical, Mechanical & Beyond)

        </h1>
        <h2 className="text-2xl :text-4xl font-semibold mb-4">
        Ensuring Your Vessel Has Everything It Needs to Thrive
        </h2>
        <p className=" mb-8">
        At United Marine Engineering & Electrical Works, we understand the complexities of keeping your vessel operational.  That's why we offer a comprehensive ship supply solution, encompassing all the essential equipment and supplies you need to navigate any voyage with confidence.

        </p>
        <h3 className="text-xl md:text-3xl font-semibold mb-4">
        From Anchors to Electrical Generators: We Supply It All
        </h3>
        <p>
        Our extensive inventory includes a vast array of ship supplies, categorized to simplify your procurement process:

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
      Beyond the Basics:  Specialized Equipment & Machinery
      </p>
      <div className="flex flex-wrap justify-around gap-8">
        {services.map((service) => (
          <Card  data={service} />
        ))}
      </div>
    </section>
    {/* 3 */}
    <section className="md:flex max-w-7xl mx-auto gap-24 mb-32 hidden p-4">
      <img src="https://i.ibb.co/wMLN7NZ/image-86-1.png" alt="" />
      <div className="flex flex-col justify-center">
        <h3 className="text-4xl font-bold mb-4">
        Streamlined Procurement & Peace of Mind
        </h3>
        <p className="text-lg">
        United Marine Engineering & Electrical Works simplifies ship supply by providing a one-stop shop for all your needs.  With our extensive inventory, expert advice, and efficient logistics network, you can rest assured that your vessel is fully equipped for a successful voyage.
        </p>
      </div>
    </section>
    {/*  */}
    <ModularContent
      description={
    "Ready to experience the United Marine Engineering & Electrical Works difference? Contact us today to discuss your ship supply requirements and request a quote!"
      }
    />
  </>
  )
}

export default ShipSupply