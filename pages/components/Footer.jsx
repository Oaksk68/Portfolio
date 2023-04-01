import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-slate-700 shadow dark:bg-gray-900">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="block my-10 md:mb-5">
            <Link
              activeClass="active"
              smooth
              spy
              to="home"
              className="flex items-center mb-4 sm:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-burtons cursor-pointer dark:text-white">
                Oaksk
              </h1>
            </Link>
          </div>
          <div className="block my-10">
            <div className="flex items-start md:items-center md:justify-center md:ml-20 dark:text-teal-600">
              <a href="https://www.facebook.com/oaksoekhant68/" target="_blank">
                <AiFillFacebook className="text-center mr-4 text-3xl hover:text-slate-400 cursor-pointer transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/_oaksk/" target="_blank">
                <AiFillInstagram className="text-center mr-4 text-3xl hover:text-slate-400 cursor-pointer transition-all duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/oak-soe-khant-278475203/"
                target="_blank"
              >
                <AiFillLinkedin className="text-center mr-4 text-3xl hover:text-slate-400 cursor-pointer transition-all duration-300" />
              </a>
              <a href="https://github.com/Oaksk6820" target="_blank">
                <AiFillGithub className="text-center mr-4 text-3xl hover:text-slate-400 cursor-pointer transition-all duration-300" />
              </a>
            </div>
          </div>

          <div className="dark:text-white">
            <ul className="flex flex-wrap items-center relative mb-6 text-sm font-bold  sm:mb-0">
              <li className="cursor-pointer mr-5  hover:text-slate-500 transition-all duration-300">
                <Link activeClass="active" smooth spy offset={-100} to="about">
                  About
                </Link>
              </li>

              <li className="cursor-pointer mr-5  hover:text-slate-500 transition-all duration-300">
                <Link activeClass="active" smooth spy offset={100} to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center items-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="" className="hover:underline">
              Oaksk
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
