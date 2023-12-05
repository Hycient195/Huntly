export default function MyComponent() {
  return (
    <main className="p-2 md:p-3 lg:p-4 xl:p-6 flex overflow-hidden justify-center">
      <div className="gap-0 grid-cols-1 grid lg:grid-cols-[1fr_3fr]  py-4 lg:py-6 xl:py-8 gap-x-[clamp(10px,1.5vw,40px)]">
        
        {/* Left Aside Section */}
        <aside className="hidden  lg:flex relative flex-col items-stretch max-md:w-full min-w-[230px] max-w-[300px] max-h-[calc(100vh-130px)]">
          <div className="items-stretch shadow-sm bg-white flex grow flex-col  max-md:px-5">
            <div className="text-slate-500 text-base font-medium leading-7">
              Type your question or search keyword
            </div>
            <div className="border relative border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex justify-between gap-4 mt-6  border-solid items-start">
              <span className="absolute left-2 top-0 bottom-0 max-h-max my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input type="text" placeholder="Search" className="text-gray-400 pr-2 outline-none out py-2 pl-9 text-base w-full leading-7 self-stretch" />
            </div>
            <div className="text-indigo-600 text-base font-semibold leading-7 mt-8">
              Getting Started
            </div>
            <div className="bg-zinc-200 shrink-0 h-px mt-4" />
            <div className="text-slate-600 text-base font-medium leading-7 mt-4">
              My Profile
            </div>
            <div className="bg-zinc-200 shrink-0 h-px mt-4" />
            <div className="text-slate-600 text-base font-medium leading-7 mt-4">
              Applying for a job
            </div>
            <div className="bg-zinc-200 shrink-0 h-px mt-4" />
            <div className="text-slate-600 text-base font-medium leading-7 mt-4">
              Job Search Tips
            </div>
            <div className="bg-zinc-200 shrink-0 h-px mt-4" />
            <div className="text-slate-600 text-base font-medium leading-7 mt-4">
              Job Alerts
            </div>
            <div className="flex-col overflow-hidden flex asect-[1.6494845360824741] items-stretch absolute bottom-3 p-4 lg:p-6 max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad13c8f9-6482-4d35-917f-c5ca691e6c4f?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-xl font-semibold leading-6">
                Didn't find what you were looking for?
              </div>{" "}
              <div className="relative text-slate-50 text-base leading-7 mt-3.5">
                Contact our customer service{" "}
              </div>{" "}
              <button className="relative text-indigo-600 text-sm hover:bg-white/90 duration-300 font-bold leading-6 justify-center bg-white mt-8 px-5 py-2.5 items-start max-md:pl-0.5">
                Contact Us
              </button>
            </div>
          </div>
        </aside>

        {/* Main section */}
        <div className="items-start overflow-scroll  overscroll-auto h-[calc(100vh-100px)] flex flex-col px-3 pb-5 lg:px-5 xl:px-6">
          <div className="items-stretch sticky py-2 w-full top-0 bg-white flex gap-3 self-start">
            <div className="text-slate-500 text-right text-base leading-7">
              Sort by:
            </div>
            <div className="items-stretch flex justify-between gap-2">
              <div className="justify-between relative items-stretch border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex gap-5 pr-7">
                <select name="" className="appearance-none font-semibold hover:cursor-pointer bg-transparent z-[1] outline-none w-full pr-6" id="">
                  <option value="">Most relevant</option>
                  <option value="">Most Searched</option>
                </select>
                <span className="absolute top-0 bottom-0 my-auto right-5 max-h-max">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="items-start border  border-[color:var(--neutrals-20,#D6DDEB)] bg-white self-stretch flex flex-col mt-8 p-6 border-solid max-md:max-w-full max-md:px-5">
            <span className="flex flex-row gap-x-2 justify-between w-full">
              <h3 className="text-slate-800 text-xl font-semibold leading-6 grow shrink basis-auto">
                What is My Applications?
              </h3>

              <button className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </button>
            </span>
            <div className="text-slate-600 text-base leading-7 mt-4 max-md:max-w-full">
              My Applications is a way for you to track jobs as you move through the application process. Depending on the job you applied to, you may also receive notifications indicating that an application has been actioned by an employer.
            </div>
            <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-5 max-md:max-w-full" />
            <section>
              <div className="items-center flex gap-3.5 mt-5 self-start max-md:justify-center">
                <div className="text-slate-600 text-base leading-7 my-auto">Was this article helpful?</div>
                <button className="button border max-h-max text-indigo-600 border-[color:var(--brands-secondary,#CCCCF5)] self-stretch flex gap-2.5 px-4 py-2 border-solid" aria-label="Yes" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                  </svg>
                  <p className=" text-center text-sm font-bold leading-6 self-stretch">Yes</p>
                </button>
                <button className="button border max-h-max text-indigo-600 border-[color:var(--brands-secondary,#CCCCF5)] self-stretch flex gap-2.5 px-4 py-2 border-solid" aria-label="No" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                  </svg>
                  <p className="text-indigo-600 text-center text-sm font-bold leading-6 self-stretch">No</p>
                </button>
              </div>
            </section>
          </div>
          <div className="items-start border border-[color:var(--neutrals-20,#D6DDEB)] bg-white self-stretch flex flex-col mt-6 p-6 border-solid max-md:max-w-full max-md:px-5">
            <span className="flex flex-row gap-x-2 justify-between w-full">
              <h3 className="text-slate-800 text-xl font-semibold leading-6 grow shrink basis-auto">
              How to access my applications history
              </h3>

              <button className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </button>
            </span>
            <div className="self-stretch text-slate-600 text-base leading-7 mt-4 max-md:max-w-full">
              To access applications history, go to your My Applications page on your dashboard profile. You must be signed in
              to your JobHuntly account to view this page.
            </div>
            <hr className="bg-zinc-200 self-stretch shrink-0 h-px mt-5 max-md:max-w-full" />
            <section>
              <div className="items-center flex gap-3.5 mt-5 self-start max-md:justify-center">
                <div className="text-slate-600 text-base leading-7 my-auto">Was this article helpful?</div>
                <button className="button border max-h-max text-indigo-600 border-[color:var(--brands-secondary,#CCCCF5)] self-stretch flex gap-2.5 px-4 py-2 border-solid" aria-label="Yes" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                  </svg>
                  <p className=" text-center text-sm font-bold leading-6 self-stretch">Yes</p>
                </button>
                <button className="button border max-h-max text-indigo-600 border-[color:var(--brands-secondary,#CCCCF5)] self-stretch flex gap-2.5 px-4 py-2 border-solid" aria-label="No" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                  </svg>
                  <p className="text-indigo-600 text-center text-sm font-bold leading-6 self-stretch">No</p>
                </button>
              </div>
            </section>
          </div>
          <div className="items-stretch border border-[color:var(--neutrals-20,#D6DDEB)] bg-white self-stretch flex flex-col mt-6 pt-6 pb-2.5 px-6 border-solid max-md:max-w-full max-md:px-5">
            <span className="flex flex-row gap-x-2 justify-between w-full">
              <h3 className="text-slate-800 text-xl font-semibold leading-6 grow shrink basis-auto">
              Not seeing jobs you applied in your my application list?
              </h3>

              <button className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </button>
            </span>
            <div className="text-slate-500 text-base leading-7 mt-4 max-md:max-w-full">
              Please note that we are unable to track materials submitted for
              jobs you apply to via an employer's site. As a result, these
              applications are not recorded in the My Applications section of
              your JobHuntly account. We suggest keeping a personal record of
              all positions you have applied to externally.{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


