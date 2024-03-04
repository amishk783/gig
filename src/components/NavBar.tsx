import Link from "next/link";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Image from "next/image";
export function NavBar() {
  return (
    <div className="flex py-2 text-white text-lg mx-5">
      <div className="hidden md:flex justify-between gap-10">
        <Link href="/">Home</Link>
        <Link href="/">About us</Link>
        <Link href="/">Contact us</Link>
      </div>
    </div>
  );
}
