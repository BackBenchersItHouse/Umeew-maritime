import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/components/Shared/NavBar/NavBar";
import Footer from "@/components/Shared/Footer";

const Main = () => {
  const [navBg, setNavBg] = useState(false);
  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", changeNavBg);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <>
      <header
        onScroll={changeNavBg}
        className={` ${
          navBg ? "bg-primary/90 backdrop-blur-3xl drop-shadow-2xl" : "bg-primary"
        } duration-300 sticky top-0 z-50 border-b border-neutral/20 px-5 md:px-2`}
      >
        <NavBar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
