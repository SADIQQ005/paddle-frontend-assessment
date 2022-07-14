import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import SideNav from "../components/SideNav";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="bg-[#160133] h-full overflow-hidden mx-24 relative">
        {opened ? <SideNav setOpened={setOpened} opened={opened} /> : ""}
        <div
          className={`relative z-0 ${
            opened
              ? "blur-md transition delay-800 -translate-y-20 duration-500 ease-in-out"
              : "blur-none transition delay-800 duration-500 ease-out"
          }`}
        >
          <Header opened={opened} setOpened={setOpened} />
          <Section />
          <Footer />
        </div>
      </div>
    </>
  );
}
