export default function SettingsDetailsPage() {
  return (
    <div className="items-end self-stretch bg-white flex flex-col px-2 py-6 max-md:px-5">
      <div className="justify-center text-gray-800 text-lg font-semibold leading-7 max-w-[421px] self-start max-md:max-w-full">
        Basic Information
      </div>
      <div className="text-slate-600 text-base leading-7 max-w-[421px] mt-1 self-start max-md:max-w-full">
        This is login information that you can update anytime.
      </div>
      <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-6 max-md:max-w-full" />
      <div className="self-stretch mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:mt-10">
              <div className="text-slate-800 text-base font-semibold leading-7">
                Update Email
              </div>
              <div className="text-slate-600 text-base leading-7 mt-1.5">
                Update your email address to make sure it is safe
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
              <div className="justify-center items-stretch flex w-[350px] max-w-full gap-2 pr-6 self-start max-md:pr-5">
                <div className="text-slate-800 text-base font-medium leading-7 grow shrink basis-auto">
                  jakegyll@email.com
                </div>
                <span className="text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
              <div className="text-slate-500 text-base leading-7 max-w-[350px] self-start">
                Your email address is verified.
              </div>
              <div className="text-slate-600 text-base font-semibold leading-7 mt-5 max-md:max-w-full">
                Update Email
              </div>
              <input type="text" placeholder="Enter your email" className="text-slate-600 max-w-[400px] focus:outline outline-[3px] focus:outline-slate-200 text-base leading-7 border border-[color:var(--neutrals-20,#D6DDEB)] bg-white justify-center mt-1 px-4 py-3 border-solid items-start max-md:max-w-full" />

              <button className="text-white text-center text-base font-bold leading-7 justify-center bg-indigo-600 max-w-full mt-6 px-6 lg:px-10 py-2.5 self-start items-start">
                Update Email
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 self-stretch shrink-0 h-px mt-6 max-md:max-w-full" />
      <div className="self-stretch mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:mt-10">
              <div className="text-slate-800 text-base font-semibold leading-7">
                New Password
              </div>
              <div className="text-slate-600 text-base leading-7 mt-1.5">
                Manage your password to make sure it is safe
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
              <div className="text-slate-600 text-base font-semibold leading-7 self-stretch max-md:max-w-full">
                Old Password
              </div>
              <input type="text" placeholder="Enter your old password" className="text-slate-600 focus:outline w-full max-w-[400px] outline-[3px] focus:outline-slate-200 text-base leading-7 border border-[color:var(--neutrals-20,#D6DDEB)] bg-white justify-center mt-1 px-4 py-3 border-solid items-start max-md:max-w-full" />

              <div className="text-slate-500 text-sm leading-6 self-stretch mt-1 max-md:max-w-full">
                Minimum 8 characters
              </div>
              <div className="text-slate-600 text-base font-semibold leading-7 self-stretch mt-6 max-md:max-w-full">
                New Password
              </div>
              <input type="text" placeholder="Enter your new password" className="text-slate-600 focus:outline w-full max-w-[400px] outline-[3px] focus:outline-slate-200 text-base leading-7 border border-[color:var(--neutrals-20,#D6DDEB)] bg-white justify-center mt-1 px-4 py-3 border-solid items-start max-md:max-w-full" />

              <div className="text-slate-500 text-sm leading-6 self-stretch mt-1 max-md:max-w-full">
                Minimum 8 characters
              </div>
              <button className="text-white text-center text-base font-bold leading-7 justify-center bg-indigo-600 max-w-full mt-6 px-6 lg:px-10 py-2.5 self-start items-start">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 self-stretch shrink-0 h-px mt-6 max-md:max-w-full" />
      <button className="items-stretch flex gap-2 mt-6 self-end">
        <div className="text-red-400 text-center text-base font-semibold leading-7">
          Close Account
        </div>
        <span className="text-rose-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        </span>
      </button>
    </div>
  );
}