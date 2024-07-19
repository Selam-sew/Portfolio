import React from "react";
import check from "../assets/check.png";

const attributes = [
  {
    content:"I've extensive experience with variety of front end technologies and I built different projects to solidify my knowledge.",
  },
  {
    content:
      "I focus on user experience by implementing intuitive navigation, fast load times, and visually appealing interfaces, ensuring users have a seamless and enjoyable interaction with the website.",
  },
  {
    content:" I have a proven track record of creating responsive websites that provide an optimal viewing experience across various devices, from desktops to mobile phones.",
  },
];
const About = () => {
  return (
    <section
      id="about"
      className=" mx-8 border-t-2 pt-4 border-[#2F9CCB]  text-center mt-[5rem] md:mt-[10rem]"
    >
      <h1 className="font3 text-[2rem] ">Why Choose Me</h1>
      <h4 className="font2">The difference I bring to your project</h4>
      <ol className="text-left  font2 mt-12">
        <li className="grid gap-12  md:grid-cols-3 text-center justify-spacearound">
       {attributes.map(content => (   
          
            <p className="bg-[#767373] p-4 rounded-sm">{content.content}</p>
          ))}
        </li>
      
      </ol>
    </section>
  );
};

export default About;
