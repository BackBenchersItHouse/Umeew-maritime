import React from "react";
import CommitmentCard from "@/components/Cards/CommitmentCard";

import commitmentIcon from "@/assets/icons/ship.svg";

const OurCommitment = () => {
  const commitments = [
    {
      id: 1,
      icon: commitmentIcon,
      title: "Unparalleled Expertise",
      subTitle:
        "Our team of highly skilled and certified professionals possesses years of experience in all aspects of ship maintenance and repair",
    },
    {
      id: 2,
      icon: commitmentIcon,
      title: "Quality You Can Trust",
      subTitle:
        "We use only the finest parts and materials to ensure long-lasting repairs and optimal performance.",
    },
    {
      id: 3,
      icon: commitmentIcon,
      title: "Streamlined Efficiency",
      subTitle:
        "We prioritize clear communication and efficient service delivery to minimize downtime and keep your operations on schedule.",
    },
    {
      id: 4,
      icon: commitmentIcon,
      title: "Competitive Rates",
      subTitle:
        "We offer competitive pricing and transparent cost structures to fit your budget.",
    },
  ];

  return (
    <section className="my-[120px]">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-[60px]">
        Our Commitment <br /> to Your Success
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between justify-items-center gap-8">
        {commitments?.map((commitment) => (
          <div key={commitment.id}>
            <CommitmentCard {...commitment} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCommitment;