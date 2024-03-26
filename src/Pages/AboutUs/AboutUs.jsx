import React from "react";
import LeaderCard from "./LeaderCard";
import Card from "@/components/Shared/Card";
import shipIcon from "@/assets/icons/ship.png";
import ModularContent from "@/components/Shared/ModularContent";

const leaders = [
  {
    name: "Alice Smith",
    position: "Shipping Coordinator",
    img: "https://i.ibb.co/LPX26fq/image-77-1.png",
  },
  {
    name: "Bob Johnson",
    position: "Customer Support Specialist",
    img: "https://i.ibb.co/Y81Hb4h/image-77-2.png",
  },
  {
    name: "Eva Garcia",
    position: "Warehouse Manager",
    img: "https://i.ibb.co/nkDHx7z/image-77.png",
  },
  {
    name: "Michael Brown",
    position: "Delivery Driver",
    img: "https://i.ibb.co/ysJPK28/image-77-4.png",
  },
  {
    name: "Sophia Lee",
    position: "Logistics Coordinator",
    img: "https://i.ibb.co/JBygMDq/image-77-3.png",
  },
];

const works = [
  {
    title: "Leadership",
    text: "Our seasoned management team provides strategic direction and ensures exceptional client service.",
    iconSrc: shipIcon,
  },
  {
    title: "Ship Chandlery",
    text: "A dedicated team oversees the procurement and timely delivery of essential ship supplies, ensuring you have everything you need, when you need it.",
    iconSrc: shipIcon,
  },
  {
    title: "Ship Repair",
    text: "Our skilled technicians are experts in all aspects of mechanical and electrical repairs, meticulously ensuring your vessel meets all safety regulations.",
    iconSrc: shipIcon,
  },
  {
    title: "Ship Supply",
    text: "This team offers a one-stop solution for all your ship supply requirements, including equipment and efficient logistics services, streamlining your operations.",
    iconSrc: shipIcon,
  },
  {
    title: "Export Products",
    text: "Leveraging our global network, our export specialists help you explore and fulfill your export needs seamlessly.",
    iconSrc: shipIcon,
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        {/* Top */}
        <section className="md:block flex flex-col-reverse items-center text-lg my-10">
          <img
            className="md:ml-4 md:float-right w-[380px] mt-8 md:mt-0"
            src="https://i.ibb.co/JBygMDq/image-77-3.png"
            alt="man"
          />
          <div>
            <p className="text-5xl font-bold mb-10 leading-snug">
              United Marine Engineering & Electrical: Your Trusted Partner for a
              Successful Voyage (Established 2005)
            </p>
            <p className=" ">
              Welcome aboard United Marine Engineering & Electrical Works! Since
              2005, we've navigated the ever-changing seas of the maritime
              industry, providing a comprehensive suite of services designed to
              keep your vessel operational and thriving. <br />
              At United Marine Engineering & Electrical Works, our guiding
              principle is unwavering commitment to excellence. We've assembled
              a team of highly skilled and experienced professionals, each
              driven by a shared passion: exceeding client expectations and
              ensuring the safety and success of every voyage you undertake. We
              are relentless innovators, constantly expanding our services to
              meet the evolving needs of the maritime landscape. <br />
              We believe in fostering strong, collaborative partnerships with
              our clients. Whether you require reliable ship chandlery, expert
              repairs, efficient supply solutions, or seamless export product
              services, United Marine Engineering & Electrical Works is your
              one-stop shop, dedicated to providing personalized service,
              transparent communication, and cost-effective solutions. <br />
              Thank you for considering United Marine Engineering & Electrical
              Works. We are eager to partner with you and contribute to your
              maritime endeavors.
            </p>
            <p className="font-bold">
              Sincerely, <br />
              [Chairman Name], <br />
              Chairman of the Board
            </p>
          </div>
        </section>
        {/* Meet our team leader */}
        <section className="max-w-7xl mx-auto mb-32">
          <p className="text-5xl text-center my-14 font-bold">
            Meet Our Team Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-16">
            {leaders.map((person) => (
              <LeaderCard key={person.name} person={person} />
            ))}
          </div>
        </section>
        {/* Works */}
        <section className="mb-28">
          <p className="text-5xl text-center my-14 font-bold md:w-[70%] leading-tight mx-auto">
            United Marine Engineering & Electrical Works: A Symphony of
            Expertise
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {works.map((work) => (
              <Card data={work} />
            ))}
          </div>
        </section>
        {/* Bottom */}
      </div>
      <section>
        <ModularContent
          description={
            "Ready to experience the United Marine Engineering & Electrical Works difference? Contact us today and let our experts chart a course for your success!"
          }
        />
      </section>
    </>
  );
};

export default AboutUs;
