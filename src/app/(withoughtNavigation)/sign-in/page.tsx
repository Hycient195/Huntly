import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function SignUp() {
  return (
    <div className=" h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="hidden md:flex flex-col items-stretch  max-md:w-full max-md:ml-0">
          <div className="bg-slate-50 justify-between flex grow flex-col w-full pl-16 pr-14 pt-7 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
            <Link href="/" className="flex  items-center gap-2 ml-14 max-md:ml-2.5">
              <figure className="relative h-[40px] w-[40px]">
                <Image
                  alt="sign-up banner"
                  fill
                  loading="lazy"
                  src="/logo.svg"
                  className="object-cover object-center"
                />
              </figure>
           
              <div className="text-gray-800 text-3xl font-bold leading-9 tracking-tight grow whitespace-nowrap mt-1 self-start">
                Huntly
              </div>
            </Link>
            <figure className="relative max-h-[80vh] w-full h-full ">
              <Image
                alt="sign-up banner"
                fill
                loading="lazy"
                src="/images/sign-up/sign-in-banner.png"
                className="object-contain bottom-0  "
              />
            </figure>
            {/* <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df593ae6-9b01-4b09-ba2f-0d9515048fb2?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df593ae6-9b01-4b09-ba2f-0d9515048fb2?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df593ae6-9b01-4b09-ba2f-0d9515048fb2?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df593ae6-9b01-4b09-ba2f-0d9515048fb2?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df593ae6-9b01-4b09-ba2f-0d9515048fb2?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df593ae6-9b01-4b09-ba2f-0d9515048fb2?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df593ae6-9b01-4b09-ba2f-0d9515048fb2?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df593ae6-9b01-4b09-ba2f-0d9515048fb2?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-[0.75] object-contain object-center w-full overflow-hidden self-stretch mt-28 max-md:max-w-full max-md:mt-10"
            /> */}
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[90%] min-w-[300px] max-w-[500px] mx-auto">
          <form className="items-star flex w-full flex-col m-auto">
            <div className="justify-center items-stretch self-center flex gap-0">
              <div className="text-indigo-600 text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch bg-violet-100 grow px-3 py-2">
                Job Seeker
              </div>
              <div className="text-indigo-600 text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch bg-white grow px-3 py-2">
                Company
              </div>
            </div>
            <div className="self-stretch text-gray-800 text-center text-3xl font-semibold leading-10 mt-6">
              Get more opportunities{" "}
            </div>
            <div className="justify-center items-center self-stretch border border-[color:var(--brands-secondary,#CCCCF5)] flex w-full flex-col mt-6 px-16 py-3 border-solid max-md:px-5">
              <div className="flex items-center gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b988f7712318423a3df39d8df060b50098c99b607cee87a8b38d2842a2623ad1?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <button type="button" className="text-indigo-600 text-center text-base font-bold leading-7 self-stretch grow whitespace-nowrap">
                  Sign Up with Google
                </button>
              </div>
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-4 mt-7 max-md:justify-center">
              <div className="bg-zinc-200 self-center w-[109px] shrink-0 h-px my-auto" />
              <div className="text-gray-800 text-center text-base leading-7">
                Or log in with email
              </div>
              <div className="bg-zinc-200 self-center w-[108px] shrink-0 h-px my-auto" />
            </div>

            <label htmlFor="fullname" className="mt-7">
              <p className="text-slate-600 text-base font-semibold leading-7 self-stretch whitespace-nowrap">Email</p>
              <input id="fullname" type="email" placeholder="Enter email address" className="text-gray-500 w-full outline-offset-1 placeholder:text-slate-300 focus:outline focus:outline-2 focus:outline-slate-400/60 text-base leading-7 whitespace-nowrap self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] justify-center mt-1 pl-4 pr-16 py-2.5 border-solid items-start max-md:pr-5" />
            </label>

            <label htmlFor="fullname" className="mt-7">
              <p className="text-slate-600 text-base font-semibold leading-7 self-stretch whitespace-nowrap">Password</p>
              <input id="fullname" type="password" placeholder="Enter password" className="text-gray-500 w-full outline-offset-1 placeholder:text-slate-300 focus:outline focus:outline-2 focus:outline-slate-400/60 text-base leading-7 whitespace-nowrap self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] justify-center mt-1 pl-4 pr-16 py-2.5 border-solid items-start max-md:pr-5" />
            </label>
            <button type="submit" className="text-white text-center text-base font-bold leading-7 whitespace-nowrap justify-center items-center self-stretch bg-indigo-600 mt-6 px-16 py-3 max-md:px-5">
              Continue
            </button>
            <div className="items-stretch self-stretch flex gap-2 mt-6">
              <div className="text-gray-800 text-base leading-7 whitespace-nowrap">
                Already have an account?
              </div>
              <Link href="/sign-up" className="text-indigo-600 text-center text-base font-semibold leading-6 whitespace-nowrap self-start">
                Sign Up
              </Link>
            </div>
            <div className="self-stretch text-indigo-600 text-sm leading-6 mt-6">
              <span className="text-slate-500">
                By clicking 'Continue', you acknowledge that you have read and
                accept the
              </span>
              <span className="text-indigo-600">Terms of Service</span>
              <span className="text-slate-500"> and </span>
              <span className="text-indigo-600">Privacy Policy.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


