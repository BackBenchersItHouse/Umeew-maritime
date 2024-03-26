import React from "react";
import CommitmentCard from "@/Components/Cards/CommitmentCard";

import commitmentIcon from "@/assets/icons/ship.svg";

const OurCommitment = () => {
  const commitments = [
    {
      icon: commitmentIcon ,
      title: "Unparalleled Expertise",
      subTitle:
        "Our team of highly skilled and certified professionals possesses years of experience in all aspects of ship maintenance and repair",
    },
    {
      icon: commitmentIcon ,
      title: "Quality You Can Trust",
      subTitle:
        "We use only the finest parts and materials to ensure long-lasting repairs and optimal performance.",
    },
    {
      icon:  commitmentIcon ,
      title: "Streamlined Efficiency",
      subTitle:
        "We prioritize clear communication and efficient service delivery to minimize downtime and keep your operations on schedule.",
    },
    {
      icon:  commitmentIcon ,
      title: "Competitive Rates",
      subTitle:
        "We offer competitive pricing and transparent cost structures to fit your budget.",
    },
  ];

  return <CommitmentCard commitments={commitments} />;
};

export default OurCommitment;
