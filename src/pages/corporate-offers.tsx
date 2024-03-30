import { Divide } from 'hamburger-react'
import React from 'react'
import { CheckCircle2 } from "lucide-react";
import { Form } from '@/components/Form';

const corporateOffers = () => {
  return (
    <div className='max-container'>
          {/* <div className="flex justify-center items-center px-16 py-2.5 w-full text-2xl font-bold leading-6 text-white bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[1200px] max-md:flex-wrap">
            <div className="justify-center px-5 py-3.5 bg-pink-600 rounded-xl">
              087002 75029
            </div>
          </div>
        </div> */}

        <div className="flex justify-center items-center px-16 py-5 w-full max-md:px-5 max-md:max-w-full border-b-2 mt-8">
          <div className="max-w-full w-[1165px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://img.freepik.com/free-vector/gradient-rural-landscape-background_23-2150555829.jpg?t=st=1711711251~exp=1711711851~hmac=78306a3ef4fd15a0ac8629a0445dd648957a2cd09da08e7679819d8be54a5d59"
                  className="w-full aspect-square max-md:mt-8 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-xl max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl font-medium leading-10 text-black max-md:max-w-full">
                    Get exclusive corporate offers on Multi-Dwelling
                    <br />
                    Unit (MDU) DTH connection
                  </div>
                  <div className="mt-7 text-base leading-5 text-black max-md:max-w-full">
                    Tata Play’s MDU service is a customized service for connecting
                    multiple TVs within the same
                    <br />
                    multi-storied building – so you can have multiple connections on
                    a single dish. This MDU service is
                    <br />
                    available for corporate connections, hotels, housing societies
                    and
                  </div>
                  <div className="flex gap-2.5 self-start mt-11 max-md:mt-10">
                  <span>
                      <CheckCircle2 className=" flex gap-2 hover:text-green-500" />
                    </span>
                    <div className="flex-auto text-black capitalize leading-[139%]">
                      Easy to maintain
                    </div>
                  </div>
                  <div className="flex gap-2.5 mt-5 max-md:flex-wrap">
                  <span>
                      <CheckCircle2 className=" flex gap-2 hover:text-green-500" />
                    </span>
                    <div className="flex-auto text-black capitalize leading-[139%] max-md:max-w-full">
                      No separate dish required for additional subscribers in the
                      building
                    </div>
                  </div>
                  <div className="flex gap-2.5 mt-5 max-md:flex-wrap">
                  <span>
                      <CheckCircle2 className=" flex gap-2 hover:text-green-500" />
                    </span>
                    <div className="flex-auto text-black capitalize leading-[139%] max-md:max-w-full">
                      Single dish antenna receives DTH services for every customer
                      in the building
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <div className="items-center self-center mt-10 max-w-full max-md:mt-10 hover:text-red-700">
          <div className="text-4xl pt-10 pb-5 font-sans font-bold gap-5 text-center ">
            Benefits
          </div>
        </div>

        <div className='flex flex-col items-center justify-end border-b-2 mb-2'>
          <div className=" mt-24 ml-4 text-2xl font-bold leading-8 text-black max-md:mt-10 max-md:ml-2.5">
            There’s something for everyone
          </div>
          <div className="mt-8 text-base leading-7 text-black max-md:max-w-full">
            No matter your location or the language you speak you will always find
            something to watch on Tata Play. Find the perfect new digital TV
            connection
            <br />
            and choose from 600+ different channels & services to ensure that you
            are always entertained!
          </div>
          <div className="mt-9 ml-4 text-base leading-7 text-black max-md:max-w-full">
            Tata Play dish DTH new connection offers can be availed across India.
            Including the following states:
          </div>

          <div className="mt-20 max-w-full w-[876px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <ol className=" list-disc flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base leading-7 text-neutral-500 max-md:mt-10">
                  <li>Andaman and Nicobar</li>
                  <li className="mt-3.5">Andhra Pradesh</li>
                  <li className="mt-3.5">Arunachal Pradesh</li>
                  <li className="mt-3.5">Assam</li>
                  <li className="mt-3.5">Bihar</li>
                  <li className="mt-4">Chandigarh</li>
                  <li className="mt-3">Chhattisgarh</li>
                  <li className="mt-3">Dadar and Nagar Haveli</li>
                  <li className="mt-3">Daman and Diu</li>
                </div>
              </ol>
              <ol className=" list-disc flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base leading-7 text-neutral-500 max-md:mt-10">
                  <li>Delhi</li>
                  <li className="mt-3.5">Goa</li>
                  <li className="mt-4">Gujarat</li>
                  <li className="mt-3">Haryana</li>
                  <li className="mt-3">Himachal Pradesh</li>
                  <li className="mt-4">Jammu and Kashmir</li>
                  <li className="mt-3.5">Jharkhand</li>
                  <li className="mt-3.5">Karnataka</li>
                  <li className="mt-4">Kerala</li>
                </div>
              </ol>
              <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                <ol className=" list-disc flex flex-col grow text-base leading-7 text-neutral-500 max-md:mt-10">
                  <li>Lakshadweep</li>
                  <li className="mt-3">Madhya Pradesh</li>
                  <li className="mt-3">Maharashtra</li>
                  <li className="mt-3.5">Manipur</li>
                  <li className="mt-3">Meghalaya</li>
                  <li className="mt-3">Mizoram</li>
                  <li className="mt-3.5">Nagaland</li>
                  <li className="mt-3">Odisha</li>
                  <li className="mt-4">Pondicherry</li>
                </ol>
              </div>
              <ol className=" list-disc flex flex-col ml-5 w-[14%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base leading-7 text-neutral-500 max-md:mt-10">
                  <li>Punjab</li>
                  <li className="mt-3">Rajasthan</li>
                  <li className="mt-3">Sikkim</li>
                  <li className="mt-3.5">Tamil Nadu</li>
                  <li className="mt-3.5">Telangana</li>
                  <li className="mt-3">Tripura</li>
                  <li className="mt-3">Uttarakhand</li>
                  <li className="mt-3.5">West Bengal</li>
                </div>
              </ol>
            </div>
          </div>
          <div className="mt-10 text-base leading-7 text-black max-md:max-w-full">
            What’s more, the Tata Play dish connection offers channels in every
            major Indian language. Choose between international and national
            channels in a<br />
            host of languages including Hindi, English, Tamil, Telugu, Malayalam,
            Kannada, Marathi, Gujarati, Bengali, Odia, Punjabi, and many others.
          </div>
          <div className=" justify-center mt-9 ml-4 text-base leading-7 text-black max-md:max-w-full mb-8">
            So what are you waiting for, avail the online DTH connection offers to
            get your Tata Play set up for Jingalala entertainment
          </div>
      </div>
      <div className='flex flex-col justify-center gap-2 items-center xl:w-auto sm:w-[40%] pt-12 px-40'> 
        {/*Form starts here */}
        {/* <div className="mt-16 text-3xl leading-9 text-center text-black max-md:mt-10 max-md:max-w-full">
          Enter your details for a new connection
        </div>
        <div className="flex gap-2 self-start mt-7 ml-64 text-base leading-7 max-md:ml-2.5">
          <div className="grow text-neutral-500">Connection for* </div>
          <div className="text-red-600">*</div>
        </div>
        <div className="flex gap-5 p-3.5 mt-2.5 max-w-full text-base leading-7 bg-white rounded border border-gray-500 border-solid text-neutral-500 w-[580px] max-md:flex-wrap">
          <div className="flex-auto">Residential Complex</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/49c5869b22c1e240866cf340396fda5276fd776445fd679567e8bdfe782f81fb?"
            className="shrink-0 self-start aspect-[0.58] w-[11px]"
          />
        </div>
        <div className="justify-center items-start px-4 py-4 mt-3 max-w-full text-base bg-white rounded border border-gray-500 border-solid text-neutral-500 w-[580px] max-md:pr-5">
          Company / Property name*
        </div>
        <div className="justify-center items-start px-4 py-4 mt-2.5 max-w-full text-base bg-white rounded border border-gray-500 border-solid text-neutral-500 w-[580px] max-md:pr-5">
          Contact person*
        </div>
        <div className="justify-center items-start px-4 py-5 mt-2.5 max-w-full text-base bg-white rounded border border-gray-500 border-solid text-neutral-500 w-[580px] max-md:pr-5">
          Mobile number*
        </div>
        <div className="justify-center items-start px-4 py-4 mt-2.5 max-w-full text-base whitespace-nowrap bg-white rounded border border-gray-500 border-solid text-neutral-500 w-[580px] max-md:pr-5">
          City
        </div>
        <div className="justify-center items-start px-4 py-5 mt-2.5 max-w-full text-base bg-white rounded border border-gray-500 border-solid text-neutral-500 w-[580px] max-md:pr-5">
          Number of connections
        </div>
        <div className="justify-center px-6 py-4 mt-2.5 text-base font-medium leading-4 text-center text-white whitespace-nowrap bg-fuchsia-600 rounded max-md:px-5">
          Submit
        </div> */}
        <h1 className="text-4xl font-semibold">
                  Get in touch for <span className="text-red-600">MDU</span> Connection
                </h1>

        <Form />
      </div>
    </div>
    
  )
}

export default corporateOffers
