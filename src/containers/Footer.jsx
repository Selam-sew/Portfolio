import React from "react";
import github from "../assets/github.png";
import { NavLink } from "react-router-dom";
import phone from "../assets/phone.png";
const Footer = () => {
  return (
    <footer>
      <ul className="border-t-2 text-center pb-8 pt-4 flex md:flex-row flex-col items-center  justify-center gap-4 md:justify-between border-[#2F9CCB] mt-[5rem] md:mt-[10rem] mx-8">
        <li>Innovating one project at a time.</li>
        <li>
                    <p>SelamsewTeshome17@gmail.com</p>
</li>
        <li>
          <div className="flex gap-4">
            {" "}
            <NavLink to="https://github.com/Selam-sew">
              <img
                src={github}
                width={25}
                className="bg-white rounded-full "
                alt="github-icon"
              />
            </NavLink>{" "}
            <p>0994085049</p>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
