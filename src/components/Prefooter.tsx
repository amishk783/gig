import { CheckCircle2 } from "lucide-react";
import { Form } from "@/components/Form";

export const services: string[] = [
  "Unmatched Service & Support",
  "For Best Options Call Us Now",
  " Privacy Policy",
  "We Are Authorised Partner With Tata Play India",
];
export function Prefooter() {
  return (
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
              <li key={service} className="flex gap-2 hover:text-green-500 ">
                <span>
                  <CheckCircle2 className="" />
                </span>
                <h4 className="text-black hover:text-black">{service}</h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:w-[40%]">
          <Form isFooter={true} />
        </div>
      </div>
    </div>
  );
}
