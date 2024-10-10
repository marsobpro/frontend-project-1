import React from "react";
import Hero from "./components/Hero";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
