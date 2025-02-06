import React, { useState } from 'react';
import Brandlogo from './Brandlogo';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='flex flex-row justify-between items-center p-4 font-bold text-gray-500 mx-3 2xl:text-2xl'>
                <div onClick={() => navigate("/")}><Brandlogo /></div>
                <div className='hidden lg:flex space-x-8 items-center'>
                    <a href="#home" className='text-gray-700 hover:text-gray-900'>Home</a>
                    <a href="#about" className='text-gray-700 hover:text-gray-900'>About</a>
                    <a href="#jobs" className='text-gray-700 hover:text-gray-900'>Jobs</a>
                    <a href="#services" className='text-gray-700 hover:text-gray-900'>Services</a>
                    <a href="#contact" className='text-gray-700 hover:text-gray-900'>Contact Us</a>
                    <button className='bg-white px-4 py-2 text-black rounded border border-black'>Login</button>
                    <button className='bg-purple-800 text-white px-4 py-2 rounded'>Register</button>
                </div>
                <div className='lg:hidden'>
                    <button onClick={toggleMenu} className='text-gray-700 focus:outline-none'>
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='lg:hidden flex flex-col space-y-2 p-4 bg-white shadow-md transition-transform duration-200'>
                    <a href="#home" className='text-gray-700 hover:text-gray-900'>Home</a>
                    <a href="#about" className='text-gray-700 hover:text-gray-900'>About</a>
                    <a href="#jobs" className='text-gray-700 hover:text-gray-900'>Jobs</a>
                    <a href="#services" className='text-gray-700 hover:text-gray-900'>Services</a>
                    <a href="#contact" className='text-gray-700 hover:text-gray-900'>Contact Us</a>
                    <button className='bg-white-500 px-4 py-2 rounded-xl border border-black'>Login</button>
                    <button className='bg-purple-500 text-white px-4 py-2 rounded-xl'>Register</button>
                </div>
            )}
        </>
    );
};

export default NavBar;