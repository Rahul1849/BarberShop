import React, { useEffect } from "react";
import contactimg from "../assets/images/contactimg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="contact"
      className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-start"
    >
      <div
        data-aos="zoom-in"
        id="img-box"
        className="w=full bg-cover bg-center h-[700px]"
        style={{ backgroundImage: `url(${contactimg})` }}
      ></div>

      <div
        id="form-box"
        className="bg-gray-900 p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px]"
      >
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-white text-6xl font-bold text-center"
        >
          Contact Us
        </h1>
        <div
          data-aos="zoom-out"
          data-aos-delay="400"
          id="form"
          className="w-full flex flex-col justify-center items-center gap-4"
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 text-black text-black font-semibold text-center"
          />
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="w-full p-3 text-black text-black font-semibold text-center"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 text-black text-black font-semibold text-center"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Enter your message here..."
            className="w-full p-3  text-black font-semibold text-center"
          ></textarea>
          <input
            type="submit"
            value="SUBMIT"
            className="bg-themeyellow hover:bg-[#92843b] cursor-pointer w-40 font-semibold text-lg text-black p-3 rounded-xl border-2 "
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
