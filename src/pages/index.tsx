import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { footerCard } from "@/Constant/constant";
import { dthDetails } from "@/Constant/constant";


import { Form } from "@/components/Form";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className="font-sans">
        <div className="px-5 max-container ">
          <div className=" z-50">
          <div className="flex flex-col xl:pt-20 xl:flex-row border-b-2 border-slate-200 z-50 items-center xl:justify-evenly justify-center py-8 gap-5">
          <div className="bg-custom "></div>
            <div className="flex flex-col">
              <Image src="/qr.png" alt="hero" width={350} height={300} />

              <button className="bg-[#FC2E20] hover:bg-red-700 text-white font py-2 px-4 rounded font-semibold">
                Click to Start Chat
              </button>
            </div>
            <div className=" flex flex-col justify-center gap-2 items-center xl:w-[40%] pt-12 ">
              <h1 className="text-3xl ">Tata Play New Connection</h1>
              <p>FREE HOME DELIVERY | COD AVAILABLE</p>
              <Form />
              </div>
            </div>
          </div>
          <div></div>

          <div className="flex flex-col xl:flex-row border-b-2 border-slate-200  items-center justify-center py-8 gap-5 xl:gap-20">
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
          <div>
            <div className="pt-10">
              <h1 className="text-center text-3xl font-medium">
                Book a new Tata Sky connection
              </h1>
              <div className="flex flex-col xl:flex-row items-center justify-around ">
                <div className="px-10 xl:p-0">
                  <h1 className="text-3xl text-center">
                    Why We Are Best Tata Play Dealer ?
                  </h1>
                  <ul className="flex flex-col list-none gap-2 pt-5">
                    <li>Unmatched Service & Support</li>
                    <li>For Best Options Call Us Now</li>
                    <li>Privacy Policy</li>
                    <li>We Are Authorised Partner With Tata Play India</li>
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
