import Modal from "@sharedComponents/Modal";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { mobileNavModalRoutes } from "../data";

interface IProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavHomeMenuModal: React.FC<IProps> = memo(({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const highlightActive = (arg: string): boolean => pathname.split(/\//).includes(arg.split(/\//)[0]);
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

          <ul className="flex flex-col p-2 gap-y-2.5 my-[2vh]">
            {
              mobileNavModalRoutes.map((item: typeof mobileNavModalRoutes[0], index: number) => (
                <li key={index} className={`pl-2 pr-2 border-l-4 ${highlightActive(item.route) ? "border-l-indigo-500" : "border-l-white"}`}>
                  <Link href={item.route} onClick={() => { setIsOpen && setIsOpen(false)}} className={`flex px-2 py-3 rounded-md flex-row gap-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 ${highlightActive(item.route) && "bg-indigo-50 text-indigo-600"}`}>
                    {item.icon}
                    <p className="text-md">{item.text}</p>
                  </Link>
                </li>
              ))
            }
          </ul>
  
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

export default MobileNavHomeMenuModal;