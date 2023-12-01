"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FeaturedJobs() {
  const router = useRouter();
  const arrangement = "grid";

  return (
    <div className="items-center bg-white flex flex-col pb-12 px-5">
      <div className="flex w-full max-w-[1192px] flex-col items-stretch mb-6 max-md:max-w-full">
        <div className="justify-between items-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-sky-400 text-5xl font-semibold leading-[53px] grow shrink basis-auto max-md:text-4xl max-md:leading-[49px]">
            <span className="text-slate-800">Featured </span>
            <span className="text-sky-400">jobs</span>
          </div>
          <div className="justify-end items-stretch flex gap-4 mt-7 self-end">
            <div className="text-indigo-600 text-center text-base font-semibold leading-7">
              Show all jobs
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d06aec3-fe28-4c43-974f-c4e54af9e898?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
            />
          </div>
        </div>
       
        <div className="overflow-y-auto mt-2 max-h-[calc(100vh-15rem)]">
      
      
    </div>
      </div>
    </div>
  );
}


