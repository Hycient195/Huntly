import Image from "next/image";

export default function MyProfile() {
  return (
    <div className="items-stretch flex flex-col py-3 lg:py-5">
      <div className="items-end bg-white flex w-full flex-col px-2  max-md:max-w-full">
        <div className="justify-center text-gray-800 text-lg font-semibold leading-7 max-w-[491px] self-start max-md:max-w-full">
          Basic Information
        </div>
        <div className="text-slate-600 text-base leading-7 max-w-[491px] mt-1 self-start max-md:max-w-full">
          This is your personal information that you can update anytime.
        </div>
        <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-6 max-md:max-w-full" />
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 flex-wrap">
            <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:mt-10">
                <div className="text-slate-800 text-base font-semibold leading-7">
                  Profile Photo
                </div>
                <div className="text-slate-600 text-base leading-7 mt-1.5">
                  This image will be shown publicly as your profile picture, it
                  will help recruiters recognize you!
                </div>
              </div>
            </div>
            <div className="flex flex-col  ml-5 max-md:w-full max-md:ml-0">
              <div className="grow max-md:max-w-full max-md:mt-10 max-md:pr-5">
                <div className="gap-2 lg:gap-4 flex max-md:flex-col  max-md:gap-0">
                  <figure className="w-[clamp(150px,10vw,180px)] outline outline-primary-pale object-center h-[clamp(150px,10vw,200px)] bg-red-400 object-cover overflow-hidden relative rounded-full aspect-square">
                    <Image
                      alt="user"
                      src="/mypic.jpg"
                      fill
                      loading="lazy"
                      className="aspect-square object-cover object-center w-full overflow-hidden shrink-0 max-w-full"
                    />
                  </figure>
                  <div className="flex flex-col ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-center max-w-[350px] border-[color:var(--brands-primary,#4640DE)] bg-slate-50 flex grow flex-col w-full px-4 py-6 rounded-lg border-2 border-dashed max-md:mt-8 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ed27130-5c39-43ed-9c23-9c291211286a?"
                        className="aspect-[1.03] object-contain object-center w-[33px] overflow-hidden max-w-full"
                      />
                      <div className="text-slate-600 text-base leading-7 max-w-[261px] ml-4 mt-2 self-start max-md:ml-2.5">
                        <span className="font-medium text-indigo-600">
                          Click to replace
                        </span>
                        <span className=" text-slate-800"> </span>
                        <span className=" text-slate-600">
                          or drag and drop
                        </span>
                      </div>
                      <div className="text-slate-500 text-base leading-7 self-stretch mt-1">
                        SVG, PNG, JPG or GIF (max. 400 x 400px)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-6 max-md:max-w-full" />
        <div className="self-stretch mt-6 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
              <div className="text-slate-800 text-base font-semibold leading-7 max-md:mt-10">
                Personal Details
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-red-400 text-base font-semibold leading-7 max-md:max-w-full">
                  <span className="text-slate-600">Full Name </span>
                  <span className="text-red-400">*</span>
                </div>
                <input type="text" placeholder="John Doe" className="text-slate-600 focus:outline outline-[3px] focus:outline-slate-200 text-base leading-7 border border-[color:var(--neutrals-20,#D6DDEB)] bg-white justify-center mt-1 px-4 py-3 border-solid items-start max-md:max-w-full" />
                <div className="items-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-red-400 text-base font-semibold leading-7">
                      <span className="text-slate-600">Phone Number </span>
                      <span className="text-red-400">*</span>
                    </div>
                    <input type="text" placeholder="+44 1245 572 135" className="text-slate-600 focus:outline outline-[3px] focus:outline-slate-200 text-base leading-7 border border-[color:var(--neutrals-20,#D6DDEB)] bg-white justify-center mt-1 px-4 py-3 border-solid items-start" />
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-red-400 text-base font-semibold leading-7">
                      <span className="text-slate-600">Email </span>
                      <span className="text-red-400">*</span>
                    </div>
                    <input type="text" placeholder="johndoe@gmail.com" className="text-slate-600 focus:outline outline-[3px] focus:outline-slate-200 text-base leading-7 border border-[color:var(--neutrals-20,#D6DDEB)] bg-white justify-center mt-1 px-4 py-3 border-solid items-start" />
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-red-400 text-base font-semibold leading-7">
                      <span className="text-slate-600">Date of Birth </span>
                      <span className="text-red-400">*</span>
                    </div>
                    <div className="justify-between items-stretch border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex gap-5 mt-1 px-4 py-3 border-solid">
                      <input type="date" className="text-slate-600 text-base leading-7" />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4b9cac8-9346-4c6f-b5a9-3dde73e87547?"
                        className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                      />
                    </div>
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-red-400 text-base font-semibold leading-7">
                      <span className="text-slate-600">Gender </span>
                      <span className="text-red-400">*</span>
                    </div>
                    <div className="justify-between relative items-stretch border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex gap-5 mt-1 pl-3 pr-0 py-3 border-solid">
                      <select name="" className="appearance-none z-[1] bg-transparent outline-none w-full p-1" id="">
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                      <span className="absolute top-0 bottom-0 my-auto right-2 max-h-max">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-6 max-md:max-w-full" />
        <div className="self-stretch mt-6 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:mt-10">
                <div className="justify-center text-slate-800 text-base font-semibold leading-7">
                  Account Type
                </div>
                <div className="text-slate-600 text-base leading-7 mt-1">
                  You can update your account type
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <div className="flex justify-between gap-4 items-start">
                  <div className="flex aspect-[1.3333333333333333] flex-col justify-center items-stretch p-0.5">
                    <div className="stroke-[1px] flex aspect-[1.4] flex-col justify-center items-stretch p-1 rounded-[50%]">
                      <div className="flex w-[18px] shrink-0 h-3 flex-col rounded-[50%] max-md:mr-0.5" />
                    </div>
                  </div>
                  <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                    <div className="text-slate-800 text-base font-medium leading-7">
                      Job Seeker
                    </div>
                    <div className="text-slate-600 text-base leading-7">
                      Looking for a job
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-5 mt-6 px-px items-start">
                  <div className="stroke-[2px] flex w-5 shrink-0 h-5 flex-col rounded-[50%]" />
                  <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                    <div className="text-slate-800 text-base font-medium leading-7">
                      Employer
                    </div>
                    <div className="text-gray-800 text-base leading-7">
                      Hiring, sourcing candidates, or posting a jobs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-6 max-md:max-w-full" />
        <button className="btn-primary py-2.5 mt-4">Save Profile</button>
        {/* <div className="text-white text-center text-base font-bold leading-7 justify-center items-center bg-indigo-600 w-[145px] max-w-full mt-6 px-5 py-3 self-end">
          Save Profile
        </div> */}
      </div>
    </div>
  )
}