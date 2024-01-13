import React from "react";
import Image from "next/image";

const Welcome: React.FC = () => {
  return (
    <div className="py-10 container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2 lg:py-20">
      <div className="row-start-2 lg:row-auto">
        <h1 className="block antialiased tracking-normal font-sans font-semibold text-emerald-400 mb-4 lg:text-5xl !leading-tight text-3xl">
          Welcome to my Web
          <br />
          Development Portofolio!
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-4 text-gray-300 md:pr-16 xl:pr-28">
          I'm Thitiphong Srisavat, a passionate Web developer based in Thailand.
          Here, you'll get a glimpse of my journey in the world of web
          development, where creativity meets functionality.
        </p>
      </div>
      <Image
        alt="team work"
        loading="lazy"
        width="1024"
        height="1024"
        decoding="async"
        className="h-[25rem] md:h-[50rem] lg:h-[40rem] w-full rounded-xl object-cover"
        src="/imgs/profile.jpg"
      />
    </div>
  );
};
export default Welcome;
