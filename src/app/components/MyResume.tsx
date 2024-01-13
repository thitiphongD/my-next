import React from "react";
import {
  ForwardFilled,
  RedditCircleFilled,
  TwitterCircleFilled,
  SlackCircleFilled,
} from "@ant-design/icons";
const MyResume: React.FC = () => {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-emerald-400">
            My Resume
          </h2>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-4 mt-3 w-9/12 font-normal text-gray-300">
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </p>
          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-emerald-400 hover:bg-emerald-400/10 active:bg-emerald-400/20 flex items-center gap-2">
            view more
            <ForwardFilled style={{ fontSize: "29px" }} />
          </button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          <div className="flex items-start gap-4">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-emerald-500 text-white shadow-emerald-400/20 shadow-md h-12 w-12 shrink-0 items-center justify-center ">
              <RedditCircleFilled style={{ fontSize: "29px" }} />
            </div>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal text-gray-300">
              Certified Web Developer
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-emerald-500 text-white shadow-emerald-400/20 shadow-md h-12 w-12 shrink-0 items-center justify-center">
              <TwitterCircleFilled style={{ fontSize: "29px" }} />
            </div>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal text-gray-300">
              Frontend Framework Proficiency Certification
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-emerald-500 text-white shadow-emerald-400/20 shadow-md h-12 w-12 shrink-0 items-center justify-center">
              <SlackCircleFilled style={{ fontSize: "29px" }} />
            </div>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal text-gray-300">
              Backend Framework Proficiency Certification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyResume;
