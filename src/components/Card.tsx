import { CheckCircle2 } from "lucide-react";
import { cn } from "@/utils/utils";
import { DthPlanProps } from "@/utils/type";
export const services: string[] = [
  "Installation With in 4 Hours All India",
  "1 Month Pack Included",
  "Cash On Delivery Payment",
  "Dolby Digital Surround Sound",
  "1080i Resolution",
  "1 Year Warranty",
  "Accessories- Dish, LNB, Remote, 10Mtr. Wire, Adapter and HDMI",
];

export function Card({ title, subTitle, price, color }: DthPlanProps) {
  console.log(color);

  const titleClass =
    color === "orange"
      ? "text-orange-500"
      : color === "blue"
      ? "text-blue-500"
      : "text-purple-500";

  return (
    <div
      className="flex flex-col bg-red-50 gap-4 text-xl py-5 transition duration-300 ease-in-out transform xl:hover:scale-[102%] shadow-lg shadow-red-300 hover:shadow-lg rounded-lg hover:shadow-red-100 items-center "
      key={title}
    >
      <div className="border-b-2 border-red-500 ">
        <h1
          className={cn(
            "pb-2 text-start font-sans text-3xl font-medium ",
            titleClass
          )}
        >
          {title}
        </h1>
        <h2 className="">{subTitle}</h2>
      </div>
      <h3>{price}</h3>
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
  );
}
