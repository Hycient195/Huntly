import Modal from "@sharedComponents/Modal";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { NavList } from "./NavList";
import { navRoutes, settings } from "../data";

interface IProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavMenuModal: React.FC<IProps> = memo(({ isOpen, setIsOpen }) => {

  if (isOpen) {
    return (
        <aside className="bg-white z-[1] fixed md:hidden bottom-0 left-0 w-full h-full border border-r-slate-200">
          <button onClick={() => setIsOpen(false)} className="absolute right-3 top-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="/" className="px-4 py-3 flex flex-row  max-w-max items-center gap-x-2">
            <Image width={35} height={35} alt="Logo" src="/logo.svg" />
            <h1 className="text-2xl font-semibold -mb-2 text-slate-800">Huntly</h1>
          </Link>
  
          <NavList setIsOpen={setIsOpen} route={navRoutes} />
  
          <div className="h-[1px] bg-slate-300"></div>
  
          <p className="text-md mt-[3vh] px-6 font-semibold text-slate-500">Settings</p>
          
          <NavList setIsOpen={setIsOpen} route={settings} />
  
          <div className="flex flex-row gap-x-3 items-center p-4 self-end absolute bottom-3">
            <div className="bg-indigo-400 relative w-[52px] overflow-hidden rounded-full aspect-square h-auto">
              <Image fill alt="logged in user" className="w-full rounded-full h-auto object-cover" src="/myPic.jpg" />
            </div>
            <span className="flex flex-col gap-y-0.5">
              <p className="text-slate-800 font-semibold">Hycient Onyeukwu</p>
              <a href="https://hycient.vercel.app" target="_blank" rel="noreferrer" className="text-sm underline text-slate-500">hycient.vercel.app</a>
            </span>
          </div>
        </aside>
    )
  }
})

MobileNavMenuModal.displayName = "MobileNavMenuModal";
export default MobileNavMenuModal;