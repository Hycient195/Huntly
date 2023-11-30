import React from "react";
import Image from "next/image";

export default function NotificationsPreferences() {
  // const handleFormSubmit = (e: any) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  // };

  return (
    <div className="self-stretch bg-white flex flex-col px-2 py-6 items-start max-md:px-5">
      <header className="justify-center text-slate-800 text-lg font-semibold leading-7 max-w-[492px] max-md:max-w-full">
        Basic Information
      </header>
      <div className="text-slate-600 text-base leading-7 max-w-[492px] mt-1 max-md:max-w-full">
        This is notifications preferences that you can update anytime.
      </div>
      <hr className="bg-zinc-200 self-stretch shrink-0 h-px mt-6 max-md:max-w-full" />
      <form className="self-stretch mt-6 max-md:max-w-full max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:mt-10">
              <header className="text-slate-800 text-base font-semibold leading-7">Notifications</header>
              <div className="text-slate-600 text-base leading-7 mt-1.5">Customize your preferred notification settings</div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col max-md:mt-10">

              <label htmlFor="app" className="flex flex-row gap-1 mt-4">
                <input id="app" type="checkbox" className="justify-center h-[30px] w-[30px] text-slate-800 text-base accent-primary" />
                <span className="flex flex-col gap-y-1 -mt-1">
                  <h3 className="text-slate-800 text-lg font-medium leading-7">Applications</h3>
                  <div className="text-slate-600 text-base leading-7">These are notifications for jobs that you have applied to</div>
                </span>
              </label>
              <label htmlFor="job" className="flex flex-row gap-1 mt-4">
                <input id="job" type="checkbox" className="justify-center h-[30px] w-[30px] text-slate-800 text-base accent-primary" />
                <span className="flex flex-col gap-y-1 -mt-1">
                  <h3 className="text-slate-800 text-lg font-medium leading-7">Jobs</h3>
                  <div className="text-slate-600 text-base leading-7">These are notifications for job openings that suit your profile</div>
                </span>
              </label>
              <label htmlFor="rec" className="flex flex-row gap-2 mt-4">
                <input id="rec" type="checkbox" className="justify-center h-[30px] w-[30px] text-slate-800 text-base accent-primary" />
                <span className="flex flex-col gap-y-1 -mt-1">
                  <h3 className="text-slate-800 text-lg font-medium leading-7">Recommendations</h3>
                  <div className="text-slate-600 text-base leading-7">These are notifications for personalized recommendations from our recruiters</div>
                </span>
              </label>

              <button className="text-white text-center text-base font-bold leading-7 justify-center items-center bg-primary max-w-full mt-4 px-5 py-2.5 self-start" type="submit">
                Update Email
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}