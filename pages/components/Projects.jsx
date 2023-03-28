import React from "react";
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import { AiFillGithub } from "react-icons/ai";
import MovieApp from "../../public/MovieApp.png";

const Projects = () => {
  return (
    <section id="projects" className="w-fit mx-auto">
      <div>
        <h1 className="text-teal-600 text-center font-bold text-3xl">
          My Projects
        </h1>
      </div>
      <div className="h-fit flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="relative cursor-pointer overflow-hidden basis-1/3 flex-1 transition-all duration-300 ease-in-out hover:scale-110">
          <Image
            src={MovieApp}
            className="rounded-lg object-fill h-full w-full"
            alt="Not Found"
          />
          <div className="flex justify-center items-center absolute h-full w-full transition-all duration-700 bg-black/60 rounded-lg item-center -bottom-0 hover:bottom-0 opacity-0 hover:opacity-100">
            <a href="#" className="py-2 px-5 text-white text-5xl ">
              <AiFillGithub className="border-2 border-gray-200 rounded-full transition-all duration-300 ease-in-out hover:scale-110" />
            </a>
            <h2 className="text-xl capitalize text-white">Movie Project</h2>
          </div>
        </div>
        <div className="relative cursor-pointer overflow-hidden basis-1/3 flex-1 transition-all duration-300 ease-in-out hover:scale-110">
          <Image
            src={web2}
            className="rounded-lg object-cover"
            alt="Not Found"
          />
          <div className="flex justify-center items-center absolute h-full w-full transition-all duration-700 bg-black/60 rounded-lg item-center -bottom-0 hover:bottom-0 opacity-0 hover:opacity-100">
            <a href="#" className="py-2 px-5 text-white text-5xl ">
              <AiFillGithub className="border-2 border-gray-200 rounded-full transition-all duration-300 ease-in-out hover:scale-110" />
            </a>
            <h2 className="text-xl capitalize text-white">Coming Soon...</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
