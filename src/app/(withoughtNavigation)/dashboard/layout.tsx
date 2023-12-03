import Image from "next/image"
import { navRoutes, settings } from "./data"
import { NavList } from "./_components/NavList";
import Link from "next/link";

interface IProps {
  children: React.ReactNode
  params: any
}

export default function DashboardLayout({ children, params }: IProps) {

  return (
    <div className="grid fixed w-full grid-cols-1 md:grid-cols-[max-content_1fr]">
      <aside className="hidden md:block max-w-[270px] w-[20vw] min-w-[240px] bg-indigo-50/30 h-screen border border-r-slate-200">
        <Link href="/" className="px-4 py-3 flex flex-row items-center gap-x-2">
          <Image width={35} height={35} alt="Logo" src="/logo.svg" />
          <h1 className="text-2xl font-semibold -mb-2 text-slate-800">Huntly</h1>
        </Link>

        <NavList route={navRoutes} />

        <div className="h-[1px] bg-slate-300"></div>

        <p className="text-md mt-[3vh] px-6 font-semibold text-slate-500">Settings</p>
        
        <NavList route={settings} />

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

      <main className="w-full relative overflow-scroll h-screen max-h-[100vh] min-h-max grid grid-rows-[max-content_1fr]">
        <nav className="w-full z-[3] sticky top-0 bg-white flex justify-between py-3 px-6 border border-x-0 items-center border-b-slate-300">
          <h1 className="text-2xl font-bold text-slate-800">Messages</h1>
          <Link href="/" className="btn-secondary rounded-sm">Back to homepage</Link>
        </nav>

        {children}
      </main>
    </div>
  )
}