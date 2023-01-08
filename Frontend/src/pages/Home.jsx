import React from "react";
import Background from "../assets/images/slider.jpg";
import Typewriter from "typewriter-effect";
import PrimaryButton from "../layouts/Button/PrimaryButton";
import { useState } from "react";

const Home = () => {
    const [title, setTitle] = useState('OPEN MY ACCOUNT');


    return (
        <div>
            <div className="absolute flex flex-col gap-12 justify-center my-28 mx-16 te text-4xl font-bold text-blue-500">
                {/* <div> */}
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
                    <div className="relative flex flex-col gap-12">
                        <h1>Becoming a CRÉDIT DU MAROC, <br/> customer in all simplicity.</h1>
                        <PrimaryButton title={ title } />
                    </div>
                {/* </div> */}
            </div>
            <div className="">
                <img src={Background} alt="img" />
            </div>
        </div>
    );
};

export default Home;
