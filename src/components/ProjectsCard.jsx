import React from "react";
import { NavLink } from "react-router-dom";
const ProjectsCard = ({ image, title, description, code, stack, live }) => {
  return (
    <div className="mt-12 lg:px-8 flex flex-col  justify-between shadow-white shadow-sm rounded-lg leading-7">
      <div className="">
        <img className="rounded-tl-md rounded-tr-md md:rounded-none" src={image} alt="project-image"   width={500}/>
        <h1 className="font1">{title}</h1>
        <p className="font2 px-2 sm:px-4">{description}</p>
        <p className="text-[#D8BFBF] ">{stack}</p>
      </div>
      <div className="flex   mb-4 mt-4 justify-around">
        <button className="bg-[#6B3030] font2 px-4 rounded-lg">
          <NavLink to={code}>Code</NavLink>
        </button>
        <button className="bg-[#6B3030] font2 rounded-lg px-4">
          <NavLink to={live}>live</NavLink>
        </button>
      </div>
    </div>
  );
};

export default ProjectsCard;
