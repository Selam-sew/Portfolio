import React from "react";
import check from "../assets/check.png";

const attributes = [
  {
    content:"In this day and age a website only isn't enough so I will build you not just pixel perfect website but high performance website too.",
  },
  {
    content:
      "I'm not satisfied until your website delivers measurable outcomes for your business.",
  },
  {
    content:"   I prioritize understanding your goals and tailoring solutions that exceed expectations.",
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
