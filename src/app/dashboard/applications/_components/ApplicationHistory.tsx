"use client"

import { useState } from "react"
import { applicationHistory, statusColor } from "./data";

type TView = ("all"|"in-review"|"interviewing"|"assessment"|"offered"|"rejected");

export default function ApplicationHistory() {
  const views = ["all","in-review","interviewing","assessment","offered","rejected"]
  
  const [ currentView, setCurrentView ] = useState<TView>("all")

  return (
    <section className="">
      <ul className="grid grid-flow-col gap-x-[1vw] max-w-max">
        {
          views.map((view: typeof views[0], index: number) => (
            <li key={index} className={`border-4 border-white duration-300 ${view === currentView && " border-b-primary"}`}>
              <button onClick={() => setCurrentView(view as TView)} className="font-medium text-slate-500 px-1 py-2 capitalize">{view.replace(/-/g, " ")}</button>
            </li>
          ))
        }
      </ul>

      <div className="h-[1px] liner bg-slate-300 fullwidth" />

      <div className="p-[1.5vmin]">
        <div className="flex flex-row gap-x-2 justify-between my-2">
          <h3 className="text-slate-600 text-xl font-semibold">Applications History</h3>
          <div className="flex flex-row gap-x-2">
            <button className="flex flex-row items-center gap-x-1 px-4 py-1.5 border border-slate-300 text-slate-700 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              Search
            </button>
            <button className="flex flex-row items-center gap-x-1 px-4 py-1.5 border border-slate-300 text-slate-700 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              Filter
            </button>
          </div>
        </div>

        <div className="table_container overflow-auto relative max-h-[calc(100vh-250px)]">
          <table className="w-full ]" cellPadding={14}>
            <thead className="w-full sticky top-0 bg-white border-y border-y-slate-300">
              <tr className="text-slate-500 font-bold">
                <td>#</td>
                <td>Company Name</td>
                <td>Roles</td>
                <td>Date Applied</td>
                <td>Status</td>
                <td style={{ width: "100px"}}>Action</td>
              </tr>
            </thead>

            <tbody className="">
              {
                applicationHistory && applicationHistory.filter((arg: typeof applicationHistory[0]) => currentView === "all" ? arg : arg.status.includes(currentView)).map((each: typeof applicationHistory[0], index: number) => (
                  <tr key={index} className="text-slate-500 font-semi-bold even:bg-slate-100">
                    <td>{index + 1}</td>
                    <td>{each.companyName}</td>
                    <td>{each.roles}</td>
                    <td>{each.dateApplied}</td>
                    <td><span className={`${statusColor[each.status as keyof typeof statusColor]} px-4 p-1.5 capitalize rounded-full`}>{each.status}</span></td>
                    <td style={{ width: "100px"}}>Action</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="flex sticky bottom-4 bg-white mx-auto divide-x divide-dashed border max-w-max rounded-md border-primary/50  divide-blue-400 mt-4">
          <button className="bg-primary-pale/30 rounded-tl-lg rounded-bl-lg text-primary/90 px-6 py-2">NEXT</button>
          {
            Array.from({ length: 6}).map((_, index: number) => (
              <button className="bg-primary-pale/30 text-primary/90 px-6 py-2">{index+1}</button>
            ))
          }
          <button className="bg-primary-pale/30 rounded-tr-lg rounded-br-lg text-primary/90 px-6 py-2">PREV</button>
        </div>
      </div>
    </section>
  )
}