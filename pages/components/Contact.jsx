import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FaPaperPlane } from "react-icons/fa";
import Validation from "./Validation";

const Contact = () => {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    password: "",
  });

  function handleInput(event) {
    const newObj = { ...values, [event.target.user_name]: event.target.value };
    setValues(newObj);
  }

  const form = useRef();
  const [errors, setErrors] = useState({});
  const sendEmail = (e) => {
    e.preventDefault();
    setErrors(Validation(values));

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
    e.target.reset();
  };
  return (
    <section id="contact" className="pb-20">
      <div className="md:pl-20 pt-40 flex justify-center align-center">
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="mb-5 text-3xl text-teal-600 text-center">
            Connect with me
          </h1>
          <label className="relative block dark:text-gray-500">Name</label>
          <input
            className="mb-5  placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            name="user_name"
            onChange={handleInput}
          />
          {errors.user_name && <p className="text-red-700">{errors.name}</p>}
          <label className="relative block dark:text-gray-500">Email</label>
          <input
            className="mb-5  placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="email"
            name="user_email"
          />
          {errors.user_email && <p className="text-red-700">{errors.email}</p>}
          <label className="relative block dark:text-gray-500">Subject</label>
          <input
            className="mb-5  placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            name="subject"
            onChange={handleInput}
          />
          <label className="relative block dark:text-gray-500">Message</label>
          <textarea
            rows="6"
            className="w-full resize-none placeholder:text-slate-400 mb-5 block bg-white border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            name="message"
            onChange={handleInput}
          />
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-800 transition-all duration-300 text-white font-bold py-3 px-4 rounded pl-8 relative mb-3"
          >
            <FaPaperPlane className="absolute top-4 left-30" />
            Send
          </button>
          <div className="hidden justify-center items-center">
            <div className="fixed top-2 bg-green-500 rounded-md">
              <p className="text-center text-white w-full px-10 py-3">
                Form Submit Successful!!!
              </p>
            </div>
          </div>
          <div className="hidden justify-center items-center">
            <div className="fixed top-2 bg-red-600 rounded-md">
              <p className="text-center text-white p-3">
                Please Fill all required fields.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
