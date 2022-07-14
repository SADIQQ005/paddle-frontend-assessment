import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Jumbo from "../components/about/jumbo";
import SectionOne from "../components/about/SectionOne";
import SectionTwo from "../components/about/SectionTwo";
import SectionThree from "../components/about/SectionThree";

function aboutUs() {
  return (
    <>
      <div className="bg-[#160133] h-full text-white overflow-hidden xl:mx-24 relative">
        <Header />
        <div>
          <Jumbo />

          <SectionOne />

          <SectionTwo />

          <SectionThree />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default aboutUs;
