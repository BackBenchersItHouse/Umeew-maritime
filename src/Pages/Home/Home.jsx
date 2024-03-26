import React from "react";
import Banner from "./Banner";
import ModularContent from "@/Components/ModularContent";
import OurCommitment from "./OurCommitment";
import OurServices from "./OurServices";

const Home = () => {
  const props = {
    btn: "Contact Our Team",
  };
  return (
    <>
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
