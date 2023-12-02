import { memo } from "react";
import Image from "next/image";
import { aboutImages, benefits, niceToHaves, requiredSkills, responsibilities, whoAreYou } from "./data";
import BenefitCard from "./_components/BenefitCard";
import Link from "next/link";
import LatestJobCard from "@sharedComponents/LatestJobsCard";
import { openJobs } from "@sharedData/openJobs";
import ApplicationModal from "./_components/ApplicationModal";

interface IProps {
  searchParams: { [key: string]: string | string[] | undefined}
}

const JobDetails: React.FC<IProps> = memo(({ searchParams }) => {
  let isApplicationModalOpen: boolean = false;
  if (searchParams?.modalOpen) isApplicationModalOpen = JSON.parse(searchParams?.modalOpen as string) as boolean;
  console.log(isApplicationModalOpen);

  return (
    <main className="">
      <section className="p-4 md:px-4 lg:px-6 xl:px-8 bg-indigo-50/80 py-[clamp(32px,7vmin,100px)] rounded-md">
        <div className="border-slate-300 max-w-screen-xl mx-auto flex flex-row gap-6 md:gap-2 justify-between flex-wrap md:flex-nowrap items-center p-5 bg-white">
          <div className="grid grid-flow-col min-h-max max-w-max items-center gap-2 lg:gap-3 xl:gap-5">
            <figure className="self-start text-[3vmax] text-white flex justify-cente items-start ">
              <span className="flex rounded-md justify-center items-center h-[clamp(60px,6vmax,140px)] min-h-full aspect-square w-auto font-extrabold bg-gradient-to-bl from-primary to-blue-300">
                S
              </span>
             
            </figure>
            <span className="max-w-screen-md">
              <h3 className="font-bold text-2xl text-slate-700">Social Media Assistant</h3>
              <p className="text-slate-500">Stripe . Paris, France . Full-Time</p>
            </span>
          </div>
          <span className="flex flex-row gap-2 lg:gap-4 h-max items-center">
            <button className="h-max flex items-center justify-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
            </button>
            <div className="h-[40px] w-[1px] bg-slate-300" />
            <Link href={{ query: { modalOpen: !isApplicationModalOpen ? true : !isApplicationModalOpen }}} className="btn-primary text-sm px-10 py-2.5 max-h-max">Apply</Link>
          </span>
        </div>
      </section>

      <section className="xl:max-w-screen-xl container mx-auto p-4 lg:p-6 xl:p-8 grid grid-cols-1 md:grid-cols-[4fr_1fr] mt-[3vh] gap-2 lg:gap-4 xl:gap-5">
        <div className="max-w-screen-md">
          <div className="">
            <h2 className="text-lg text-slate700 font-semibold">Description</h2>
            <p className="text-slate-500 text-sm font-light mt-2  tracking-wider [word-spacing:5px]">
              Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.
            </p>
          </div>

          <h2 className="text-lg text-slate700 font-semibold mt-[clamp(15px,4vh,60px)]">Responsibilities</h2>
          <ul className="">
            {
              responsibilities && responsibilities.map((item: string, index: number) => (
                <li key={index} className="text-slate-500 text-sm font-light mt-2 list tracking-wider flex flex-row items-center gap-x-2">
                  <span className="text-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))
            }
          </ul>

          <h2 className="text-lg text-slate700 font-semibold mt-[clamp(15px,4vh,60px)]">Who You Are</h2>
          <ul className="">
            {
              whoAreYou && whoAreYou.map((item: string, index: number) => (
                <li key={index} className="text-slate-500 text-sm font-light mt-2 list tracking-wider flex flex-row items-center gap-x-2">
                  <span className="text-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))
            }
          </ul>

          <h2 className="text-lg text-slate700 font-semibold mt-[clamp(15px,4vh,60px)]">Nice-To-Haves</h2>
          <ul className="">
            {
              niceToHaves && niceToHaves.map((item: string, index: number) => (
                <li key={index} className="text-slate-500 text-sm font-light mt-2 list tracking-wider flex flex-row items-center gap-x-2">
                  <span className="text-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>
       
        <aside className="min-w-[200px] mt-8 md:mt-0">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-lg text-slate700 font-semibold">About this role</h2>
            <div className="p-3 bg-slate-100 flex flex-col gap-y-2">
              <p className="text-xs font-normal text-slate-400"><span className="font-semibold text-slate-700">8 applied</span> of 12 capacity</p>
              <div className="bg-slate-300 w-full h-[6px]">
                <div className="bg-emerald-400 h-full w-[25%]"></div>
              </div>
            </div>

            <p className="text-xs font-normal text-slate-400 flex flex-row gap-x-2 justify-between">Apply Before <span className="font-semibold text-slate-700">July 31, 2021</span></p>
            <p className="text-xs font-normal text-slate-400 flex flex-row gap-x-2 justify-between">Job Posted On <span className="font-semibold text-slate-700">July 1, 2021</span></p>
            <p className="text-xs font-normal text-slate-400 flex flex-row gap-x-2 justify-between">Job Type <span className="font-semibold text-slate-700">Full-Time</span></p>
            <p className="text-xs font-normal text-slate-400 flex flex-row gap-x-2 justify-between">Salary <span className="font-semibold text-slate-700">$75k - $85k USD</span></p>
          </div>

          <div className="h-[1px] bg-slate-300 w-full my-6" />

          <div className="flex flex-col gap-y-3">
            <h2 className="text-lg text-slate700 font-semibold">Categories</h2>
            <ul className="flex flex-row flex-wrap items-center gap-2">
              <li className="">
                <button className="px-3 py-1 rounded-full text-xs  text-yellow-500 border border-yellow-500">Marketing</button>
              </li>
              <li className="">
                <button className="px-3 py-1 rounded-full text-xs text-primary border border-primary">Design</button>
              </li>
            </ul>
          </div>

          <div className="h-[1px] bg-slate-300 w-full my-6" />

          <div className="flex flex-col gap-y-3">
            <h2 className="text-lg text-slate700 font-semibold">Required Skills</h2>
            <ul className="flex flex-row flex-wrap items-center gap-2">
              {
                requiredSkills && requiredSkills.map((skill: string, index: number) => (
                  <li key={index} className="px-3 py-1 text-xs bg-primary-pale text-primary">{skill}</li>
                ))
              }
            </ul>
          </div>
        </aside>
      </section>

      <div className="h-[1px] max-w-screen-xl mx-auto bg-slate-300/80 my-6 md:px-3 lg:px-4 xl:px-6" />

      <section className="container xl:max-w-screen-xl mx-auto p-4 lg:p-6 xl:p-8">
        <h2 className="text-2xl text-slate700 font-semibold">Perks and Benefits</h2>
        <p className="text-slate-500 text-sm font-light mt-2 list tracking-wide flex flex-row items-center gap-x-2">This job comes with several perks and benefits</p>

        <ul className="flex  flex-row flex-wrap gap-3 gap-y-6 lg:gap-y-4 lg:gap-5 xl:gap-7 justify-center md:justify-start mt-[3vh]">
          {
            benefits && benefits.map((benefit: typeof benefits[0], index: number) => (
              <BenefitCard key={index} image={benefit.image} title={benefit.title} text={benefit.text} />
            ))
          }
        </ul>
      </section>

      <div className="h-[1px] max-w-screen-xl mx-auto bg-slate-300/80 my-6 md:px-3 lg:px-4 xl:px-6" />

      <section className="container xl:max-w-screen-xl mx-auto p-4 lg:p-6 xl:p-8 grid grid-cols-1 lg:grid-cols-[4fr_4fr] items-center gap-x-[clamp(10px,1vmax,60px)] gap-y-[clamp(10px,4vh,60px)] mb-[5vh]">
        <div className="">
          <div className="flex flex-row max-w-max items-center gap-2 lg:gap-3 xl:gap-6">
            <figure className="w-[clamp(30px,5vmax,90px)] aspect-[1/0.9] h-auto text-[clamp(30px,2.3vmax,90px)] text-white flex justify-center items-center font-extrabold bg-gradient-to-br from-primary to-blue-200">
              <span className="max-h-max">S</span>
            </figure>
            <span className="">
              <h3 className="font-bold text-xl lg:text-2xl text-slate-700">Social Media Assistant</h3>
              <Link href="/browse-companies/profile" className="text-primary text-sm lg:text-lg font-semibold flex flex-row items-center gap-3">
                Read more about Stripe
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </span>
          </div>
          <p className="text-slate-600 text-sm font-light mt-6  tracking-wide [word-spacing:5px] leading-6">
            Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 h-auto aspect-[2/1] gap-[clamp(10px,1vmax,60px)] min-h-[200px] max-h-[400px]">
          <figure className="overflow-hidden col-start-1 row-start-1 col-span-2 row-span-2 relative"><Image fill src={aboutImages.img1} className="object-cover" alt="about" /></figure>
          <figure className="overflow-hidden col-start-3 row-start-1 col-span-1 row-span-1 relative"><Image fill src={aboutImages.img2} className="object-cover" alt="about" /></figure>
          <figure className="overflow-hidden col-start-3 row-start-2 col-span-1 row-span-1 relative"><Image fill src={aboutImages.img3} className="object-cover" alt="about" /></figure>
        </div>
      </section>

      <section className="mt-[clamp(40px,2vh,80px)] bg-indigo-50/70">
        <div className="px-[clamp(16px,3vw,40px)] py-[clamp(30px,5vh,80px)] container mx-auto max-w-screen-xl">
          <div className="mb-[clamp(10px,2vw,20px)] flex flex-row flex-wrap gap-x-2 justify-between">
            <h2 className=" text-sky-400 text-5xl font-semibold leading-[53px] grow shrink basis-auto max-md:text-4xl max-md:leading-[49px]">
              <span className="text-slate-800">Latest </span>
              <span className="text-sky-400">jobs open</span>
            </h2>
            <Link href="/find-jobs" className="text-primary flex flex-row items-center gap-x-1">
              See all jobs
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-[clamp(10px,2.8vw,40px)]">
            {
              openJobs && openJobs.map((job: typeof openJobs[0], index: number) => (
                <LatestJobCard job={job} key={index} />
              ))
            }
          </div>
        </div>
      </section>
      <ApplicationModal isOpen={isApplicationModalOpen} />
    </main>
  )
});

export default JobDetails;