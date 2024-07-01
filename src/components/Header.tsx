import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { NavBar } from "./NavBar";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleMobile = () => {
    setIsMobile((prevState) => !prevState);
  };
  return (
    <div className="w-full relative bg-white py-3 xl:px-40 shadow-md">
      <div className="flex justify-between mx-5 items-center">
        <Link href="/">
          <Image
            className=""
            src="/logo.png"
            alt="logo"
            width={180}
            height={57}
          />
        </Link>
        <NavBar />
        <div className="relative sm:hidden ">
          <Hamburger toggled={isMobile} toggle={handleMobile} />
        </div>
      </div>
      {isMobile && (
        <div className="absolute bottom-0 right-0 z-1 w-full  h-[20%]  text-white-400 top-[4.5rem] border-b border-b-white/20 ">
          <MobileMenu />
        </div>
      )}
    </div>
  );
}
