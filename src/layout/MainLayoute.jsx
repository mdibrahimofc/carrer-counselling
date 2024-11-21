import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayoute = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
            <Navbar></Navbar>
            </div>
            <div className='my-20 w-11/12 mx-auto'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayoute;