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

interface CardProps {
  title?: string;
  subTitle: string;
  price: string;
}

export function Card({ title, subTitle, price}: CardProps) {
  return (
    <div
      className="flex flex-col gap-4 text-xl py-5 transition duration-300 ease-in-out border-red-400 border-2 hover:border-[4px] transform hover:scale-[102%] shadow-lg shadow-red-300 hover:shadow-lg   rounded-lg hover:shadow-red-100 items-center "
      key={title}
    >
      <div className="border-b-2 border-red-500 ">
        <h1 className="text-zinc-700 pb-2 text-center font-medium ">
          {title}
        </h1>
        <h2>{subTitle}</h2>
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
