import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/404.webp";
const NoResults = () => {
  return (
    <div className="mx-4 grid justify-items-center place-content-center h-screen ">
      <img src={image} width={300} alt="404 error image" />
      <NavLink to="/">
        <button className="bg- px-20 border-2  font1 mt-12 text-[1.2rem] rounded-sm ">
          Go Back To Home
        </button>
      </NavLink>
    </div>
  );
};

export default NoResults;
