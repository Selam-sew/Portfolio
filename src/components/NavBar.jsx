import { useEffect, useRef, useState } from "react";
import hamburger from "../assets/hamburger.png";
import { HashLink } from "react-router-hash-link";
import github from "../assets/github.png";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const toggleRef = useRef(null);
  const [clicked, setclicked] = useState(false);
  const handleClick = () => {
    setclicked(!clicked);
  };

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setclicked(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return (
    <nav className="mt-2 border-b sm:text-[1rem] pb-1 flex justify-between mx-4">
      <h1 className="font1">Selamsew T. </h1>
      <ul className=" gap-4 hidden ssm:flex font2">
        <HashLink to="#projects">Projects</HashLink>
        <HashLink to="#technologies">Technologies</HashLink>
        <HashLink to="#about">About</HashLink>
      </ul>

      <div className="ssm:hidden ">
        <img
          src={hamburger}
          ref={toggleRef}
          className="cursor-pointer  "
          width={25}
          onClick={handleClick}
          alt="icon"
        />
        <ul
          className={`${
            clicked ? "flex" : "hidden"
          } mt-2 absolute rounded-sm px-2 py-1 bg-slate-600 right-4 gap-2   flex-col `}
        >
          <HashLink to="#projects">Projects</HashLink>
          <HashLink to="#technologies">Technologies</HashLink>
          <HashLink to="#about">About</HashLink>
        </ul>
      </div>
      <div className="hidden ssm:inline-block">
        <NavLink to="https://github.com/Selam-sew">
          <img
            src={github}
            width={25}
            className="bg-white rounded-full "
            alt="github-icon"
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
