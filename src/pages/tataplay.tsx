import { tataPlayPlans } from "@/Constant/constant";
import Link from "next/link";
import Image from "next/image";

export default function tataplay() {
  return (
  <div className="px-5 max-container ">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 border-b-2 border-slate-200  items-center justify-center py-4 gap-5 xl:gap-10">
    {tataPlayPlans.map((tataplayDetail) => (
      <div
        className="flex flex-col gap-4 text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-lg  rounded-lg hover:shadow-red-100 items-center "
        key={tataplayDetail.title}
      >
          <Image
            src={tataplayDetail.image!}
            alt="hero"
            width={282}
            height={282}
          />
          <h1 className="text-zinc-700 pb-2 text-center font-medium">
            {tataplayDetail.title}
          </h1>
      </div>
    ))}
  </div>
</div>
  );
}
