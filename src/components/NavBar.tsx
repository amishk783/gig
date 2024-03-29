import Link from "next/link";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Image from "next/image";
export function NavBar() {
  return (
    <div className="flex py-2 text-white text-lg mx-5 ">
      <div className="hidden md:flex justify-between items-center gap-10 text-black">
        <Link
          className="relative before:bg-[#FC2E20]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          href="/"
        >
          Home
        </Link>
        <Link
          className="relative before:bg-[#FC2E20]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          href="/about"
        >
          About us
        </Link>
        <Link
          className="relative before:bg-[#FC2E20]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          href="/contact"
        >
          Contact us
        </Link>
        
        <Link
          className="relative before:bg-[#FC2E20]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          href="/corporate-offers"
        >
          Corporate
        </Link>
        {/* #2F5061 #F4EAE6 #4297A0 */}
        <button className="px-3 py-[3px] bg-red-600 rounded-[30px] text-white hover:scale-[105%] transition hover:delay-75 hover:bg-red-700 font-semibold">
          Get a Callback
        </button>
      </div>
    </div>
  );
}
