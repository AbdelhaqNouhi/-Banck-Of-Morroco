import React from 'react'
import { Link, NavLink } from "react-router-dom"; 
import { useLottie } from "lottie-react";
import lottie from '../assets/lottie/registered.json';
import { useState, useRef } from "react";

const SignUp = () => {
    const options = {
        animationData: lottie,
        loop: true
    };
    const { View } = useLottie(options);

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        cin: "",
        phone: "",
        email: "",
        password: "",
    });

    const Register = async (e) => {
        e.preventDefault();
        const register =  { first_name, last_name, cin, phone, email, password };

        await fetch("http://localhost:3000/Api/RegisterUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"
},
            body: JSON.stringify(register)
        })
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                console.log(data);
                alert("You are registered successfully");
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="md:w-3/2 w-screen md:px-16 flex rounded-2xl shadow-lg max-w-3/1 items-center p-4">
                    <div className="md:w-4/5 w-screen px-16">
                        <h2 className="font-bold text-2xl text-blue-500">Sign Up!</h2>
                        <p className="text-sm mt-4">
                            if you already a member, easily log in
                        </p>
                        <form onSubmit={ Register } className="flex flex-col gap-2">
                            <div className='flex gap-8 mt-8'>
                                <input 
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name"
                                    className="p-2 rounded-xl border w-1/2"
                                    value={data.first_name}
                                    onChange={(e) => setData({first_name: e.target.value })}
                                />
                                <input 
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    className="p-2 rounded-xl border w-1/2"
                                    value={data.last_name}
                                    onChange={(e) => setData({last_name: e.target.value})}
                                />
                            </div>
                            <div className='flex gap-8'>
                                <input
                                    type="text"
                                    name="cin"
                                    placeholder="CIN"
                                    className="p-2 mt-8 rounded-xl border w-1/2"
                                    value={data.cin}
                                    onChange={(e) => setData({cin: e.target.value})}
                                />
                                <input
                                    type="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    className="p-2 mt-8 rounded-xl border w-1/2"
                                    value={data.phone}
                                    onChange={(e) => setData({phone: e.target.value})}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    className="w-full p-2 mt-8 rounded-xl border"
                                    value={data.email}
                                    onChange={(e) => setData({email: e.target.value})}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full p-2 mt-8 rounded-xl border"
                                    value={data.password}
                                    onChange={(e) => setData({password: e.target.value})}
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
                    <div className="md:block hidden w-2/2">
                        {View}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp