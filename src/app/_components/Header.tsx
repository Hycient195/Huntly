"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { memo, useState } from "react";
import MobileNavHomeMenuModal from "./MobileNavModal";

const Header = memo(() => {
  const router = useRouter();
  const pathname = usePathname();

  const [ isMobileNavOpen, setIsMobilenNavOpen ] = useState<boolean>(false);

  return (
    <div className="justify-center items-center flex w-full flex-col px-5 max-md:max-w-full">
        <div className="flex w-full max-w-[1192px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="justify-between items-end flex gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
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
              <div className="text-slate-700 text-3xl font-bold leading-9 tracking-tight my-auto">
                Huntly
              </div>
            </Link>
           
            <ul className="hidden md:grid grid-flow-col gap-x-[1vw] max-w-max ml-[clamp(20px,2vw,60px)]">
              <li className={`border-b-4 border-white duration-300 ${pathname.includes("/find-jobs") ? " border-b-primary text-primary" : "text-slate-500"}`}>
                <button onClick={() => router.push("/find-jobs")} className="font-medium  px-1 py-4 capitalize">Find Jobs</button>
              </li>
              <li className={`border-b-4 border-white duration-300 ${pathname.includes("/browse-companies") ? " border-b-primary text-primary" : "text-slate-500"}`}>
                <button onClick={() => router.push("/browse-companies")} className="font-medium px-1 py-4 capitalize">Browse Companies</button>
              </li>
            </ul>

            {/* <div className="justify-between items-stretch flex gap-4 pt-6">
              <div className="text-slate-600 text-base font-medium leading-7 items-stretch grow pb-7">
                Find Jobs
              </div>
              <div className="text-slate-600 text-base font-medium leading-7 items-stretch grow pb-7">
                Browse Companies
              </div>
            </div> */}
          </div>
          <div className="justify-between items-center flex gap-5 pl-6 py-3.5 max-md:pl-5">
            <Link href="/sign-up" className="hidden md:block text-indigo-600 text-center text-base font-bold leading-7 my-auto">
              Sign Up
            </Link>
            <div className="self-stretch hidden md:flex justify-between gap-4 items-start">
              <div className="bg-zinc-200 w-px shrink-0 h-12" />
              <Link href="/dashboard/overview" className="text-white flex text-center text-base font-bold leading-7 justify-center items-center bg-indigo-600 self-stretch grow px-6 py-2">
                Dashboard
              </Link>
            </div>
            <button onClick={() => setIsMobilenNavOpen(true)} className="block md:hidden border text-primary border-primary/60 px-3 py-1.5 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        <MobileNavHomeMenuModal isOpen={isMobileNavOpen} setIsOpen={setIsMobilenNavOpen} />
      </div>
  )
});

Header.displayName = "Header";
export default Header;