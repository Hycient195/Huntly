"use client";
import { memo, useState } from "react";

const MessagesPage = memo(() => {
  const [ isMessageSelected, setIsMessageSelected ] = useState<boolean>(false)
  return (
    <main className="grid lg:grid-cols-[1fr_4fr]">
      <section className={`${isMessageSelected ? "hidden" : "grid"} border-r border-r-slate-300 min-w-[300px] p-4 lg:p-[clamp(10px,5%,25px)] lg:grid grid-rows-[max-content_1fr] items-center gap-y-4`}>
        <div className="w-full">
          <input type="search" placeholder="Search messages" className="outline border w-full border-slate-300 outline-none focus:outline-2 focus:outline-slate-300 rounded-sm text-slate-500 placeholder:text-slate-300 px-4 py-2" />
        </div>
        <ul className="w-full overflow-auto h-[calc(100vh-10em)] scroll">
          {
            Array.from({ length: 25}).map((_, index: number) => (
              <li key={index} className=" border-b  border-b-slate-200">
                <button onClick={() => setIsMessageSelected(true)} className="px-1 py-2 lg:p-2 grid grid-cols-[max-content_1fr] flex-row gap-x-2 w-full rounded-md hover:bg-indigo-50 duration-300">
                  <figure className="bg-indigo-400 w-[45px] rounded-full aspect-square h-auto">
            
                  </figure>
                  <div className="flex flex-col gap-y-0.5 w-full overflow-hidden text-ellipsis">
                    <p className="text-slate-700 flex justify-between line-clamp-1 items-center g-2">Jake Ozil <span className="text-slate-400 text-xs">12 mins ago</span></p>
                    <p className="text-sm text-slate-400 text-left line-clamp-1 w-full">We wish to invite you to the interview in you to the interview you to the interview</p>
                  </div>
                </button>
              </li>
            ))
          }
        </ul>
      </section>

      {/* Right Section */}
      <section className={`${isMessageSelected ? "grid" : "hidden"} lg:grid grid-rows-[max-content_1fr_max-content]`}>
        <div className="border-b border-b-slate-300 px-2 lg:px-[clamp(10px,5%,25px)] py-2 lg:py-4 flex flex-row gap-x-2 justify-between">
          <div className="flex flex-row items-center gap-x-2">
            <button onClick={() => setIsMessageSelected(false)} className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <figure className="bg-indigo-400 w-[60px] rounded-full aspect-square h-auto">
            
            </figure>
            <div className="flex flex-col w-full overflow-hidden text-ellipsis">
              <p className="text-slate-700 flex font-medium justify-between line-clamp-1 items-center g-2">Carl Lenon</p>
              <p className="text-sm text-slate-500 text-left line-clamp-1 w-full">Cheif recruiter at Monaco</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-[clamp(10px,3%,20px)]">
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9" />
              </svg>
            </button>
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </button>
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
            </button>
          </div>
        </div>

        <div className=" overflow-y-auto p-2">
          <div className="profile_overview flex flex-col gap-y-2 items-center my-[2vh]">
            <figure className="bg-indigo-400 w-[100px] rounded-full aspect-square h-auto">
            
            </figure>
            <h3 className="text-slate-600 text-2xl font-semibold">Jan Mayer</h3>
            <p className="text-sm text-slate-500 text-center line-clamp-1 w-full">Cheif recruiter at <span className="text-primary">Monaco</span></p>
            <p className="text-sm text-slate-500 text-center line-clamp-1 w-full">This is the very beginning of your direct message with <span className="font-semibold text-slate-500">Jan Mayer</span></p>

          </div>

          <div className="h-[1px] bg-slate-300"></div>

        </div>

        <div className="p-4">
          <div className="grid grid-cols-[max-content_1fr_max-content_max-content] gap-x-2 lg:gap-x-3  border border-slate-300 rounded-md p-1.5">
            <button className="ml-2 text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
              </svg>
            </button>
            <textarea placeholder="Reply message" rows={1} className="px-2 py-2 text-slate-500 outline-none placeholder:text-slate-300" />
            <button className="text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            </button>
            <button className="bg-primary rounded-sm px-6 py-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
});

export default MessagesPage