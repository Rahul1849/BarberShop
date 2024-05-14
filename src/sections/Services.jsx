import React, { useEffect } from "react";
import serviceimg from "../assets/images/servicimg.jpg";
import service1 from "../assets/images/ser1.png";
import service2 from "../assets/images/ser2.png";
import service3 from "../assets/images/ser3.png";
import service4 from "../assets/images/ser4.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
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
      id="services"
      className="w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center items-center gap-16 bg-gray-900"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h1
          data-aos="zoom-in"
          className="text-6xl text-white font-bold text-center"
        >
          Barbershop Services
        </h1>

        <p data-aos="zoom-in" className="text-xl text-slate-200 text-center">
          From precision haircuts to luxurious beard trims, we provide top-notch
          grooming solutions tailored to your individual needs and preferences
        </p>
      </div>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
        <div id="image-box">
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            src={serviceimg}
            alt=""
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8">
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
          >
            <img
              src={service1}
              alt=""
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] font-bold">Haircuts</h1>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
          >
            <img
              src={service2}
              alt=""
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] font-bold">Beard Trims</h1>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
          >
            <img
              src={service3}
              alt=""
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] font-bold">Elysian Spa</h1>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
          >
            <img
              src={service4}
              alt=""
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] font-bold">Junior Jams</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
