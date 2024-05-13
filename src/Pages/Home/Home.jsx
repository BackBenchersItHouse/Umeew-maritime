import React from "react";
import Banner from "./Banner";
import ModularContent from "@/components/ModularContent";
import OurCommitment from "./OurCommitment";
import OurServices from "./OurServices";
import Title from "@/components/Title";

const Home = () => {
  const props = {
    btn: "Contact Our Team",
  };
  return (
    <>
      <Title title={" "}/>
      
      <Banner />
      <main className="max-w-[1170px] mx-auto px-5 md:px-2">
        {/* Children Width 1170px  */}
        <OurCommitment />
        <OurServices />
      </main>
      {/* ***** Dynamic section ***** */}
      <ModularContent {...props} />
    </>
  );
};

export default Home;
