import React from "react";
import oaksk2 from "../../public/Me.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <h3 className="text-3xl mb-16 md:mb-0 font-bold text-center text-teal-600">
        About Me
      </h3>
      <div className="block md:grid grid-cols-3 gap-3 mx-8 mb-20 md:mx-10 md:p-12">
        <div className="flex h-100 justify-center items-center">
          <Image
            src={oaksk2}
            className="rounded-full w-48 h-48 md:w-40 md:h-40 lg:w-80 lg:h-80 object-cover"
            alt="Not Found"
          />
        </div>
        <div className="col-span-2 shadow rounded-lg p-7">
          <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
            Passionate college student seeking for internship. Adapt in various
            social media platforms and office technology programs. Motivated
            student, eager to learn new experience from senior and to try new
            things. A creative thinker, adapt in software development and keen
            to experience real world jobs and how it operates.
          </p>
          <div className="md:grid grid-cols-2">
            <div>
              <h1 className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400 ">
                <span className="text-gray-800 dark:text-gray-300">
                  Name : {""}
                </span>
                Oak Soe Khant
              </h1>
              <h1 className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400 ">
                <span className="text-gray-800 dark:text-gray-300">
                  Phone : {""}
                </span>
                (+66) 96 307 0573
              </h1>
              <a
                href="https://drive.google.com/file/d/1BDTEwqjsCaNqRPFimTCe14WK5hrOYBVv/view?usp=share_link"
                target="_blank"
              ></a>
            </div>
            <div>
              <h1 className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400 ">
                <span className="text-gray-800 dark:text-gray-300">
                  Age : {""}
                </span>
                22 years
              </h1>
              <h1 className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400 ">
                <span className="text-gray-800 dark:text-gray-300">
                  Address : {""}
                </span>
                231 ม.2 ซ.5 ต.ท่าสุด <br /> อ.เมืองเชียงราย จ.เชียงราย 57100
              </h1>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1BDTEwqjsCaNqRPFimTCe14WK5hrOYBVv/view?usp=sharing"
            target="_blank"
          >
            <button className="bg-teal-600 hover:bg-teal-800 hover:text-gray-400 text-white font-bold py-3 px-4 rounded mt-5 transition-all duration-300 ">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
