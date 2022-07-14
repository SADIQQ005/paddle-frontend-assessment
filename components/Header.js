import Link from "next/link";
import React from "react";

function Header({ opened, setOpened }) {
  const tabs = [
    { title: "about us", to: "/aboutUs" },
    { title: "blog", to: "" },
  ];

  return (
    <>
      <div className="flex justify-between items-center mx-4 md:mx-16">
        <div className="mt-8 text-white uppercase tracking-wider font-semibold">
          <Link href="/">
            <a>
              <h2>metricks</h2>
            </a>
          </Link>
        </div>
        <div>
          <div className="mt-8 flex items-center tracking-wider text-white uppercase font-normal text-[10px] cursor-pointer space-x-4 md:space-x-14">
            {tabs.map((item, index) => {
              return (
                <Link key={index} href={item.to}>
                  <a>
                    <p>{item.title}</p>
                  </a>
                </Link>
              );
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
