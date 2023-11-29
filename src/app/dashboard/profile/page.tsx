import Image from "next/image";
import { memo } from "react";
import UserProfileExperiences from "./_components/Experiences";
import { additionalDetails, education, jobExperiences, projects, socialLinks } from "./data";
import UserProfileEducation from "./_components/Education";
import UserProfileSkills from "./_components/Skills";
import UserProfilePortfolio from "./_components/Portfolio";
import AdditionalDetails from "./_components/AdditionalDetails";
import SocialLinks from "./_components/SocialLinks";

const DashboardUserProfile = memo(() => {
  return (
    <main className="p-2 md:p-3 lg:p-4 xl:p-6 h-screen grid grid-cols-[4fr_1.4fr] gap-2 lg:gap-4 xl:gap-7">
      <section className="flex flex-col gap-3 lg:gap-5 xl:gap-6">

        <div className="grid grid-rows-[2fr_3fr] h-[clamp(300px,40vh,500px)]">
          <div className="relative px-8 bg-gradient-to-r from-pink-300 via-rose-300 to-violet-600">
            <button className="bg-transparent text-white absolute top-3 right-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
            <figure className="w-[clamp(100px,18vmin,300px)] z-[2] border-[9px] border-white translate-y-[50%] rounded-full overflow-hidden object-cover relative aspect-square h-auto">
              <Image fill alt="user" className="rounded-full object-cover" src="/myPic.jpg" />
            </figure>
          </div>

          <div className="flex flex-col gap-y-2.5 relative border justify-center border-slate-300 border-t-white p-4 pl-[calc(clamp(100px,18vmin,300px)+3rem)]">
            <h3 className="text-2xl font-semibold text-slate-700">Hycient Onyeukwu</h3>
            <p className="text-slate-400">Software Engineer at <span className="font-semibold text-slate-700">Spotify</span></p>
            <p className="text-slate-400 flex flex-row items-center gap-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Manchester, UK
            </p>
            <div className="flex flex-row items-center gap-x-1 px-4 max-w-max py-1.5 text-xs bg-emerald-50 text-emerald-500 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
              </svg>
              OPEN TO OPPORTUNITIES
            </div>

            <button className="btn-secondary absolute top-2 right-2 bg-white lg:top-3 lg:right-3">Edit Profile</button>
          </div>
        </div>

        {/* About Me Sub Section */}
        <section className="border border-slate-300 p-3 lg:p4 xl:p-5 relative">
          <div className="flex flex-row gap-x-2 justify-between items-center">
            <h2 className="text-lg text-slate700 font-semibold">About Me</h2>
            <button className="btn-secondary px-2 py-1.5 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
          </div>
          <p className="text-slate-500 text-sm font-light mt-2  tracking-wide [word-spacing:5px] max-w-screen-md">
            I&apos;m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.
          </p>
          <p className="text-slate-500 text-sm font-light mt-2  tracking-wide [word-spacing:5px] max-w-screen-md">
            For 10 years, I&apos;ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.
          </p>
        </section>

        {/* Experiences Sub-Section */}
        <UserProfileExperiences experiences={jobExperiences} />

        {/* Education Sub-Section */}
        <UserProfileEducation experiences={education} />

        <UserProfileSkills />
       
        <UserProfilePortfolio projectList={projects} />
      </section>


      <aside className="h-max min-w-[200px] flex flex-col gap-3 lg:gap-5 xl:gap-6">
        <AdditionalDetails details={additionalDetails} />
        <SocialLinks details={socialLinks} />
      </aside>
    </main>
  )
})

export default DashboardUserProfile;