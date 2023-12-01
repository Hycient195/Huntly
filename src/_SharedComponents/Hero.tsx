export default function Hero() {
  return (
    <div className="bg-slate-50 flex flex-col items-stretch">
  
      <div className="self-center w-full max-w-[1315px] mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col pt-4 px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-sky-400 text-7xl font-semibold leading-[79px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                <span className="text-slate-800">Discover more than </span>
                <span className="text-sky-400">5000+ Jobs</span>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ee53f63-a0e2-421f-91df-3ee7f2b60419?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                className="aspect-[15.73] object-contain object-center w-[629px] overflow-hidden self-center mt-7 max-md:max-w-full"
              />
              <div className="text-slate-600 text-xl leading-8 opacity-70 self-stretch mt-6 max-md:max-w-full">
                Great platform for the job seeker that searching for new career
                heights and passionate about startups.
              </div>

              <section className=" mx-auto mt-5">
                <form className="border border-slate-200 bg-white px-[2vw] py-[2vh] grid grid-cols-[1fr_1fr_max-content] gap-x-[5%]">
                  <div className="relative">
                    <span className="absolute left-2 w-max top-0 bottom-0 flex items-center text-slate-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </span>
                    <input type="text" placeholder="Job title or keyword" className="py-2 z-[12] w-full pr-4 pl-10 border-b outline-none text-slate-500 placeholder:text-slate-300 border-b-slate-300" />
                  </div>

                  <div className="relative">
                    <span className="absolute left-2 top-0 bottom-0 flex items-center text-slate-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </span>
                    <select name="" id="" className="py-2 pr-4 pl-10 w-full border-b outline-none bg-white appearance-none text-slate-400 placeholder:text-slate-300 border-b-slate-300">
                      <option value="">Florence Italy</option>
                      <option value="">Venice Italy</option>
                      <option value="">Rome Italy</option>
                    </select>
                  </div>

                  <button className="btn-primary">Search</button>
                </form>
              <p className="text-slate-400 mt-2 text-sm">Popular : UI Designer, UX Researcher, Android, Admin</p>
            </section>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65bfb3d5-a844-48aa-831c-319faece4ec1?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-[2.33] object-contain object-center w-full overflow-hidden grow mt-96 max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


