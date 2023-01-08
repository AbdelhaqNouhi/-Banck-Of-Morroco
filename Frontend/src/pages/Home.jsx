import React from "react";
import Background from "../assets/images/slider.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div>
            <div className="absolute flex justify-center my-28 mx-16 te text-4xl text-bold">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Welcom Back!! 🖐 <br/> <br/> Becoming a CRÉDIT DU MAROC, <br/> customer in all simplicity.")
                            .pauseFor(2500)
                            .start();
                    }}
                />
            </div>
            <div className="">
                <img src={Background} alt="img" />
            </div>
        </div>
    );
};

export default Home;
