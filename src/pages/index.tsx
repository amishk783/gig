import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { HomeOffers, footerCard } from "@/Constant/constant";
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
        <div className="">
          <div className="w-full h-full bg-[url('/dth/bg-front.jpeg')] bg-no-repeat bg-cover z-[-10] absolute opacity-100 bg-blend-multiply bg-[#4d1b28]"></div>
          <div className="mb-10 pt-20 max-sm:px-2">
            <div className="z-[10] max-container ">
              <div className="flex flex-col md:flex-row   z-[10] items-center xl:justify-evenly justify-center py-8 gap-5 ">
                <div className="flex flex-col-reverse">
                  <Image
                    className="w-[46.125rem] h-[350px] "
                    src="/dth/front.png"
                    alt="hero"
                    width={400}
                    height={200}
                  />
                  <div className="flex flex-col xl:px-10 gap-5 text-white">
                    <h3 className="text-3xl rounded-lg pb-3 ">
                      Latest Offer !
                    </h3>
                    <h1 className="text-5xl pt-6">TATA PLAY HD SET TOP BOX</h1>
                    <h2 className=" text-4xl ">
                      @ Rs.<span className=" text-yellow-200">1,299/- </span>{" "}
                      Only
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-2 items-center xl:py-10  xl:w-[40%] pt-12 text-black bg-[#e7e7ea] rounded-xl w-[90%] mx-5">
                  <h1 className="text-4xl font-semibold text-center max-sm:px-2 ">
                    Get a <span className="text-red-600">New</span> Connection
                  </h1>
                  <p className="border-b-2 text-center ring-amber-400 ">
                    FREE HOME DELIVERY | COD AVAILABLE
                  </p>
                  <Form />
                </div>
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
          <div className="flex flex-col texture  rounded-2xl text-white mx-2 xl:max-5 ">
            <div className="text-5xl pt-10 pb-5 font-sans font-bold gap-5 text-center ">
              Explore New <span className="text-red-200">Plans!</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:flex-row border-b-2 px-4 xl:px-28 border-slate-200 items-center justify-center py-6 xl:py-16 gap-5 xl:gap-20  ">
              {dthDetails.map((dthDetail) => (
                <div
                  className="flex flex-col gap-2 text-xl bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-md  rounded-3xl hover:shadow-red-100 items-center "
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
          <div className="sm:py-20 py-28">
            <div className="max-md:hidden w-full h-3/5 sidebanner bg-no-repeat bg-cover z-[-10] absolute opacity-100 bg-blend-multiply  md:rounded-lg bg-yellow-400 "></div>
            <div className="flex flex-col md:flex-row py-10 xl:px-20 ">
              <div className=" text-black ">
                <div className="px- py-10 text-4xl text-bold ">
                  <h1 className="text-3xl text-black max-sm:text-center xl:text-7xl font-semibold rounded-lg xl:w-[90%] roboto">
                    Check out <span className="text-red-700">latest</span> offers!
                  </h1>
                  <h3 className=" pt-2 text-base xl:text-xl max-sm:text-center">
                    Check out amazing deals on various brands
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-5 sm:px-10">
                {HomeOffers.map((benefit) => (
                  <div
                    className=" border-2 border-slate-600 rounded-xl transition duration-300 ease-in-out transform xl:hover:scale-[102%] shadow-lg shadow-red-300 hover:shadow-lg hover:shadow-red-100 "
                    key={benefit.text}
                  >
                    <Image
                      className="rounded-xl h-full max-xl:w-full"
                      alt="benefits"
                      src={benefit.img}
                      width={280}
                      height={200}
                    />
                    {/* <h2 className="font-normal text-center">{benefit.text}</h2> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Why Tata Play DTH? */}
          <div className="flex flex-col px-5 max-container">
            <div className="text-4xl pt-10 pb-5 font-sans font-bold gap-5 text-center ">
              Why Choose our <span className="text-red-500">DTH</span> Plans?
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3 xl:flex-row border-b-2 border-slate-200  items-center justify-center py-8 gap-5 xl:gap-20">
              {footerCard.map((dthDetail) => (
                <div
                  className="flex flex-col gap-6 bg-violet-200 rounded-md shadow-md justify-center items-center h-[200px]  "
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
          <div className="md:hidden flex flex-col  gap-5 rounded-md fixed right-7 top-[75%] sm:top-[72%] text-white text-lg font-sans ">
            <a href="tel:+900300400">
              <IoMdCall size={44} className="bg-green-400 p-2 rounded-full" />
            </a>

            <a href="whatsapp://send?text=Hello World!&phone=+919818714940">
              <FaSquareWhatsapp
                size={44}
                className="bg-green-500 p-2 rounded-full "
              />
            </a>
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
