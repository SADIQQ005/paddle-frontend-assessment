import React from "react";

export default function Jumbo() {
  return (
    <div className="flex md:mt-10 mt-3">
      <div className="h-[380px] md:h-[540px] flex-auto w-96 md:w-[680px] bg-[#311254] z-10 shadow-2xl">
        <div className="flex space-x-1 justify-center items-center md:mt-44 mt-24  mb-12 md:-mr-32 -mr-8">
          <p className="border-b-2 border-white w-12"></p>
          <p className="uppercase text-[12px] antialiased tracking-[2px] opacity-none">
            about us
          </p>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-left md:text-5xl text-lg tracking-wider -mr-[200px] md:-mr-[590px]">
            Build for SaaS <br /> and E-commerce
          </h2>
        </div>
      </div>
      <div className="flex-auto w-[300px] md:w-[500px] ">
        <p className="text-[16px] font-light px-4 md:px-16 antialiased mt-[230px] md:mt-[460px] tracking-wider leading-6">
          Our tools are easy to set up with a user friendly dashboard that
          enables you to set up, luanch, automate and manage multi-affilaite
          campaigns in 5 minutes.
        </p>
      </div>
    </div>
  );
}
