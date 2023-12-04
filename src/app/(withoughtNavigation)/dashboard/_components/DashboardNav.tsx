"use client"

import Link from "next/link";
import { memo, useState } from "react";
import MobileNavMenuModal  from "./MobileNavModal";

const DashboardNav = memo(() => {
  const [ isNavOpen, setIsNavOpen ] = useState<boolean>(false);

  return (
    <nav className="w-full z-[3] sticky top-0 bg-white flex justify-between py-2 md:py-3 px-4 md:px-6 border border-x-0 items-center border-b-slate-300">
      <h1 className="text-2xl font-bold text-slate-800">Messages</h1>
      <button onClick={() => setIsNavOpen(true)} className="block md:hidden border text-primary border-primary/60 px-3 py-2 rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <Link href="/" className="btn-secondary rounded-sm hidden md:block">Back to homepage</Link>
      <MobileNavMenuModal isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
    </nav>
  )
})

export default DashboardNav;