import React from "react";
import BackgroundAnimation from "../components/Animation";
import { HashLink } from "react-router-hash-link";
const HeroSection = () => {
  return (
    <div className="mt-12 grid sm:grid-cols-2 md:items-center text-center mx-4">
      <div className=" sm:text-left">
        <h4 className="">I am Selamsew Teshome</h4>
        <h1 className="font1   text-[2rem] xl:text-[3rem]  ">
          Front-End Developer Crafting Pixel-Perfect, User-Centric Experiences.{" "}
        </h1>
        <p className="md:text-[1.2rem]"></p>
        <HashLink to='#projects'>
          <button className="px-8 md:px-16 md:py-4 py-2 md:text-[1.2rem] rounded-md mt-8 button">
            Explore My Work
          </button>
        </HashLink>
      </div>

      <div className="hidden  sm:inline-block ">
        <BackgroundAnimation />
      </div>
    </div>
  );
};

export default HeroSection;
