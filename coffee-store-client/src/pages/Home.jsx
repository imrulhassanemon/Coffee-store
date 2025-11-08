import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div className='grid'>
            <Navbar/>
            <div className='min-h-[calc(100vh-288px)] '>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;