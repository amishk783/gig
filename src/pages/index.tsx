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
        <div className="px-5 max-container  ">
          <div className="z-[10]">
            <div className="flex flex-col xl:pt-20 md:flex-row border-b-2 border-slate-200 z-[10] items-center xl:justify-around  justify-center py-8 gap-5">
              <div className=" md:hidden w-full h-[600px] bg-[url('/dth/bg.jpg')] bg-no-repeat bg-contain bg-left z-[-10] absolute opacity-50"></div>

              <Image
                className="hidden md:flex "
                src="/dth/bg.jpg"
                alt="hero"
                width={700}
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
         <Prefooter />
          </div>
        </div>
        {isHelpOpen && (
          <div className="flex flex-col py-6 gap-2 px-5 bg-red-500 rounded-md fixed  right-7 top-[73%] text-white text-lg font-sans ">
            <h3 className="border-b py-2">Call us</h3>
            <h3 className="flex border-b py-2 gap-2 items-center">
              Chat with us
              <span>
                <FaSquareWhatsapp size={24} className="bg-green-500 rounded-full " />
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
