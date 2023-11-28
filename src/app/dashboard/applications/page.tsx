import ApplicationHistory from "./_components/ApplicationHistory";

export default function DashboardApplications() {
  return (
    <main className="p-2 md:p-3 lg:p-4 xl:p-6">
      <h3 className="text-2xl font-medium text-slate-700">Keep it up Jake</h3>
      <p className="text-slate-500">Here is job applications status from July <span className="ordinal">1st</span> to July <span className="ordinal">20th</span></p>

      <div className="bg-primary-pale px-[20%] flex flex-row gap-x-2 lg:gap-x-4 py-[2.5vh] my-[2vh] rounded-md">
        <figure className="bg-indigo-400 w-[55px] rounded-full aspect-square h-auto">
            
        </figure>
        <div className="flex flex-col gap-y-0.5 w-full overflow-hidden text-ellipsis">
          <p className="text-primary font-medium flex justify-between line-clamp-1 items-center g-2">New Feature
            <button className="text-slate-500 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button></p>
          <p className="text-sm text-slate-400 text-left line-clamp-1 w-full">We wish to invite you to the interview in you to the interview you to the interview</p>
        </div>
      </div>

      <ApplicationHistory />
    </main>
  )
}