import Image from "next/image"
import { headers } from "next/headers";
import { navRoutes, settings } from "./data"
import Link from "next/link"
import { NavList } from "./_components/NavList";

interface IProps {
  children: React.ReactNode
  params: any
}

export default function DashboardLayout({ children, params }: IProps) {
  const heads = headers()

 const pathname = heads.get('x-url') as string;
 
 console.log(pathname);
//  @ts-ignore
  console.log(children?.props.childPropSegment)

  const highlightActive = (arg: string): boolean => pathname.includes(arg);
  return (
    <div className="grid fixed w-full grid-cols-[max-content_1fr]">
      <aside className="max-w-[270px] w-[20vw] min-w-[240px] bg-indigo-50/30 h-screen border border-r-slate-200">
        <div className="p-3">
          {/* <Image /> */}
          <h1 className="text-2xl font-semibold text-slate-800">Huntly</h1>
        </div>

        <NavList route={navRoutes} />

        <div className="h-[1px] bg-slate-300"></div>

        <p className="text-md mt-[3vh] px-6 font-semibold text-slate-500">Settings</p>
        
        <NavList route={settings} />

        <div className="flex flex-row gap-x-3 items-center p-4 self-end absolute bottom-3">
          <figure className="bg-indigo-400 w-[45px] rounded-full aspect-square h-auto">
            
          </figure>
          <span className="flex flex-col gap-y-0.5">
            <p className="text-slate-800 font-semibold">Hycient Onyeukwu</p>
            <a href="https://hycient.vercel.app" target="_blank" rel="noreferrer" className="text-sm underline text-slate-500">hycient.vercel.app</a>
          </span>
        </div>
      </aside>

      <main className="w-full relative overflow-scroll h-screen max-h-[100vh] min-h-max grid grid-rows-[max-content_1fr]">
        <nav className="w-full z-[2] sticky top-0 bg-white flex justify-between py-3 px-6 border border-x-0 items-center border-b-slate-300">
          <h1 className="text-2xl font-bold text-slate-800">Messages</h1>
          <button className="btn-secondary">Back to homepage</button>
        </nav>

        {children}
      </main>
    </div>
  )
}