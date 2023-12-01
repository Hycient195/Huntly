import * as React from "react";

export default function LatestJobCard() {
  return (
    <div className="gap-5 border border-slate-200/80 p-[clamp(10px,2vmin,30px)] bg-white grid grid-cols-1  md:grid-cols-[1fr_6fr] max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex justify-self-center self-cente items-stretch">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ef49ace-7a2d-4753-a516-72d17e58bec8?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
            className="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full max-md:mt-10"
            alt="Social Media Assistant"
          />
        </div>
        <div className="flex flex-col items-stretch w-[81%] max-md:w-full max-md:ml-0">
          <div className="items-stretch flex flex-col max-md:mt-10">
            <header className="text-slate-700 text-xl font-semibold leading-6">
              Social Media Assistant
            </header>
              <p className="text-slate-400 text-sm flex-wrap flex flex-row gap-2 items-center">
                Terraform
                <div className="h-[3px] w-[3px] rounded-full bg-slate-400"></div>
                 San Francisco, USA
              </p>
            <div className=" flex gap-2 mt-2 max-md:justify-cente flex-wrap  w-full">
              <div
                className="text-emerald-300 text-sm font-semibold leading-6 justify-center bg-emerald-300 bg-opacity-10 px-2.5 py-1 rounded-full"
                role="button"
                aria-label="Full-Time"
              >
                Full-Time
              </div>
              <div className="bg-zinc-200 w-px" />
              <div
                className="text-amber-400 text-sm font-semibold leading-6 justify-center border border-[color:var(--accents-yellow,#FFB836)] px-2.5 py-1 rounded-full border-solid"
                role="button"
                aria-label="Marketing"
              >
                Marketing
              </div>
              <div
                className="text-indigo-600 text-sm font-semibold leading-6 justify-center border border-[color:var(--brands-primary,#4640DE)] px-2.5 py-1 rounded-full border-solid"
                role="button"
                aria-label="Design"
              >
                Design
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}