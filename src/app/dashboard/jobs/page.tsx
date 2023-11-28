import { memo } from "react";
import FilterSelector, { categoriesFilter, employmentFilter, jobLevel, salaryRange } from "./_components/FiltterSelector";

const DashboardJobs = memo(() => {
  return (
    <main className="p-2 md:p-3 lg:p-4 xl:p-6 h-screen grid grid-rows-[max-content_max-content_1fr]">
      <section className="">
        <form className="border border-slate-200  px-[2vw] py-[2vh] grid grid-cols-[1fr_1fr_max-content] gap-x-[5%]">

          <div className="relative">
            <span className="absolute left-2 top-0 bottom-0 w-full flex items-center text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
            <input type="text" placeholder="Job title or keyword" className="py-2 w-full pr-4 pl-10 border-b outline-none text-slate-500 placeholder:text-slate-300 border-b-slate-300" />
          </div>

          <div className="relative">
            <span className="absolute left-2 top-0 bottom-0 flex items-center text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <select name="" id="" className="py-2 pr-4 pl-10 w-full border-b outline-none bg-white appearance-none text-slate-400 placeholder:text-slate-300 border-b-slate-300">
              <option value="">Florence Italy</option>
              <option value="">Venice Italy</option>
              <option value="">Rome Italy</option>
            </select>
          </div>

          <button className="btn-primary">Search</button>
        </form>
        <p className="text-slate-400 mt-2 text-sm">Popular : UI Designer, UX Researcher, Android, Admin</p>
      </section>

      <div className="h-[1px] liner my-[2vh] bg-slate-300 fullwidth" />

      {/* Jobs Section */}
      <section className="grid gap-x-2 lg:gap-x-3 xl:gap-x-4 grid-cols-[1fr_5fr] max-h-[calc(100vh-12rem)] h-full">
        <aside className="border-r border-r-slate-300  overflow-y-auto">
          <details open className="appearance-none mb-5">
            <summary className="text-slate-500 text-center text-[0px] h-[15px] relative marker font-semibold items-center gap-x-2 justify-between marker:appearance-none mb-4 ">
              <h3 className=" text-[15px] block absolute">Type of Employment</h3>
            </summary>
            <FilterSelector filters={employmentFilter} />
          </details>

          <details open className="appearance-none mb-5">
            <summary className="text-slate-500 text-center text-[0px] h-[15px] relative marker font-semibold items-center gap-x-2 justify-between marker:appearance-none mb-4 ">
              <h3 className=" text-[15px] block absolute">Categories</h3>
            </summary>
            <FilterSelector filters={categoriesFilter} />
          </details>
          
          <details open className="appearance-none mb-5">
            <summary className="text-slate-500 text-center text-[0px] h-[15px] relative marker font-semibold items-center gap-x-2 justify-between marker:appearance-none mb-4 ">
              <h3 className=" text-[15px] block absolute">Job Level</h3>
            </summary>
            <FilterSelector filters={jobLevel} />
          </details>

          <details open className="appearance-none mb-5">
            <summary className="text-slate-500 text-center text-[0px] h-[15px] relative marker font-semibold items-center gap-x-2 justify-between marker:appearance-none mb-4 ">
              <h3 className=" text-[15px] block absolute">Salary Range</h3>
            </summary>
            <FilterSelector filters={salaryRange} />
          </details>
        </aside>

        {/* Job Lists Section */}
        <div className=" ">
          <div className="flex flex-row items-center gap-x-2 justify-between">
            <span className="">
              <h3 className="text-xl font-semibold">All Jobs</h3>
              <p className="text-slate-500 text-xs">Showing 73 results</p>
            </span>
            <span className="text-sm flex flex-row items-center gap-x-2">
              <p className="text-slate-400">Sort by: </p>
              <select name="" id="" className="text-slate-600 px-2 py-1 outline-none font-semibold appearance-none bg-white">
                <option value="">Most Relevant</option>
              </select>
              <button className="text-slate-500 rounded-md hover:text-primary hover:bg-primary-pale p-2 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg> */}
              </button>
            </span>
          </div>

          <div className="overflow-y-auto max-h-[calc(100vh-15rem)]">
            <ul className="grid flex-col gap-y-2 mt-2 overflow-y-auto">
              {
                Array.from({ length: 20 }).map((_, index: number) => (
                  <li className="border border-slate-300 p-4 lg:p-6 xl:p-4 grid grid-cols-[0.5fr_5fr_1.5fr] gap-x-2 lg:gap-x-3 xl:gap-x-4">
                    <figure className="w-[50px] justify-self-center rounded-full aspect-square h-auto bg-primary/50">

                    </figure>
                    <div className="flex flex-col gap-y-0.5">
                      <h3 className="text-md text-slate-700 font-medium">Brand Designer</h3>
                      <p className="text-slate-400 text-xs">Dropbox . San Francisco USA</p>
                      <ul className="flex flex-row items-center gap-x-2">
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
                  </li>
                ))
              }
            </ul>
          </div>
          
        </div>
      </section>
      {/* <div className="h-[1px]" /> */}
    </main>
  )
})

export default DashboardJobs