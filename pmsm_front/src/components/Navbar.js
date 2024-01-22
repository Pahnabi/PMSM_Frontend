import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
        closeMobileMenu();
    };

    return (
        <div className="fixed top-0 left-0 right-0 p-4 z-50 bg-gray-500 opacity-75">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-6xl font-semibold font-serif text-red-700 cursor-pointer" onClick={scrollToTop}>
                    <h1>Title</h1>
                </div>
                <div className="hidden lg:flex space-x-7 text-3xl font-mono font-bold text-black">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="hover:text-red-700 cursor-pointer hover:underline"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="hover:text-red-700 cursor-pointer hover:underline"
                    >
                        About
                    </Link>
                    <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="hover:text-red-700 cursor-pointer hover:underline"
                    >
                        Services
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="hover:text-red-700 cursor-pointer hover:underline"
                    >
                        Contact
                    </Link>
                    <Link
                        to="login"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="hover:text-red-700 cursor-pointer hover:underline"
                    >
                        Login
                    </Link>
                </div>
                <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </div>
                {isMobileMenuOpen && (
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg">
                            <div className="text-3xl font-mono font-bold text-black mb-8">
                                <div className="cursor-pointer" onClick={closeMobileMenu}>
                                    <svg
                                        className="h-6 w-6 float-right"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </div>
                                Menu
                            </div>
                            <div className="flex flex-col space-y-4 text-2xl">
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="hover:text-red-700 cursor-pointer hover:underline"
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="hover:text-red-700 cursor-pointer hover:underline"
                                    onClick={closeMobileMenu}
                                >
                                    About
                                </Link>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="hover:text-red-700 cursor-pointer hover:underline"
                                    onClick={closeMobileMenu}
                                >
                                    Contact
                                </Link>
                                <Link
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="hover:text-red-700 cursor-pointer hover:underline"
                                    onClick={closeMobileMenu}
                                >
                                    Services
                                </Link>
                                <Link
                                    to="login"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="hover:text-red-700 cursor-pointer hover:underline"
                                    onClick={closeMobileMenu}
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
