import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './../Components/Shared/NavBar';
import Footer from './../Components/Shared/Footer';

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