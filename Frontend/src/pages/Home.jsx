import React from "react";
import Background from "../assets/images/slider.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {

    return (
        <div>
            <div className="absolute flex flex-col gap-12 justify-center my-28 mx-16 te text-4xl font-bold text-blue-500">
                <div>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(
                                    "Welcom Back!! 🖐 <br/> <br/> Becoming a CRÉDIT DU MAROC, <br/> customer in all simplicity."
                                )
                                .pauseFor(2500)
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="">
                <img src={Background} alt="img" />
            </div>
        </div>
    );
};

export default Home;
