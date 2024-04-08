import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { footerCard } from "@/Constant/constant";
import { dthDetails } from "@/Constant/constant";
import { Prefooter } from "@/components/Prefooter";
import { HelpCircle, XCircle } from "lucide-react";

import { Form } from "@/components/Form";
import Link from "next/link";

export default function Home() {
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  const handleHelp = () => {
    setIsHelpOpen((prevState) => !prevState);
  };

  return (
    <>
      <main className="font-sans">
        <div className="px-5  ">
          <div className="z-[10] max-container ">
            <div className="flex flex-col md:flex-row border-b-2 border-slate-200 z-[10] items-center xl:justify-evenly justify-center py-8 gap-5 ">
              <div className=" md:hidden w-full h-[600px] bg-[url('/dth/bg.jpg')] bg-no-repeat bg-contain bg-left z-[-10] absolute opacity-50"></div>
              <div className=" w-[125%] h-[400px] bg-[url('/dth/front.png')] bg-no-repeat bg-contain bg-left-bottom z-[-10] absolute "></div>
              <div className="flex xl:-mt-40">
                {/* <Image
                  className="hidden md:flex left-[calc(50%-13rem)] aspect-[1155/878]  w-[46.125rem] "
                  src="/bg.png"
                  alt="hero"
                  width={700}
                  height={300}
                /> */}
                <div className="flex flex-col xl:px-10 gap-5 text-black">
                  <h1 className="text-6xl rounded-lg ">Hindi Dhamaka Plans</h1>
                  <h2 className="text-3xl ">Best Offers</h2>
                  <h3 className="text-xl ">
                    <span className="text-purple-500 text-2xl font-bold">
                      25+
                    </span>{" "}
                    OTT APPS
                  </h3>
                  <p className="">
                    Elevate your television experience with our diverse range of
                    DTH plans designed to cater to every viewer&apos;s
                    preferences.{" "}
                  </p>
                </div>
              </div>

              <div className=" flex flex-col justify-center gap-2 items-center  xl:pt-20  xl:w-[40%] pt-12 ">
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
          <div>
            {/* <div
              aria-hidden="true"
              className="pointer-events-none top-10 absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative top-20 left-[calc(50%-13rem)] aspect-[1155/878]  w-[46.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff006a] to-[#9089fc] opacity-50 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] "
              />
            </div> */}
          </div>
          <div className="flex flex-col bg-[#5c649c]  rounded-2xl text-white">
            <div className="text-5xl pt-10 pb-5 font-sans font-bold gap-5 text-center ">
              Explore New <span className="text-red-200">Plans!</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:flex-row border-b-2 px-28 border-slate-200 items-center justify-center py-16 gap-5 xl:gap-20  ">
              {dthDetails.map((dthDetail) => (
                <div
                  className="flex flex-col gap-2 text-xl bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg  rounded-3xl hover:shadow-red-100 items-center "
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
                  className="flex flex-col gap-6 bg-slate-200 rounded-md shadow-inner justify-center items-center h-[200px]  "
                  key={dthDetail.title}
                >
                  <Image
                    src={dthDetail.icon}
                    alt="hero"
                    className="w-20 h-20 pt-2"
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
            <Prefooter />
          </div>
        </div>
        {isHelpOpen && (
          <div className="flex flex-col py-6 gap-2 px-5 bg-red-500 rounded-md fixed  right-7 top-[73%] text-white text-lg font-sans ">
            <h3 className="border-b py-2">Call us</h3>
            <h3 className="flex border-b py-2 gap-2 items-center">
              Chat with us
              <span>
                <FaSquareWhatsapp
                  size={24}
                  className="bg-green-500 rounded-full "
                />
              </span>
            </h3>
          </div>
        )}
        <div className=" md:hidden fixed  right-7 top-[90%]  ">
          <button onClick={handleHelp} className="bg-red-600 rounded-full">
            {!isHelpOpen ? (
              <HelpCircle size={48} className="text-white" />
            ) : (
              <XCircle size={48} className="text-white " />
            )}
          </button>
        </div>
      </main>
    </>
  );
}
