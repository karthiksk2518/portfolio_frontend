import React, { useState } from 'react';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
        <div className="lg:sticky lg:top-0">
            <nav className='flex justify-between mx-6 lg:mx-16 mt-4'>
                <div className='text-3xl md:text-4xl lg:text-5xl font-bold'>KUNDAN PATIDAR</div>
                <button
                    onClick={toggleDarkMode}
                    className='mt-0 md:mt-0.5 lg:mt-1 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl bg-[#EBF2FA] w-8 lg:w-10 h-8 lg:h-10 rounded-full shadow-md shadow-black'
                >
                    {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
                </button>
            </nav>
            <div className='h-6 bg-[#F2F5F9]'></div>
        </div>
    );
}

export default Navbar;
