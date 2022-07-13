import React from "react";

function Section() {
  const date = [
    { number: "7", letter: "days" },
    { number: "24", letter: "hours" },
    { number: "54", letter: "minutes" },
    { number: "11", letter: "second" },
  ];
  return (
    <div className="flex flex-col justify-center items-center text-center text-white mt-[80px]">
      <h2 className="font-bold w-[600px] leading-[50px] tracking-wider text-4xl uppercase">
        something awesome is coming soon
      </h2>
      <p className="mt-6 text-sm font-light w-[500px] tracking-wider leading-6">
        Your all in one affiliate marketing tracking sofware{" "}
        <span className="font-bold">track, automate</span> and{" "}
        <span className="font-bold">optimize</span> your campaigns
      </p>
      <div className="flex space-x-3">
        {date.map((item, index) => {
          return (
            <div key={index}>
              <div className="py-4 px-6 mt-6 bg-white rounded-md text-center text-gray-800">
                <h2 className="font-bold text-3xl">{item.number}</h2>
                <p className="capitalize text-xs">{item.letter}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-7 space-x-6">
        <input
          className="border-0 text-sm bg-inherit px-3 py-2 focus:outline-0 border-b"
          placeholder="First Name.."
        />
        <input
          className="border-0 text-sm bg-inherit px-3 py-2 focus:outline-0 border-b"
          placeholder="Last Name.."
        />
      </div>
      <div className="mt-7 flex">
        <input
          className="py-2 px-6 w-80 text-sm text-gray-800 rounded-full focus:outline-0"
          placeholder="Enter your email address.."
        />
        <p className="uppercase relative w-48 -ml-16 text-[10px] bg-[#271ac1] tracking-wider rounded-full py-3 px-6">
          join our waiting list
        </p>
      </div>
    </div>
  );
}

export default Section;
