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
    title: "Ship Spare Parts",
    description:
      "Extensive inventory of spare parts for all types of engines, electrical systems, and mechanical components, ensuring you maintain your vessel's operational efficiency.",
  },
  {
    id: 2,
    title: "Marine Motors & Pumps",
    description:
     "From propulsion motors to essential pumps, we provide a wide range of options to meet your specific vessel requirements.",
  },
  {
    id: 3,
    title: "Engine Accessories",
    description:
  "Optimize engine performance and longevity with a comprehensive selection of engine accessories.",
  },
  {
    id: 4,
    title: "Sewage Treatment Plants",
    description:
"Comply with environmental regulations and ensure sustainable practices with high-quality sewage treatment plants.",
  },
  {
    id: 5,
    title:"Shipbuilding & Repair Supplies" ,
    description:"Steel plates, pipes, valves, welding equipment, and other essential materials for shipbuilding and repair."
      ,
  },

  {
    id: 6,
    title: "Marine Equipment & Machinery",
    description:"Spare parts, engines, generators, deck equipment, navigation and communication systems, and a variety of other marine equipment."
      ,
  },

  

 
];
// array of service
const services = [
  { 
    id: 1,
    title:"Sourcing & Procurement" ,
    text: "We leverage our extensive global network to source high-quality products at competitive prices",
    iconSrc: shipIcon,
  },

  { 
    id: 2,
    title:"Documentation & Customs Clearance" ,
    text: "We handle all necessary export documentation and navigate customs clearance procedures efficiently.",
    iconSrc: shipIcon ,
  },
  {
    id: 3,
    title: "Packing & Logistics",
    text:"We ensure your products are expertly packaged and shipped to their destination using reliable logistics partners.",
    iconSrc:shipIcon ,
      
  },
  {
    id:4 ,
    title:"Export Regulations Expertise: " ,
    text: "Our team stays up-to-date on international export regulations, ensuring compliance throughout the process.",
    iconSrc:shipIcon ,
  },
  {
    id: 5,
    title:"Seamless Export Process" ,
    text: "Our team handles all the complexities of international trade, allowing you to focus on your core business."  ,
    iconSrc:shipIcon ,
  },
  {
    id: 6,
    title: "Transparent Communication",
    text:  "We keep you informed throughout the export process, from order confirmation to delivery.",
    iconSrc:shipIcon ,
  },

  {
    id: 6,
    title: "Cost-Effective Solutions",
    text:  "We leverage our expertise to ensure you receive the best value for your export needs.",
    iconSrc:shipIcon ,
  },
]
const ExportServices = () => {
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
        United Marine Engineering & Electrical Works: Your Trusted Partner for Streamlined Ship Parts & Equipment Export

        </h1>
        <h2 className="text-2xl :text-4xl font-semibold mb-4">
        Navigate International Trade with Confidence

        </h2>
        <p className=" mb-8">
        At United Marine Engineering & Electrical Works, we're not just experts in keeping your vessel operational – we're also here to facilitate your international trade needs.  Our export product service simplifies the process of acquiring and delivering essential ship spare parts, equipment, and machinery globally.

        </p>
        <h3 className="text-xl md:text-3xl font-semibold mb-4">
        Exporting Ship Essentials: Our Expertise
        </h3>
        <p>
        We understand the complexities of international trade.  Our export services ensure a smooth and efficient process for acquiring and delivering the following ship-related products:

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
      Beyond Products: Streamlined Export Services
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
        Expand Your Reach with Confidence
        </h3>
        <p className="text-lg">
        United Marine Engineering & Electrical Works is your one-stop shop for all your ship spare parts, equipment, and machinery export needs.  With our extensive expertise, global network, and commitment to efficient service, we empower you to navigate international trade with confidence.
        </p>
      </div>
    </section>
    {/*  */}
    <ModularContent
      description={
    "Contact United Marine Engineering & Electrical Works today to discuss your export requirements and request a free quote!"
      }
    />
  </>
  )
}

export default ExportServices