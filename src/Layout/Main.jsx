import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './../Components/Shared/NavBar';
import Footer from './../Components/Shared/Footer';

const Main = () => {
  return (
    <>
      {/* <NavBar /> */}
      <header className="bg-primary sticky top-0 z-50 border-b border-silver/50">
        <NavBar_V2 />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
