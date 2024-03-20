import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Shared/NavBar';
import Footer from '../components/Shared/Footer';

const Main = () => {
    return (
        <>
            {/* <NavBar></NavBar>
             */}
            <NavBar />
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;