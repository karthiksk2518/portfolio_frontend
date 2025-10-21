import React from 'react';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import { useDarkMode } from '../contexts/DarkModeContext';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className="lg:sticky lg:top-0">
            <nav className='flex justify-between mx-6 lg:mx-16 mt-4'>
                <div className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300'>
                    KUNDAN PATIDAR
                </div>
                <button
                    onClick={toggleDarkMode}
                    className='mt-0 md:mt-0.5 lg:mt-1 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl bg-[#EBF2FA] dark:bg-gray-700 text-gray-900 dark:text-white w-8 lg:w-10 h-8 lg:h-10 rounded-full shadow-md shadow-black dark:shadow-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300'
                >
                    {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
                </button>
            </nav>
            <div className='h-6 bg-[#F2F5F9] dark:bg-gray-800 transition-colors duration-300'></div>
        </div>
    );
}

export default Navbar;
