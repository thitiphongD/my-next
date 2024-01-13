import React from "react";
import { Html5Filled, DatabaseFilled, AppstoreFilled } from "@ant-design/icons";

const MySkills = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto mb-20 text-center">
        <p className="block antialiased font-sans text-base leading-relaxed text-emerald-400 mb-2 font-bold uppercase">
          my skills
        </p>
        <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-emerald-400 mb-4">
          What I do
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full text-gray-300 lg:w-10/12">
          I'm not just a developer; I'm a digital dreamweaver. Crafting
          immersive online experiences is not just a job but my calling.
          Discover below how I can help you.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-300 shadow-none">
          <div className="p-6 grid justify-center text-center">
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-emerald-500 p-2.5 text-white shadow">
              <Html5Filled />
            </div>
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-emerald-400 mb-2">
              Frontend Web Development
            </h5>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal text-gray-300">
              Creating beautiful and functional web experiences is my forte.
              Using the latest technologies and best practices, I design and
              build websites that captivate and engage users.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-300 shadow-none">
          <div className="p-6 grid justify-center text-center">
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-emerald-500 p-2.5 text-white shadow">
              <AppstoreFilled />
            </div>
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-emerald-400 mb-2">
              Backend Web Development
            </h5>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal text-gray-300">
              Focus on building strong web solutions.I create the
              high-performing web applications. From managing databases to
              optimizing servers, my expertise ensures reliable and scalable web
              projects, laying the groundwork for engaging and dynamic user
              experiences.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-400 shadow-none">
          <div className="p-6 grid justify-center text-center">
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-emerald-500 p-2.5 text-white shadow">
              <DatabaseFilled />
            </div>
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-emerald-400 mb-2">
              Database
            </h5>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal text-gray-300">
              In the realm of database management. My skills extend to
              optimizing queries for enhanced performance and scalability.
              Whether it's ensuring data integrity or fine-tuning access
              controls, I play a crucial role in establishing a solid foundation
              for web projects. My goal is to contribute to the creation of
              dynamic and engaging user experiences through efficient and
              reliable data management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
