import React from "react";
import Welcome from "./components/Welcome";
import MySkills from "./components/MySkills";
import MyProject from "./components/MyProject";
import MyResume from "./components/MyResume";
import Contact from "./components/Contact";

const Home: React.FC = () => {
  return (
    <div className="bg-zinc-800">
      <Welcome />
      <MySkills />
      {/* <MyProject /> */}
      <MyResume />
      <Contact />
    </div>
  );
};

export default Home;
