import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import SideNav from "../components/SideNav";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="bg-[#160133] h-full mx-24 relative">
        {opened ? (
          <SideNav />
        ) : (
          ""
        )}
        <div className="relative z-0">
          <Header opened={opened} setOpened={setOpened} />
          <Section />
          <Footer />
        </div>
      </div>
    </>
  );
}
