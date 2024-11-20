import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayoute = () => {
    return (
        <div>
            <Navbar/>
            <div className='my-20 w-11/12 mx-auto'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayoute;