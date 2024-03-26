import React from "react";
<<<<<<< HEAD
import Banner from "./Banner";
import ModularContent from "@/components/ModularContent";
import OurCommitment from "./OurCommitment";
import OurServices from "./OurServices";
=======
import Banner from "./Banner/Banner";
import ModularContent from "@/components/Shared/ModularContent";
>>>>>>> db1fa9588c5b05239137300dfac2738c6427b56f

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
<<<<<<< HEAD
      {/* ***** Dynamic section ***** */}
=======
>>>>>>> db1fa9588c5b05239137300dfac2738c6427b56f
      <ModularContent {...props} />
    </>
  );
};

export default Home;
