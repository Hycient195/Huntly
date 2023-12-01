"use client"

import { useState } from "react";
import FilterSelector, { categoriesFilter, employmentFilter, jobLevel, salaryRange } from "../../../_SharedComponents/FiltterSelector";
import JobList from "../../../_SharedComponents/JobList";

export default function FindJobs() {
  const [ listArrangement, setListArrangement ] = useState<"grid"|"list">("list");

  return (
    <div className="flex flex-col justify-center items-stretch">
      <div className="bg-slate-50 flex w-full flex-col pb-12 px-5 max-md:max-w-full">
        <div className="self-center flex gap-4 mt-16 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-slate-800 text-center text-5xl font-semibold leading-[53px] grow whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">
            Find your
          </div>
          <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
            <div className="text-sky-400 text-center text-5xl font-semibold leading-[53px] whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">
              dream job
            </div>
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddf949154259989fb7ee0dcf2dad2088132f7fe5dab9fc9cc30b604a3ec8a0a2?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-[17.29] object-contain object-center w-[242px] self-center overflow-hidden"
            /> */}
          </div>
        </div>
        <div className="text-slate-600 text-center text-lg leading-7 self-center whitespace-nowrap mt-6 max-md:max-w-full">
          Find your next career at companies like HubSpot, Nike, and Dropbox
        </div>
       
        <section className=" mx-auto mt-5">
          <form className="border border-slate-200 bg-white px-[2vw] py-[2vh] grid grid-cols-[1fr_1fr_max-content] gap-x-[5%]">
            <div className="relative">
              <span className="absolute left-2 w-max top-0 bottom-0 flex items-center text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input type="text" placeholder="Job title or keyword" className="py-2 z-[12] w-full pr-4 pl-10 border-b outline-none text-slate-500 placeholder:text-slate-300 border-b-slate-300" />
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
      </div>
      
      {/* All Jobs Section */}
      <section className="p-2 my-2 md:mt-6 lg:mt-8 max-w-screen-xl w-full mx-auto md:p-6 lg:p-7 xl:p-8 grid gap-x-2 lg:gap-x-3 xl:gap-x-4 md:grid-cols-[1fr_5fr] max-h-[calc(100vh-6rem)] h-full">
        <aside className="border-r hidden md:block border-r-slate-300  overflow-y-auto min-w-[200px]">
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
        <div className=" w-full">
          <div className="flex flex-row w-full items-center gap-x-2 justify-between">
            <span className="">
              <h3 className="text-xl font-semibold">All Jobs</h3>
              <p className="text-slate-500 text-xs">Showing 73 results</p>
            </span>
            <span className="text-sm flex flex-row items-center gap-x-2">
              <p className="text-slate-400">Sort by: </p>
              <select name="" id="" className="text-slate-600 px-2 py-1 outline-none font-semibold appearance-none bg-white">
                <option value="">Most Relevant</option>
              </select>
              <button onClick={() => listArrangement === "grid" ? setListArrangement("list") : setListArrangement("grid")} className="text-slate-500 rounded-md hover:text-primary hover:bg-primary-pale p-2 duration-300">
                {
                  listArrangement === "grid"
                    ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                      </svg>
                    )
                }
              </button>
            </span>
          </div>

          <JobList routePrefix="/find-jobs" arrangement={listArrangement} />
          
        </div>
      </section>
    </div>
  );
}

