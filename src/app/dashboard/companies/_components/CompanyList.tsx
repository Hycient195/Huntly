"use client";

import { useRouter } from "next/navigation";
import { memo } from "react";
import { companies, industryColorCode } from "../data";
import Image from "next/image";

interface IProps {
  arrangement: "grid"|"list"
  companies: typeof companies
}

const CompanyList = memo(({ arrangement, companies }: IProps) => {
  const router = useRouter();

  return (
    <div className="overflow-y-auto mt-2 max-h-[calc(100vh-15rem)] mb-10">
      <ul className={`grid ${arrangement === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": "grid-flow-row"} flex-col gap-2 overflow-y-auto`}>
        {
          companies && companies.map((company: typeof companies[0], index: number) => (
            <li onClick={() => router.push(`/dashboard/jobs/${index}`)} className={`${arrangement === "grid" ? "grid-flow-row" : "grid-cols-[0.5fr_5fr_1.5fr]"} border relative border-slate-300 hover:cursor-pointer hover:bg-primary-pale/80 duration-300 p-4 lg:p-6 xl:p-4 grid gap-x-2 gap-y-4 lg:gap-x-3 xl:gap-x-4`}>
              <span className="px-2 py-0.5 text-xs bg-primary-pale text-primary absolute top-2 right-2">7 Jobs</span>
              <figure className="w-[50px] relative object-cover justify-self-cente rounded-full aspect-square h-auto bg-primary/50">
                <Image fill alt={company.name} src={company.image} />
              </figure>
              <div className={`${arrangement === "grid" && "items-cente"} flex flex-col gap-y-1.5`}>
                <h3 className={`${arrangement === "grid" && "text-cent"} text-md text-slate-700 font-medium`}>{company?.name}</h3>
                <p className={`${arrangement === "grid" && "text-cente"} text-slate-400 text-xs`}>{company?.description}</p>
                <ul className="flex flex-row flex-wrap gap-2 mt-2">
                  {
                    company.industry && company.industry.map((industry: string, index: number) => (
                      <li key={index} className="">
                        <button className={`${industryColorCode[industry as keyof typeof industryColorCode]} px-3 py-1 rounded-full text-xs`}>{industry}</button>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
});

export default CompanyList;