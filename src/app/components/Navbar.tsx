"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BugFilled } from "@ant-design/icons";

const Navbar: React.FC = () => {
  return (
    <header className="mx-auto w-full max-w-screen-md border bg-zinc-500 py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <BugFilled
              className="text-emerald-400"
              style={{ fontSize: "29px" }}
            />
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Project
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Somethings
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="/login"
            >
              Dowload CV
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
