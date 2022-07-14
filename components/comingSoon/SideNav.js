import React from "react";
import Form from "../Form";

export default function SideNav({ setOpened }) {
  const formData = [
    { lable: "First Name", placeholder: "Enter your first name" },
    { lable: "Last Name", placeholder: "Enter your last name" },
    { lable: "Email Address", placeholder: "Enter your email address" },
  ];

  return (
    <div
      className="text-white text-center py-10 md:px-24 px-4 antialiased
     tracking-wide text-2xl drop-shadow-md font-semibold bg-[#160133] 
     md:w-[600px] w-[300px] float-right z-10 absolute"
    >
      <div
        onClick={() => setOpened(false)}
        className="bg-white text-[#271ac1] w-16 h-16 cursor-pointer
       flex justify-center items-center absolute top-8 -right-4 
       overflow-visible rounded-full"
      >
        x
      </div>

      <h2 className="pt-10 pb-12 text-[18px] mt-8">
        Hey, we are still in works, <br /> but you can send us a message!
      </h2>

      <div className="space-y-2">
        <Form formData={formData} />
        <div>
          <p className="text-left font-light mb-2 text-[13px] capitalize">
            Tell us what you need help with:
          </p>
          <textarea
            className="py-4 px-6 resize-none rounded-lg w-full focus:outline-0 text-gray-900 text-[12px]"
            placeholder="Enter A Topic, Like 'Channel Problem'"
          />
        </div>
      </div>
      <div className="py-3 px-6 w-44 rounded-full bg-[#271ac1] mt-4 text-[16px] uppercase font-semibold">
        send now
      </div>
    </div>
  );
}
