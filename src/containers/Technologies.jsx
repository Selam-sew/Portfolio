import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import material from "../assets/material.png";
const images = [
  html,
  css,
  javascript,
  react,
  redux,
  tailwind,
  typescript,
  material,
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="mx-8 border-t-2  pt-4 border-[#2F9CCB]  text-center mt-[5rem] md:mt-[10rem]"
    >
      <h1 className="font3  text-[2rem] ">Technologies</h1>
      <p className="font2">
        I've worked with a range of technologies in the Front-End  world.
      </p>

      <div className="grid gap-2 items-center mt-4 grid-cols-4 sm:grid-cols-8">
        {images.map((item) => (
          <img src={item} width={150} alt="" />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
