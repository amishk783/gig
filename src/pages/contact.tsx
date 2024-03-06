import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="max-container mt-20 min-h-screen">
      <h1 className="text-3xl">Contact us for more information: </h1>
      <div className="flex justify-evenly items-center ">
        <div className="w-[80%]">
          <Form />
          All India DTH Address : – H No C – 47/12 Street Number 11/6 Chauhan
          Banger Near Oracle Public School Seelampur Delhi Pincode 110053 MOBIEL
          NUMBER : – 078277 06598, 075036 79415, 098737 95256 Privacy Policy |
          Terms & Condition
        </div>
        <div>
          <Image src="/contactus.jpg" width={1000} height={400} alt="contact" />
        </div>
      </div>
    </div>
  );
}
