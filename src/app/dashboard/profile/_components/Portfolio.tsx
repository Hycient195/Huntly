import Link from "next/link";
import { projects } from "../data";
import Image from "next/image";

export default function UserProfilePortfolio({ projectList }: { projectList: typeof projects}) {
  return (
    <section className="border border-slate-300 p-3 lg:p4 xl:p-5 relative">
      <div className="flex flex-row gap-x-2 justify-between items-center">
        <h2 className="text-lg text-slate700 font-semibold">Portfolio</h2>
        <button className="btn-secondary px-1.5 py-1 rounded-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>

      <div className="w-full grid mt-2">
        <ul className="overflow-x-scroll snap-x snap-mandatory grid grid-flow-col gap-3 lg:gap-4">
          {
            projectList && projectList?.map((project: typeof projects[0], index: number) => (
              <li key={index} className=" snap-start snap-always w-[clamp(200px,10vw,220px)]">
                <Link href="">
                  <figure className="w-full h-auto aspect-square object-cover overflow-hidden relative">
                    <Image fill alt={project.title} className="object-conver" src={project.image} />
                  </figure>
                  <div className="mt-2 lg:mt-3">
                    <h3 className="text-slate-600 font-xl">{project.title}</h3>
                  </div>
                </Link>
              </li>
            )) 
          }
        </ul>
      </div>
     
    </section>
  )
}