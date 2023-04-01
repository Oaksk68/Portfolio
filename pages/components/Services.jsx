import React from "react";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services">
      <div className="text-center">
        <h3 className="text-bold text-xl pl-1 mb-3 dark:text-white">
          Services
        </h3>
        <h2 className="font-semibold text-4xl text-teal-600">Skill-Set</h2>
      </div>
      <div className="m-5 md:flex gap-10">
        <div className="md:w-1/3 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
          <Image
            className="mx-auto"
            src={design}
            width={100}
            height={100}
            alt="Not Found"
          />
          <h3 className="text-lg font-bold pt-8 pb-2 dark:text-white">
            UI/UX Design
          </h3>
          <p className="py-2 dark:text-white">
            Creating elegant designs suited for your needs according to the
            design theory.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools that I use</h4>
          <p className="text-gray-500 py-1 dark:text-gray-400">Photoshop</p>
          <p className="text-gray-500 py-1 dark:text-gray-400">Illustrator</p>
          <p className="text-gray-500 py-1 dark:text-gray-400">Figma</p>
        </div>
        <div className="md:w-1/3 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
          <Image
            className="mx-auto"
            src={code}
            width={100}
            height={100}
            alt="Not Found"
          />
          <h3 className="text-lg font-bold pt-8 pb-2 dark:text-white">
            Web Design
          </h3>
          <p className="py-2 dark:text-white ">
            Creating the design and layout of a website or web pages for a brand
            new website or updating an already existing site.
          </p>
          <h4 className="py-4 text-teal-600">Languages that I use</h4>
          <p className="text-gray-500 py-1 dark:text-gray-400">HTML & CSS</p>
          <p className="text-gray-500 py-1 dark:text-gray-400">Bootstrap</p>
          <p className="text-gray-500 py-1 dark:text-gray-400">Tailwind</p>
          <p className="text-gray-500 py-1 dark:text-gray-400">Javascript</p>
          <p className="text-gray-500 py-1 dark:text-gray-400">React.js</p>
        </div>

        <div className="md:w-1/3 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
          <Image
            className="mx-auto"
            src={consulting}
            width={100}
            height={100}
            alt="Not Found"
          />
          <h3 className="text-lg font-bold pt-8 pb-2 dark:text-white">
            Quality Assurance
          </h3>
          <p className="py-2 dark:text-white">
            Detects and resolves bugs in an application program or product
            before it is released, working with developers to find solutions
            when required.
          </p>
          <h4 className="py-4 text-teal-600">Design Tool that I use</h4>
          <p className="text-gray-500 py-1 dark:text-gray-400">Selenium</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
