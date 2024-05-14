import React from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import WhyChoose from "./sections/WhyChoose";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Testimonial from "./sections/Testimonial";
import Footer from "./components/Footer";
import Contacts from "./sections/Contacts";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <Pricing />
      <Services />
      <Gallery />
      <Testimonial />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
