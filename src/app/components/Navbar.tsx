import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="flex flex-wrap justify-start w-full bg-white p-4 px-10">
      <nav className="w-full mx-auto gap-5 flex items-center justify-start">
        <Link className="flex-none text-xl font-semibold" href="#">
          Thity
        </Link>
        <div className="flex flex-row items-center gap-3">
          <Link className="text-gray-600 hover:text-gray-400 " href="#">
            Meme
          </Link>
          <Link className="text-gray-600 hover:text-gray-400 " href="#">
            Hero DotA 2
          </Link>
          <Link className="text-gray-600 hover:text-gray-400 " href="#">
            Something Tables
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
