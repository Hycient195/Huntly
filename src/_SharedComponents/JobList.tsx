import Link from "next/link";
import { useRouter } from "next/navigation";
import { memo } from "react";

interface IProps {
  arrangement: "grid"|"list"
  routePrefix: string
}

const JobList: React.FC<IProps> = memo(({ arrangement, routePrefix }) => {
  const router = useRouter();


  return (
    <div className="overflow-y-auto mt-2 max-h-[calc(100vh-15rem)]">
      <ul className={`grid ${arrangement === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": "grid-flow-row"} flex-col gap-2 overflow-y-auto`}>
        {
          Array.from({ length: 20 }).map((_, index: number) => (
            <li key={index}>
              <Link href={`${routePrefix}/${index}`} className={`${arrangement === "grid" ? "grid-flow-row" : "grid-cols-[0.5fr_5fr_1.5fr]"} border border-slate-300 hover:cursor-pointer bg-primary-pale/80 duration-300 p-4 lg:p-6 xl:p-4 grid gap-x-2 gap-y-3 lg:gap-x-3 xl:gap-x-4`}>
              <figure className="w-[50px] justify-self-center rounded-full aspect-square h-auto bg-primary/50">

              </figure>
              <div className={`${arrangement === "grid" && "items-center"} flex flex-col gap-y-0.5`}>
                <h3 className={`${arrangement === "grid" && "text-center"} text-md text-slate-700 font-medium`}>Brand Designer</h3>
                <p className={`${arrangement === "grid" && "text-center"} text-slate-400 text-xs`}>Dropbox . San Francisco USA</p>
                <ul className="flex flex-row flex-wrap items-center justify-center gap-2">
                  <li className="">
                    <button className="px-3 py-1 rounded-full text-xs bg-emerald-100/60 text-emerald-500">Full Time</button>
                  </li>
                  <li className="">
                    <button className="px-3 py-1 rounded-full text-xs  text-yellow-500 border border-yellow-500">Marketing</button>
                  </li>
                  <li className="">
                    <button className="px-3 py-1 rounded-full text-xs text-primary border border-primary">Design</button>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-y-2">
                <button className="btn-primary text-sm w-full py-2">Apply</button>
                <div className="bg-slate-300 w-full h-[6px]">
                  <div className="bg-emerald-400 h-full w-[25%]"></div>
                </div>
                <p className="text-xs font-normal text-slate-400"><span className="font-semibold text-slate-700">8 applied</span> of 12 capacity</p>
              </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
})

JobList.displayName = "JobList";
export default JobList;