import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-800 flex flex-col justify-center items-center px-[clamp(10px,2.5vw,40px)] py-11">
      <div className="flex w-full max-w-[1192px] flex-col items-center mt-4 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex flex-wrap justify-center max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch max-w-[400px] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-start max-md:mt-10">
                <Link href="/" className="flex items-stretch gap-2">
                  <div className="w-[40px] h-auto relative overflow-hidden rounded-full">
                    <Image
                      loading="lazy"
                      fill
                      src="./logo.svg"
                      className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                      alt="Logo"
                    />
                  </div>
                 
                  <div className="text-white text-2xl font-bold leading-9 tracking-tight grow whitespace-nowrap mt-2 self-start">
                    Huntly
                  </div>
                </Link>
                <div className="text-slate-300 font-light text-base leading-7 self-stretch mt-10">
                  Great platform for the job seeker that passionate about startups. Find your dream job easier.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
            <div className="gap-5 flex max-w-[350px] justify-evenly max-md:gap-0">
              <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch max-md:mt-10">
                  <a href="#" className="text-white text-lg font-semibold leading-7 whitespace-nowrap">
                    About
                  </a>
                  <a href="#" className="text-slate-300 font-light text-base leading-7 whitespace-nowrap mt-7">
                    Companies
                  </a>
                  <a href="#" className="text-slate-300 font-light text-base leading-7 whitespace-nowrap mt-4">
                    Pricing
                  </a>
                  <a href="#" className="text-slate-300 font-light text-base leading-7 whitespace-nowrap mt-4">
                    Terms
                  </a>
                  <a href="#" className="text-slate-300 font-light text-base leading-7 whitespace-nowrap mt-4">
                    Advice
                  </a>
                  <a href="#" className="text-slate-300 font-light text-base leading-7 whitespace-nowrap mt-4">
                    Privacy Policy
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:mt-10">
                  <a href="#" className="text-white text-lg font-semibold leading-7 whitespace-nowrap">
                    Resources
                  </a>
                  <a href="#" className="text-slate-300 font-light text-base leading-7 whitespace-nowrap mt-8">
                    Help Docs
                  </a>
                  <a href="#" className="text-slate-300 font-light text-base leading-7 whitespace-nowrap mt-8">
                    Guide
                  </a>
                  <a href="#" className="text-slate-300 font-light text-base leading-7 whitespace-nowrap mt-9">
                    Updates
                  </a>
                  <a href="#" className="text-slate-300 font-light text-base leading-7 whitespace-nowrap mt-9">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            </div>
            <div className="flex flex-col max-w-[400px] ml-5 w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:mt-10">
                <div className="text-white text-lg font-semibold leading-7 whitespace-nowrap">
                  Get job notifications
                </div>
                <div className="text-zinc-200 text-base leading-7 mt-7">
                  The latest job news, articles, sent to your inbox weekly.
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-11 max-md:mt-10">
                  <input type="email" id="email" aria-label="Email Address" placeholder="Enter your email address" className="w-full outline-none text-gray-400 text-base leading-7 whitespace-nowrap border border-[color:var(--neutrals-20,#D6DDEB)] bg-white grow justify-center  py-2.5 px-4 border-solid items-start max-md:pr-5" />

                  <button className="text-white text-center text-base font-bold leading-7 whitespace-nowrap justify-center items-stretch bg-indigo-600 grow px-6 py-3 max-md:px-5">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 mt-32 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="text-white text-base font-medium leading-7 grow whitespace-nowrap my-auto">
          2023 @ Huntly - Hycient. All rights reserved.
        </div>
        {/* <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddac5565f16886e1ffde1d96d549eb0440cc328883ea806c8136d1709475ad8d?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
          className="aspect-[8] object-contain object-center w-64 overflow-hidden self-stretch shrink-0 max-w-full"
          alt="Footer Image"
        /> */}
      </div>
    </div>
  );
};