import React from 'react'
import { Link, NavLink } from "react-router-dom";    
import linkedin from '../assets/icons/linkedin.png'
import facebook from '../assets/icons/facebook.png'
import twitter from '../assets/icons/twitter.png'
import instagram from '../assets/icons/instagram.png'


const Footer = () => {
    return (
        <div className='md:px-16 sm:px-10 mx-auto dark:bg-gray-900  text-white py-5  bottom-0 flex md:justify-between flex-col gap-6 md:flex-row items-center'>
            <div className='text-white flex md:flex-col md:gap-2 gap-16 items-center'>
                <h1 className='text-3xl'>Morroco</h1>
                <p>&copy; anouhi footer</p>
            </div>

            <div className='flex gap-12'>
                <NavLink 
                    to={"/"} 
                    className={({ isActive }) => (isActive ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue- hover:text-primary md:p-0 dark:text-white' : 'block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent')} >
                    Home
                </NavLink>
                <NavLink 
                    to={"/About"} 
                    className={({ isActive }) => (isActive ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue- hover:text-primary md:p-0 dark:text-white' : 'block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent')} >
                    About Us
                </NavLink>
                <NavLink 
                    to={"/Contact"} 
                    className={({ isActive }) => (isActive ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue- hover:text-primary md:p-0 dark:text-white' : 'block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent')} >
                    Contact
                </NavLink>
            </div>

            <div className='flex gap-12 md:gap-4'>
                <img className='w-6 h-6' src={ linkedin } alt="linkedin"></img>
                <img className='w-6 h-6' src={ instagram } alt="instagram"></img>
                <img className='w-6 h-6' src={ facebook } alt="facebook"></img>
                <img className='w-6 h-6' src={ twitter } alt="twitter"></img>
            </div>
        </div>
    )
}

export default Footer