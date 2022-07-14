import React from "react";

export default function SectionTwo() {
  return (
    <div className="xl:flex justify-between lg:pt-12 pb-28">
      <div className="lg:flex-auto lg:w-[50%] pl-36 pl-20">
        <div className="flex">
          <p className="border-b-2 border-white w-16 pl-4">01</p>
          <p className="text-[13px] uppercase pt-4 pl-3">why us?</p>
        </div>
        <p className="text-[16px] font-light my-16 mr-20 leading-6 tracking-wide">
          We pride ourselves in our ability to innovate and create world class
          tools that provides relaible and efficient touchpoints between
          advertisers and affilaites
        </p>
      </div>

      <div className="lg:flex-auto w-screen lg:w-[50%] bg-[#311254] lg:h-[450px] w-[250px] px-16 pt-16 pb-12">
        <div className="flex">
          <p className="border-b-2 border-white w-16 pl-4">02</p>
          <p className="text-[13px] uppercase pt-4 pl-3">growing with you</p>
        </div>
        <p className="text-[16px] font-light my-8 mr-20 leading-6 tracking-wide">
          Leveraging the best technology, we have developed all-in-one
          affilaiate marketting tracking software, a genuis tool to help you
          track, automate and optimize your influencer campaigns, all from one
          dashboard.
        </p>
        <p className="text-[16px] font-light mt-8 mr-20 leading-6 tracking-wide">
          Our team of experts are contantly brainstorming, testing and
          developing new solutions with only one thing in mind - your business
          growth. Your success is our success and by giving you the tool you
          need to scale, we grow as well.
        </p>
      </div>
    </div>
  );
}
