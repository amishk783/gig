import { tataPlayPlans } from "@/Constant/constant";
import Link from "next/link";
import Image from "next/image";
import { Prefooter } from "@/components/Prefooter";
import { CheckCircle2 } from "lucide-react";

export const services: string[] = [
  "Installation With in 4 Hours All India",
  "1 Month Pack Included",
  "Cash On Delivery Payment",
  "Dolby Digital Surround Sound",
  "1080i Resolution",
  "1 Year Warranty",
  "Accessories- Dish, LNB, Remote, 10Mtr. Wire, Adapter and HDMI",
];

export default function tataplay() {
  return (
    <div className="px-5 max-container ">
      <div className="z-[10]">
        <div className="flex flex-col xl:pt-20 md:flex-row border-b-2 border-slate-200 z-[10] items-center xl:justify-around  justify-center py-8 gap-5">
          <div className=" md:hidden w-full h-[600px] bg-[url('/dth/bg.jpg')] bg-no-repeat bg-contain bg-left z-[-10] absolute opacity-50"></div>
          <div
            aria-hidden="true"
            className="pointer-events-none top-10 absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative top-20 left-[calc(50%-13rem)] aspect-[1155/878]  w-[46.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff006a] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] "
            />
          </div>

          <Image
            className="hidden md:flex  clip-path  "
            src="/tataplay.png"
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
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 border-b-2 border-slate-200  items-center justify-center py-4 gap-5 xl:gap-10">
        {tataPlayPlans.map((tataplayDetail) => (
          <div
            className="flex flex-col gap-4 text-xl py-5 transition duration-300 ease-in-out border-red-400 border-2 hover:border-[4px] transform hover:scale-[102%] shadow-lg shadow-red-300 hover:shadow-lg   rounded-lg hover:shadow-red-100 items-center "
            key={tataplayDetail.title}
          >
            <div className="border-b-2 border-red-500">
              <h1 className="text-zinc-700 pb-2 text-center font-medium">
                {tataplayDetail.title}
              </h1>
              <h2>{tataplayDetail.subTitle}</h2>
            </div>
            <h3>{tataplayDetail.price}</h3>
            <ul className="flex flex-col list-none gap-2 pt-5 w-[80%]">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex gap-2 text-sm font-bold hover:text-green-500 "
                >
                  <span>
                    <CheckCircle2 className="" />
                  </span>
                  <h4 className="text-black hover:text-black">{service}</h4>
                </li>
              ))}
            </ul>
            <button className=" my-3 bg-red-600 px-5 py-2 rounded-full">
              Book Now
            </button>
          </div>
        ))}
      </div>
      <Prefooter />
    </div>
  );
}
