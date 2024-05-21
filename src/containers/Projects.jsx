import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../constants/projects";
const Projects = () => {
  return (
    <div
      id="projects"
      className="mt-12 pt-4 mx-8 text-center border-t-2 border-[#2F9CCB] "
    >
      <h1 className="font3 text-[2rem]  ">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap-8 md:gap-[5rem] ">
          {projects.map((items) => (
            <ProjectsCard
              key={items.id}
              stack={items.stack}
              title={items.title}
              image={items.image}
              description={items.description}
              code={items.code}
              live={items.live}
            />
          ))}
        </div>
    </div>
  );
};

export default Projects;
