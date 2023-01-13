import React from 'react'
import { cities } from 'list-of-moroccan-cities'
import Select from "react-select";
import { Link, NavLink } from "react-router-dom"; 
import { useLottie } from "lottie-react";
import lottie from '../assets/lottie/registered.json';
import { useState, useRef } from "react";

const SignUp = () => {

    const options = [
        { value: 'Agadir', label: 'Agadir' },
        { value: 'Casablanca', label: 'Casablanca' },
        { value: 'Fes', label: 'Fes' },
        { value: 'Marrakech', label: 'Marrakech' },
        { value: 'Rabat', label: 'Rabat' },
        { value: 'Tanger', label: 'Tanger' },
        { value: 'Tetouan', label: 'Tetouan' },
        { value: 'Oujda', label: 'Oujda' },
        { value: 'Kenitra', label: 'Kenitra' },
        { value: 'Safi', label: 'Safi' },
        { value: 'Meknes', label: 'Meknes' },
        { value: 'El Jadida', label: 'El Jadida' },
        { value: 'Nador', label: 'Nador' },
        { value: 'Khouribga', label: 'Khouribga' },
        { value: 'Taza', label: 'Taza' },
    ];

    return (
        <div>
            <div className=" flex justify-center items-center m-">
                <div className="md:w-3/4 w-screen md:px-16 flex rounded-2xl shadow-lg max-w-3/1 items-center p-4">
                    <div className="md:w-4/5 w-screen px-16">
                        <h2 className="font-bold text-2xl text-blue-500">Sign Up!</h2>
                        <p className="text-sm mt-4">
                            if you already a member, easily log in
                        </p>
                        <form action="" className="flex flex-col gap-2">
                            <div className='flex gap-8 mt-8'>
                                <input 
                                    type="text"
                                    name="fullname"
                                    placeholder="Full Name"
                                    className="p-2 rounded-xl border w-1/2"
                                />
                                <input 
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="p-2 rounded-xl border w-1/2"
                                />
                            </div>
                            <div className='flex gap-8'>
                                <input
                                    type="date"
                                    name="Birthday"
                                    placeholder="Birthday"
                                    className="p-2 mt-8 rounded-xl border w-1/2"
                                />
                                <input
                                    type="text"
                                    name="cin"
                                    placeholder="CIN"
                                    className="p-2 mt-8 rounded-xl border w-1/2"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    className="w-full p-2 mt-8 rounded-xl border"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    className="w-full p-2 mt-8 rounded-xl border"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <svg
                                    className="absolute top-1/2 right-3 translate-y-1/2"
                                    width="16px"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                                        stroke="gray"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                                        stroke="gray"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className='mt-8 flex flex-col gap-4'>
                                <label htmlFor="">Agency Selection*</label>
                                <Select 
                                    className="w-full rounded-xl"
                                    options={options}
                                    defaultOptions={options}
                                    isClearable={true}
                                    isSearchable={true}
                                    placeholder="Select Agency"
                                />
                            </div>

                            <button className="hover:scale-105 duration-300 bg-blue-500 text-white rounded-md py-2 mt-4">
                                Validate
                            </button>
                        </form>
                        <p className="mt-5 text-xs border-b border-gray-400 py-4"></p>
                        <div className="mt-3 text-xs flex justify-between items-center">
                            <p >Go To..</p>
                            <Link to="/SignIn"><button className="hover:scale-105 duration-300 py-2 px-5 bg-white hover:text-black border rounded-xl"> Login </button></Link>
                        </div>
                    </div>
                    {/* <div className="md:block hidden w-1/2">
                        {View}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SignUp