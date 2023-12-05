import { openJobs } from "@sharedData/openJobs";
import Image from "next/image";

function OverviewPage() {
  return (
    <main className="p-3 b-6 md:p-4 xl:p-6  grid grid- md:grid-rows-[1fr_4fr_7fr] gap-6 md:gap-4 h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] lg:gap-5">
      <section className="flex flex-row items-start gap-4 justify-between">
        <div className="header">
          <h1 className="header-title text-2xl font-bold text-slate-700">Good morning, Jake</h1>
          <p className="header-subtitle leading-5 text-sm text-slate-500">
            Here is what&apos;s happening with your job search applications from July
            19 - July 25.
          </p>
        </div>
        <button className="date-range border flex flex-row min-w-max gap-1.5 px-2 py-1 rounded items-center text-slate-500">
          <span className="date-range-text">Jul 19 - Jul 25</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr]  lg:grid-cols-[1fr_1.3fr_1.6fr] gap-2 md:gap-3 xl:gap-4">
        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-2  md:gap-3 lg:gap-4 h-full">
          <div className="border shadow rounded p-3 lg:p-4 flex flex-col gap-4">
            <h3 className="text-slate-600 font-semibold">Total Jobs Applied</h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">45</h1>
          </div>
          <div className="border shadow rounded p-3 lg:p-4 flex flex-col gap-4">
            <h3 className="text-slate-600 font-semibold">Interviewed</h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">18</h1>
          </div>
        </div>

        <div className="border shadow min-h-[250px] md:min-h-0 grid grid-rows-[max-content_1fr_max-content] rounded p-3 lg:p-4 gap-3">
          <h3 className="text-slate-600 font-semibold">Total Jobs Applied</h3>
          <div className="grid grid-flow-col justify-self-center items-center gap-2 max-h-max min-w-max ">
            <div
              className="h-[100%] flex items-center justify-center w-auto aspect-square rounded-full" id="my-pie-chart"
              style={{ background: "conic-gradient(#6366f1 0.55% 40.08%, #eef2ff 40.08% 100.68%)"}}
              >
                <div className="h-[80%] w-[80%] bg-white rounded-full" />
            </div>
            <div className="flex flex-col gap-1">
              <span className=" flex flex-row items-start gap-1">
                <span className="h-4 aspect-square w-auto bg-primary rounded"></span>
                <h3 className="font-bold -mt-1">40% <span className="text-slate-400 font-normal">Undisputed</span></h3>
              </span>
              <span className=" flex flex-row items-start gap-1">
                <span className="h-4 aspect-square border-1 border border-primary w-auto bg-primary-pale rounded"></span>
                <h3 className="font-bold -mt-1">60% <span className="text-slate-400 font-normal">Interviewed</span></h3>
              </span>
            </div>
          </div>
          <button className="text-primary text-sm font-semibold text-cente flex items-center gap-2">
            View application history
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <div className="border col-span-1 md:col-span-2 shadow lg:col-span-1 rounded flex flex-col">
          <h3 className="text-slate-600 text-md py-2 px-3 font-semibold">Recent Applications History</h3>
          <h3 className="text-slate-600 shadow-md border-y boder-y-slate-300 text-md py-2 px-3 font-semibold">Today, <span className="font-light">21st December</span></h3>
          <div className="py-2 max-h-[150px] overflow-scroll px-3 md:px-4">
            <ul className="">
              {
                Array.from({ length: 11 }).map((_, index: number) => (
                  <li key={index} className="grid items-center grid-cols-[max-content_1fr] gap-2 md:gap-3 lg:gap-4 py-3">
                    <span className="text-slate-400 text-sm">{index+1}:00 PM</span>
                    <div className="h-px w-full bg-slate-300" />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>

      {/* Recent Application History Section */}
      <section className="border b-6 max-h-[calc((100vh-110px)-33vh)] grid grid-rows-[max-content_max-content_1fr_max-content_max-content] rounded h-full">
        <h3 className="text-slate-600 text-xl p-3 font-semibold">Recent Applications History</h3>
        <div className="h-px w-full bg-slate-300" />

        <div className="w-full overflow-y-auto">
          <table cellPadding={10} className="table w-full " >
            {
            openJobs.map((job: typeof openJobs[0], index: number) => (
                <tr key={index} className="table-row odd:bg-primary-pale align-middle items-center">
                  <td className="relative flex"><Image src={job.image} alt={job.title} /></td>
                  <td className="table-cell gap-1.5">
                    <span className="font-semibold text-slate-700">{job.title}</span><br />
                    <span className="text-slate-400 text-sm">{job?.companyName} {job.location?.city} {job.location.country} {job.jobType} </span>
                  </td>
                  <td className="table-cell gap-1.5">
                    <span className="text-slate-600 font-semibold">Date Applied</span><br />
                    <span className="text-slate-400 text-sm">23rd July 2021</span>
                  </td>
                  <td className="table-cellflex-col">
                    <button className="px-3 py-1 rounded-full text-xs  text-yellow-500 border border-yellow-500">{job.jobIndustry}</button>
                  </td>
                </tr>
              ))
            }
          </table>
        </div>
        <div className="h-px w-full bg-slate-300" />
        <div className="w-full flex justify-center py-2 px-3">
          <button className="text-primary font-semibold text-cente flex items-center gap-2">
            View application history
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  )
};

export default OverviewPage