import React from 'react';
import Sidebar from '../components/Sidebar';
import Content from './Content';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className='lg:h-screen flex flex-col'>
            <div className='sticky z-10'>
                <Navbar />
            </div>
            <div className='flex flex-col lg:flex-row gap-4 md:gap-6 overflow-hidden'>
                <div className='h-full'>
                    <Sidebar />
                </div>
                <div className='overflow-y-auto scrollbar-none'>
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default Home;