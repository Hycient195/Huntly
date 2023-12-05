"use client"

import Link from "next/link";
import { memo, useState } from "react";
import MobileNavMenuModal  from "./MobileNavModal";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DashboardNav = memo(() => {
  const [ isNavOpen, setIsNavOpen ] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="w-full z-[3] sticky top-0 bg-white flex justify-between py-2 md:py-3 px-3 md:px-4 xl:px-6 border border-x-0 items-center border-b-slate-300">
      <span className="flex flex-row items-center gap-x-1.5">
        <Link href="/" className="md:hidden block">
          <Image width={35} height={35} alt="Logo" src="/logo.svg" />
        </Link>
        <h1 className="text-2xl font-bold -mb-1 text-slate-700 capitalize">{pathname.split(/\//)[2]}</h1>
      </span>
      <button onClick={() => setIsNavOpen(true)} className="block md:hidden text-primary border border-primary/60 px-2 py-0.5 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <Link href="/" className="btn-secondary rounded hidden md:block">Back to homepage</Link>
      <MobileNavMenuModal isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
    </nav>
  )
})

export default DashboardNav;