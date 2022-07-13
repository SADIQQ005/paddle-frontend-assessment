import React from "react";

function Header({ opened, setOpened }) {
  const tabs = [{ title: "about us" }, { title: "blog" }];

  return (
    <>
      <div className="flex justify-between items-center mx-16">
        <div className="mt-8 text-white uppercase tracking-wider font-semibold">
          <h2>metricks</h2>
        </div>
        <div>
          <div className="mt-8 flex items-center tracking-wider text-white uppercase font-normal text-[10px] cursor-pointer space-x-14">
            {tabs.map((item, index) => {
              return <p key={index}>{item.title}</p>;
            })}
            <p
              onClick={() => setOpened(true)}
              className="py-3 px-6 rounded-full bg-[#271ac1]"
            >
              contact us
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
