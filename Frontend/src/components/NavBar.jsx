import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white font-bold py-2 px-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-xl">
                    My App
                </Link>
                <div>
                    <a
                        role="button"
                        className={`${isOpen ? "block" : "hidden"} md:hidden`}
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </a>
                    <ul
                        className={`${
                            isOpen ? "block" : "hidden"
                        } md:flex md:items-center md:w-full`}
                    >
                        <li className="md:ml-4">
                            <Link
                                to="/about"
                                className="inline-block py-2 px-4 text-white font-bold"
                                onClick={toggleMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className="md:ml-4">
                            <Link
                                to="/contact"
                                className="inline-block py-2 px-4 text-white font-bold"
                                onClick={toggleMenu}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="md:ml-4">
                            <Link
                                to="/login"
                                className="inline-block py-2 px-4 text-white font-bold"
                                onClick={toggleMenu}
                            >
                                Log In
                            </Link>
                        </li>
                        <li className="md:ml-4">
                            <Link
                                to="/signup"
                                className="inline-block py-2 px-4 text-white font-bold"
                                onClick={toggleMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
