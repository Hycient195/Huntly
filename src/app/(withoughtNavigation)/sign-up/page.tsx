import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function SignIn() {
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
          </div>
        </div>
        <div className="flex relative flex-col items-stretch w-[90%] min-w-[300px] max-w-[500px] mx-auto">
          <form className="items-star flex w-full flex-col m-auto py-6">
            {/* <div className="justify-center items-stretch self-center flex gap-0">
              <div className="text-indigo-600 text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch bg-violet-100 grow px-3 py-2">
                Job Seeker
              </div>
              <div className="text-indigo-600 text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch bg-white grow px-3 py-2">
                Company
              </div>
            </div> */}
            <Link href="/" className="flex md:hidden absolute left-0 top-4 items-center gap-2">
              <figure className="relative h-[30px] w-[30px]">
                <Image
                  alt="sign-up banner"
                  fill
                  loading="lazy"
                  src="/logo.svg"
                  className="object-cover object-center"
                />
              </figure>
           
              <div className="text-gray-700 text-2xl font-bold leading-9 tracking-tight grow whitespace-nowrap mt-1 self-start">
                Huntly
              </div>
            </Link>
            <div className="self-stretch text-gray-600 text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-10 mt-6">
              Get more opportunities{" "}
            </div>
            <div className="justify-center items-center self-stretch border border-[color:var(--brands-secondary,#CCCCF5)] flex w-full flex-col mt-2 md:mt-6 px-16 py-3 border-solid max-md:px-5">
              <button type="button" className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M18.6711 8.36824H17.9998V8.33366H10.4998V11.667H15.2094C14.5223 13.6074 12.6761 15.0003 10.4998 15.0003C7.73859 15.0003 5.49984 12.7616 5.49984 10.0003C5.49984 7.23908 7.73859 5.00033 10.4998 5.00033C11.7744 5.00033 12.934 5.48116 13.8169 6.26658L16.174 3.90949C14.6857 2.52241 12.6948 1.66699 10.4998 1.66699C5.89775 1.66699 2.1665 5.39824 2.1665 10.0003C2.1665 14.6024 5.89775 18.3337 10.4998 18.3337C15.1019 18.3337 18.8332 14.6024 18.8332 10.0003C18.8332 9.44158 18.7757 8.89616 18.6711 8.36824Z" fill="#FFC107"/>
                  <path d="M3.12744 6.12158L5.86536 8.12949C6.60619 6.29533 8.40036 5.00033 10.4999 5.00033C11.7745 5.00033 12.9341 5.48116 13.817 6.26658L16.1741 3.90949C14.6858 2.52241 12.6949 1.66699 10.4999 1.66699C7.29911 1.66699 4.52327 3.47408 3.12744 6.12158Z" fill="#FF3D00"/>
                  <path d="M10.4998 18.3336C12.6523 18.3336 14.6081 17.5099 16.0869 16.1703L13.5077 13.9878C12.6429 14.6454 11.5862 15.0011 10.4998 15.0003C8.3323 15.0003 6.49189 13.6182 5.79855 11.6895L3.08105 13.7832C4.46022 16.482 7.26105 18.3336 10.4998 18.3336Z" fill="#4CAF50"/>
                  <path d="M18.6713 8.36759H18V8.33301H10.5V11.6663H15.2096C14.8809 12.5898 14.2889 13.3968 13.5067 13.9876L13.5079 13.9868L16.0871 16.1693C15.9046 16.3351 18.8333 14.1663 18.8333 9.99967C18.8333 9.44092 18.7758 8.89551 18.6713 8.36759Z" fill="#1976D2"/>
                </svg>
                <span  className="text-indigo-600 text-center text-base font-bold leading-7 self-stretch grow whitespace-nowrap">
                  Sign Up with Google
                </span>
              </button>
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-4 mt-7 max-md:justify-center">
              <div className="bg-zinc-200 self-center w-[109px] shrink-0 h-px my-auto" />
              <div className="text-gray-500 text-center text-base leading-7">
                Or sign up with email
              </div>
              <div className="bg-zinc-200 self-center w-[108px] shrink-0 h-px my-auto" />
            </div>
            <label htmlFor="fullname" className="mt-7">
              <p className="text-slate-600 text-base font-semibold leading-7 self-stretch whitespace-nowrap">Full Name</p>
              <input id="fullname" type="text" placeholder="Enter your full name" className="text-gray-500 w-full outline-offset-1 placeholder:text-slate-300 focus:outline focus:outline-2 focus:outline-slate-400/60 text-base leading-7 whitespace-nowrap self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] justify-center mt-1 pl-4 pr-16 py-2.5 border-solid items-start max-md:pr-5" />
            </label>

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
              <div className="text-gray-600 text-base leading-7 whitespace-nowrap">
                Already have an account?
              </div>
              <Link href="/sign-in" className="text-indigo-600 text-center text-base font-semibold leading-6 whitespace-nowrap self-start">
                Login
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


