import Image from "next/image";
// import { Inter } from "next/font/google";
import { CheckCircle2 } from "lucide-react";

import { footerCard } from "@/Constant/constant";
import { dthDetails } from "@/Constant/constant";

import { Form } from "@/components/Form";
import Link from "next/link";

const services: string[] = [
  "Unmatched Service & Support",
  "For Best Options Call Us Now",
  " Privacy Policy",
  "We Are Authorised Partner With Tata Play India",
];
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="font-sans">
        <div className="px-5 max-container  ">
          <div className="z-[10]">
            <div className="flex flex-col xl:pt-20 md:flex-row border-b-2 border-slate-200 z-[10] items-center xl:justify-around  justify-center py-8 gap-5">
              <div className=" md:hidden w-full h-[600px] bg-[url('/dth/bg.jpg')] bg-no-repeat bg-contain bg-left z-[-10] absolute opacity-50"></div>

              <Image
                className="hidden md:flex xl:w-[700px] md:rounded-full"
                src="/dth/bg.jpg"
                alt="hero"
                width={350}
                height={300}
              />

              <div className=" flex flex-col justify-center gap-2 items-center xl:w-[40%] pt-12 ">
                <h1 className="text-4xl font-semibold">
                  Get a <span className="text-red-600">New</span> Connection
                </h1>
                <p className="border-b-2 ring-amber-400">
                  FREE HOME DELIVERY | COD AVAILABLE
                </p>
                <Form />
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex flex-col">
            <div className="text-4xl pt-10 pb-5 font-sans font-bold gap-5 text-center ">
              Explore New <span className="text-red-500">Plans!</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:flex-row border-b-2 border-slate-200  items-center justify-center py-4 gap-5 xl:gap-20">
              {dthDetails.map((dthDetail) => (
                <div
                  className="flex flex-col gap-2 text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-lg  rounded-lg hover:shadow-red-100 items-center "
                  key={dthDetail.title}
                >
                  <Link href="/tataplay">
                    <Image
                      src={dthDetail.image}
                      alt="hero"
                      width={282}
                      height={282}
                    />
                    <h1 className="text-zinc-700 pb-2 text-center font-medium">
                      {dthDetail.title}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Why Tata Play DTH? */}
          <div className="flex flex-col">
            <div className="text-4xl pt-10 pb-5 font-sans font-bold gap-5 text-center ">
              Why Choose our <span className="text-red-500">DTH</span> Plans?
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3 xl:flex-row border-b-2 border-slate-200  items-center justify-center py-8 gap-5 xl:gap-20">
              {footerCard.map((dthDetail) => (
                <div
                  className="flex flex-col gap-6 bg-white rounded-md shadow-xl items-center  "
                  key={dthDetail.title}
                >
                  <Image
                    src={dthDetail.icon}
                    alt="hero"
                    className=""
                    width={100}
                    height={10}
                  />
                  <h1 className="text-zinc-700 pb-5 text-xl text-center font-medium ">
                    {dthDetail.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="pt-10 pb-20">
              <h1 className="text-center text-5xl font-semibold  fonts-sans ">
                Book a new <span className="text-red-600">Connection!</span>
              </h1>
              <div className="flex flex-col pt-10 xl:flex-row items-center justify-around ">
                <div className="px-10  xl:p-0">
                  <h1 className="text-3xl text-center font-medium text-red-500">
                    Why We Are Best Tata Play Dealer ?
                  </h1>
                  <ul className="flex flex-col list-none gap-2 pt-5">
                    {services.map((service) => (
                      <li
                        key={service}
                        className="flex gap-2 hover:text-green-500 "
                      >
                        <span>
                          <CheckCircle2 className="" />
                        </span>
                        <h4 className="text-black hover:text-black">
                          {service}
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="xl:w-[40%]">
                  <Form isFooter={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
