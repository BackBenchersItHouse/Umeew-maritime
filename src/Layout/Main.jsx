import Footer from "@/Components/Shared/Footer";
import NavBar_V2 from "@/Components/Shared/NavBar_V2";
import React from "react";
import { Outlet } from "react-router-dom";
// import NavBar from "@/components/Shared/NavBar"import Footer from "@/Components/Shared/Footer";

const Main = () => {
  return (
    <>
      {/* <NavBar /> */}
      <header className="bg-primary sticky top-0 z-50 border-b border-neutral/20 px-5 md:px-0">
        <NavBar_V2 />
      </header>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Main;
