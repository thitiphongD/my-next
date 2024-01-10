import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit text-center font-normal !text-gray-700">
            © 2024 Made with NextJS Tailwind by Thitiphong .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
