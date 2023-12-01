import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const Header = memo(() => {
  return (
    <div className="justify-center items-center flex w-full flex-col px-5 max-md:max-w-full">
        <div className="flex w-full max-w-[1192px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="justify-between items-stretch flex gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <Link href="/" className="flex-row gap-x-2 self-center flex justify-center  my-auto">
              <figure className="relative w-[40px] aspect-square h-auto">
                <Image
                  alt="logo"
                  loading="lazy"
                  fill
                  src="/logo.svg"
                  className=" h-full w-full object-cover object-center"
                />
              </figure>
              <div className="text-slate-800 text-3xl font-bold leading-9 tracking-tight my-auto">
                Huntly
              </div>
            </Link>
           
            <div className="justify-between items-stretch flex gap-4 pt-6">
              <div className="text-slate-600 text-base font-medium leading-7 items-stretch grow pb-7">
                Find Jobs
              </div>
              <div className="text-slate-600 text-base font-medium leading-7 items-stretch grow pb-7">
                Browse Companies
              </div>
            </div>
          </div>
          <div className="justify-between items-center flex gap-5 pl-6 py-3.5 max-md:pl-5">
            <div className="text-indigo-600 text-center text-base font-bold leading-7 my-auto">
              Login
            </div>
            <div className="self-stretch flex justify-between gap-4 items-start">
              <div className="bg-zinc-200 w-px shrink-0 h-12" />
              <button className="text-white text-center text-base font-bold leading-7 justify-center items-center bg-indigo-600 self-stretch grow px-6 py-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
  )
});

export default Header;