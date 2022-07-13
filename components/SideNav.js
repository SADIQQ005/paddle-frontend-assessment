import React from "react";

export default function SideNav() {
  return (
    <div className="text-white text-center px-16 antialiased tracking-wide text-2xl font-semibold bg-pink-800 w-[600px] float-right z-10 h-full absolute">
      <h2 className="pt-10 pb-12">
        Hey, we are still in works, <br /> but you can send us a message!
      </h2>

      <div className="space-y-5">
        <div>
          <p className="text-left font-light mb-3 text-[13px]">First Name</p>
          <input
            className="py-4 px-6 rounded-lg w-full focus:outline-0 text-gray-900 text-[12px]"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <p className="text-left font-light mb-3 text-[13px]">Last Name</p>
          <input
            className="py-4 px-6 rounded-lg w-full focus:outline-0 text-gray-900 text-[12px]"
            placeholder="Enter your Last name"
          />
        </div>

        <div>
          <p className="text-left font-light mb-3 text-[13px]">Email Address</p>
          <input
            className="py-4 px-6 rounded-lg w-full focus:outline-0 text-gray-900 text-[12px]"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <p className="text-left font-light mb-3 text-[13px] capitalize">
            Tell us what you need help with:
          </p>
          <textarea
            className="py-4 px-6 resize-none rounded-lg w-full focus:outline-0 text-gray-900 text-[12px]"
            placeholder="Enter your first name"
          />
        </div>
      </div>
      <div className="py-3 px-6 w-44 rounded-full bg-[#271ac1] mt-6 text-[16px] uppercase font-semibold">
        send now
      </div>
    </div>
  );
}
