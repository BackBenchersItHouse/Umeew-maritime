import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
