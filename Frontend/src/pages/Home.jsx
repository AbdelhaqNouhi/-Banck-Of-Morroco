import React from "react";
import Background from "../assets/images/img/slider.jpg";
import Typewriter from "typewriter-effect";
import PrimaryButton from "../layouts/Button/PrimaryButton";
import HowWork from "../components/Home/HowWork";
import Students from '../components/Home/Students'
import Salaries from "../components/Home/Salaries";

import { useState } from "react";

const Home = () => {
    const [title, setTitle] = useState('OPEN MY ACCOUNT');


    return (
        <div>
            <div>
                <div className="absolute flex flex-col gap-12 justify-center my-28 mx-16 te text-4xl font-bold dark:text-gray-900">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(
                                    "Welcom Back!! 🖐"
                                )
                                .pauseFor(2500)
                                .start();
                        }}
                    />
                    <div>
                        <div className="flex gap-4">
                            <h1>Becoming a</h1>
                            <h1 className="text-blue-500">CRÉDIT DU MAROC,</h1>
                        </div>
                        <h1>Customer in all simplicity.</h1>
                    </div>
                    <div className=''>
                        <PrimaryButton title={ title } />
                    </div>
                </div>
                <div className="">
                    <img src={Background} alt="img" />
                </div>
            <HowWork />
            </div>
            <Students />
            <Salaries />
        </div>
    );
};

export default Home;
