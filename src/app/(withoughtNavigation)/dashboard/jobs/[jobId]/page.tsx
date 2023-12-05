import { memo } from "react";
import Image from "next/image";
import { aboutImages, benefits, niceToHaves, requiredSkills, responsibilities, whoAreYou } from "../../../../../_SharedData/perksAndBenefits";
import BenefitCard from "../../../../../_SharedComponents/BenefitCard";

function JobDetails() {
  return (
    <main className="p-3 lg:p-4 xl:p-6">
      <section className="p-3 md:p-4 lg:p-6 xl:p-8 bg-indigo-50/80 rounded-md">
        <div className="border-slate-300 flex flex-row g-2 justify-between items-center p-2 md:p-3 lg:p-4 xl:p-6 bg-white">
          <div className="flex flex-row max-w-max items-center gap-2 lg:gap-3 xl:gap-5">
            <figure className="w-[5vmax] aspect-square h-auto text-[3vmax] text-white flex justify-center items-center font-extrabold bg-gradient-to-bl from-primary to-blue-300">
              S
            </figure>
            <span className="">
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
            <button className="btn-primary text-sm px-10 py-2.5 max-h-max">Apply</button>
          </span>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-[4fr_1fr] mt-[3vh] gap-2 lg:gap-4 xl:gap-5">
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
       
        <aside className="min-w-[200px]">
          

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

      <div className="h-[1px] bg-slate-300 w-full my-6" />

      <section className="container">
        <h2 className="text-2xl text-slate700 font-semibold">Perks and Benefits</h2>
        <p className="text-slate-500 text-sm font-light mt-2 list tracking-wide flex flex-row items-center gap-x-2">This job comes with several perks and benefits</p>

        <ul className="flex flex-row flex-wrap gap-3 gap-y-6 lg:gap-y-4 lg:gap-5 xl:gap-7 justify-center md:justify-start mt-[3vh]">
          {
            benefits && benefits.map((benefit: typeof benefits[0], index: number) => (
              <BenefitCard key={index} image={benefit.image} title={benefit.title} text={benefit.text} />
            ))
          }
        </ul>
      </section>

      <div className="h-[1px] bg-slate-300/70 w-full my-8" />

      <section className="grid grid-cols-1 lg:grid-cols-[4fr_4fr] items-center gap-x-[clamp(10px,1vmax,60px)] gap-y-[clamp(10px,4vh,60px)] mb-[5vh]">
        <div className="">
          <div className="flex flex-row max-w-max items-center gap-2 lg:gap-3 xl:gap-6">
            <figure className="w-[clamp(30px,5vmax,90px)] aspect-[1/0.9] h-auto text-[clamp(30px,2.3vmax,90px)] text-white flex justify-center items-center font-extrabold bg-gradient-to-br from-primary to-blue-200">
              <span className="max-h-max">S</span>
            </figure>
            <span className="">
              <h3 className="font-bold text-xl lg:text-2xl text-slate-700">Social Media Assistant</h3>
              <p className="text-primary text-sm lg:text-lg font-semibold flex flex-row items-center gap-3">
                Read more about Stripe
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </p>
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
    </main>
  )
};

export default JobDetails;