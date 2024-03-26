import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/components/Shared/NavBar/NavBar";
import Footer from "@/components/Shared/Footer";

const Main = () => {
  return (
    <>
      <header className="bg-primary sticky top-0 z-50 backdrop-blur-3xl border-b border-neutral/20 px-5 md:px-2">
        <NavBar />
      </header>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Main;
