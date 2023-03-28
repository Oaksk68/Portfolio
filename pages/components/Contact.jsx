import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vp52ozd",
        "template_9kxdktr",
        form.current,
        "3OU6oGi_6abpZAwet"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div className="pl-20 pt-40 flex justify-center align-center">
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="mb-5 text-3xl text-teal-600 text-center">
            Connect with me
          </h1>
          <label className="relative block dark:text-gray-500">Name</label>
          <input
            className="mb-5  placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Name"
            type="text"
            name="user_name"
          />
          <label className="relative block dark:text-gray-500">Email</label>
          <input
            className="mb-5  placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Email"
            type="email"
            name="user_email"
          />
          <label className="relative block dark:text-gray-500">Message</label>
          <textarea
            rows="6"
            className="w-full resize-none placeholder:text-slate-400 mb-5 block bg-white border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Message"
            name="message"
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-800 transition-all duration-500 text-white font-bold py-2 px-4 rounded pl-8 relative mb-10"
          >
            <FaPaperPlane className="absolute top-3 left-3" />
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
