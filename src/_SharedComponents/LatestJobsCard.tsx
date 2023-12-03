import { openJobs } from "@sharedData/openJobs";
import Image from "next/image";
import * as React from "react";

export default function LatestJobCard({ job }: { job: typeof openJobs[0]}) {
  return (
    <div className="gap-5 border border-slate-200/80 p-[clamp(10px,2vmin,30px)] bg-white grid grid-cols-1  md:grid-cols-[1fr_6fr] max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="grid grid-cols-[max-content_1fr] items-stretch">
          <figure className="relative h-full max-h-14 w-auto aspect-square overflow-hidden">
            <Image alt={job.companyName} fill src={job.image} />
          </figure>
        </div>
        <div className="flex flex-col items-stretch w-[81%] max-md:w-full max-md:ml-0">
          <div className="items-stretch flex flex-col max-md:mt-10">
            <div className="text-slate-600 text-xl font-semibold leading-6">
              {job?.title}
            </div>
              <p className="text-slate-400 text-sm flex-wrap flex flex-row gap-2 items-center">
                {job?.companyName}
                <div className="h-[3px] w-[3px] rounded-full bg-slate-400"></div>
                 {job?.location?.city} {job.location?.country}
              </p>
            <div className=" flex gap-2 mt-2 flex-wrap  w-full">
              <div
                className="text-emerald-300 text-xs justify-center bg-emerald-300 bg-opacity-10 px-3 py-1 rounded-full"
                aria-label="Full-Time"
              >
                {job?.jobType}
              </div>
              <div className="bg-zinc-200 w-px" />
              <div
                className="text-amber-400 text-xs justify-center border border-yellow-500 px-3 py-1 rounded-full border-solid"
                aria-label="Marketing"
              >
                {job?.jobIndustry}
              </div>
             
            </div>
          </div>
        </div>
      </div>
  );
}