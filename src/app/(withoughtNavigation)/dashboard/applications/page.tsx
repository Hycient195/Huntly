import ApplicationHistory from "./_components/ApplicationHistory";

export default function DashboardApplications() {
  return (
    <main className="p-3 md:p-3 lg:p-4 xl:p-6">
      <h3 className="text-2xl font-bold text-slate-700">Keep it up Jake</h3>
      <p className="text-slate-500">Here is job applications status from July <span className="ordinal">1st</span> to July <span className="ordinal">20th</span></p>

      <div className="bg-primary-pale container relative justify-center md:items-center flex flex-col md:flex-row gap-2 lg:gap-4 py-[2.5vh] px-4 my-[2vh] rounded-md">
        <button className="text-slate-500 text-xs absolute top-2 right-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <figure className="bg-indigo-300 w-[55px] rounded-full aspect-square h-auto">
            
        </figure>
        <div className="flex max-w-max flex-col gap-y-0.5 w-full overflow-hidden text-ellipsis">
          <p className="text-primary font-semibold">New Feature</p>
          <p className="text-sm text-slate-400 text-left">We wish to invite you to the interview in you to the interview you to the interview</p>
        </div>
      </div>

      <ApplicationHistory />
    </main>
  )
}