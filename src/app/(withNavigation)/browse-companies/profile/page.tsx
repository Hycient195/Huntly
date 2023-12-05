import BenefitCard from "@sharedComponents/BenefitCard";
import LatestJobCard from "@sharedComponents/LatestJobsCard";
import { openJobs } from "@sharedData/openJobs";
import { benefits } from "@sharedData/perksAndBenefits";
import Link from "next/link";
import * as React from "react";
import { gallery, skills, teamMembers } from "./data";
import Image from "next/image";

export default function CompanyProfile() {
  return (
    <main className="flex flex-col justify-center items-stretch">
      <div className="bg-slate-50 flex w-full flex-col items-stretch pb-12 max-md:max-w-full">

        <div className="self-center flex w-full max-w-[999px] flex-col items-stretch mt-11 mb-6 max-md:max-w-full max-md:mt-10">
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 p-3">
              
              <div className="flex flex-col">
                <div className="grid grid-cols-[1fr_7fr] gap-2 items-center">
                  <figure className="flex flex-col w-[clamp(100px,18vmin,250px)] overflow-hidden aspect-square h-auto">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4563ed3f5da1f6578b078e110e17e07472d93582615cd82d08c6651fe7803979?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4563ed3f5da1f6578b078e110e17e07472d93582615cd82d08c6651fe7803979?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4563ed3f5da1f6578b078e110e17e07472d93582615cd82d08c6651fe7803979?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4563ed3f5da1f6578b078e110e17e07472d93582615cd82d08c6651fe7803979?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4563ed3f5da1f6578b078e110e17e07472d93582615cd82d08c6651fe7803979?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4563ed3f5da1f6578b078e110e17e07472d93582615cd82d08c6651fe7803979?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4563ed3f5da1f6578b078e110e17e07472d93582615cd82d08c6651fe7803979?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4563ed3f5da1f6578b078e110e17e07472d93582615cd82d08c6651fe7803979?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                      className="aspect-square object-contain object-center overflow-hidden"
                    />
                  </figure>
                  <div className="">
                    <div className=" flex  max-w-full gap-3 self-start">
                      <div className="text-slate-700 text-5xl font-semibold  grow whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">
                        Stripe
                      </div>
                      <div className="text-indigo-600 text-center max-w-max text-base leading-7 whitespace-nowrap justify-center border border-[color:var(--brands-primary,#4640DE)] self-center grow my-auto px-4 py-1 border-solid">
                        43 Jobs
                      </div>
                    </div>
                    <a href="https://stripe.com" className="text-indigo-600 text-base font-semibold leading-7 whitespace-nowrap mt-3 self-start">
                      https://stripe.com
                    </a>
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <div className="items-center flex justify-between gap-4">
                      <div className="items-center bg-white flex aspect-square flex-col justify-center w-11 h-11 my-auto px-2.5 rounded-[50px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aebe205f2f5bc93f1418fff5f9a5220d216366c49d3fff52eb2f4c7081152bea?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                          className="aspect-square object-contain object-center w-full overflow-hidden"
                        />
                      </div>
                      <div className="items-stretch self-stretch flex grow flex-col">
                        <div className="text-slate-600 text-base leading-7 whitespace-nowrap">
                          Founded
                        </div>
                        <div className="text-slate-800 text-base font-semibold leading-7 whitespace-nowrap">
                          July 31, 2011
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex justify-between gap-4">
                      <div className="items-center bg-white flex aspect-square flex-col justify-center w-11 h-11 my-auto px-2.5 rounded-[50px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdb3057de9ae7f2270edc999b1710752f4c173f0d79f39524a597ec47c1edfa6?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                          className="aspect-square object-contain object-center w-full overflow-hidden"
                        />
                      </div>
                      <div className="items-stretch self-stretch flex grow flex-col">
                        <div className="text-slate-600 text-base leading-7 whitespace-nowrap">
                          Employees
                        </div>
                        <div className="text-slate-800 text-base font-semibold leading-7 whitespace-nowrap">
                          4000+
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex justify-between gap-4">
                      <div className="items-center bg-white flex aspect-square flex-col justify-center w-11 h-11 my-auto px-2.5 rounded-[50px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/63e17c9becfeb1e95f13ad6037d26d2864566d21e479b48681fc75d0ca295977?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                          className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
                        />
                      </div>
                      <div className="items-stretch self-stretch flex grow flex-col">
                        <div className="text-slate-600 text-base leading-7 whitespace-nowrap">
                          Location
                        </div>
                        <div className="text-slate-800 text-base font-semibold leading-7 whitespace-nowrap">
                          20 countries
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex justify-between gap-4">
                      <div className="items-center bg-white flex aspect-square flex-col justify-center w-11 h-11 my-auto px-2.5 rounded-[50px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7397136caadcb3cae0d1d2d7815554379f9fb3c97e26a2525b1b05cfb61061f?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                          className="aspect-square object-contain object-center w-full overflow-hidden"
                        />
                      </div>
                      <div className="items-stretch self-stretch flex grow flex-col">
                        <div className="text-slate-600 text-base leading-7 whitespace-nowrap">
                          Industry
                        </div>
                        <div className="text-slate-800 text-base font-semibold leading-7 whitespace-nowrap">
                          Payment Gateway
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="items-center bg-white flex flex-col justify-center p-3 py-12">
      <div className="w-full max-w-[1192px] my-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
              <div className="text-slate-800 text-3xl font-semibold leading-10 whitespace-nowrap max-md:max-w-full">
                Company Profile
              </div>
              <div className="text-slate-600 text-base leading-7 mt-4 max-md:max-w-full">
                Stripe is a software platform for starting and running internet
                businesses. Millions of businesses rely on Stripe&apos;s software
                tools to accept payments, expand globally, and manage their
                businesses online. Stripe has been at the forefront of expanding
                internet commerce, powering new business models, and supporting
                the latest platforms, from marketplaces to mobile commerce
                sites. We believe that growing the GDP of the internet is a
                problem rooted in code and design, not finance. Stripe is built
                for developers, makers, and creators. We work on solving the
                hard technical problems necessary to build global economic
                infrastructure—from designing highly reliable systems to
                developing advanced machine learning algorithms to prevent
                fraud.
              </div>
              <div className="text-slate-800 text-3xl font-semibold leading-10 whitespace-nowrap mt-6 self-start max-md:max-w-full">
                Contact
              </div>
              <div className="items-stretch flex w-[469px] max-w-full gap-4 mt-4 self-start max-md:flex-wrap">
                <div className="border border-[color:var(--brands-primary,#4640DE)] flex justify-between gap-4 p-2 border-solid items-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6f41565f58735176a3b9e4707488dfe2cb1c508fc6370d92e7b6ac542efe8e8?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-indigo-600 text-base font-medium leading-7 self-stretch grow whitespace-nowrap">
                    twitter.com/stripe
                  </div>
                </div>
                <div className="border border-[color:var(--brands-primary,#4640DE)] flex justify-between gap-4 p-2 border-solid items-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef6c0ce6b7faf956f184b4e99abb00884477f167ba9ebef1b757af0edb25d15?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-indigo-600 text-base font-medium leading-7 self-stretch grow whitespace-nowrap">
                    facebook.com/StripeHQ
                  </div>
                </div>
              </div>
              <div className="border border-[color:var(--brands-primary,#4640DE)] flex gap-4 mt-4 pl-2 pr-3.5 py-2 border-solid self-start items-start max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b37b3dad0708327d3dcd827d4a9f09c84fedef277a94678c39d438a9147a2dfe?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-indigo-600 text-base font-medium leading-7 self-stretch grow whitespace-nowrap">
                  linkedin.com/company/stripe
                </div>
              </div>
              <div className="grid mt-8 grid-cols-[5fr_3fr] w-full gap-2 h-auto aspect-[2/1]">
                <figure className="relative overflow-hidden bg-green-400">
                  <Image className="h-full w-full object-cover object-center" alt="gallery" src={gallery.gallery4} />
                </figure>
                <div className="grid grid-rows-3 gap-2">
                  <figure className="relative overflow-hidden  bg-red-400">
                    <Image className="object-cover w-full h-full object-center" alt="gallery" src={gallery.gallery1} />
                  </figure>
                  <figure className="relative overflow-hidden">
                    <Image className="object-cover w-full h-full object-center" alt="gallery" src={gallery.gallery2} />
                  </figure>
                  <figure className="relative overflow-hidden">
                    <Image className="object-cover w-full h-full object-center" alt="gallery" src={gallery.gallery3} />
                  </figure>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col pt-2 max-md:mt-10">
              <div className="text-slate-800 text-3xl font-semibold leading-10 self-stretch whitespace-nowrap">
                Tech stack
              </div>
              <div className="text-slate-600 text-base leading-7 self-stretch mt-6">
                Learn about the technology and tools that Stripe uses.{" "}
              </div>
              <div className=" flex-wrap flex gap-2.5 mt-4">
                {
                  skills && skills.map((skill: typeof skills[0], index: number) => (
                    <div key={index} className="items-center  max-w-[100px] flex flex-col p-3">
                      <figure className="w-[55px] relative h-auto aspect-square">
                        <Image
                          loading="lazy"
                          alt={skill.name}
                          src={skill.image}
                          className="aspect-square object-contain object-center w-[74px] overflow-hidden"
                        />
                      </figure>
                      
                      <div className="text-slate-800 text-base leading-7 self-stretch whitespace-nowrap mt-2.5">
                        {skill?.name}
                      </div>
                    </div>
                  ))
                }
               </div>
              <div className="justify-between items-stretch self-stretch flex gap-4 mt-2 pr-8 max-md:pr-5">
                <div className="text-indigo-600 text-center text-base font-semibold leading-7 grow whitespace-nowrap">
                  View tech stack
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d09976ba153d5f9151e87ea7b95f986fd2286bbc2ee738bca2f229d18eb4531?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                  className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
              <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-4" />
              <div className="text-slate-800 text-3xl font-semibold leading-10 self-stretch whitespace-nowrap mt-10">
                Office Location
              </div>
              <div className="text-slate-600 text-base leading-7 self-stretch mt-4">
                Stripe offices spread across 20 countries
              </div>
              <div className="items-stretch flex w-[163px] max-w-full gap-3 mt-6 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/40f2666a34967bf0ac860ff517ecb8f0472100ab286e27b95caa0ce539027ec7?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                  className="aspect-[1.33] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-base font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                  United States
                </div>
              </div>
              <div className="items-stretch flex w-[163px] max-w-full gap-3 mt-4 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f8fba7ae68bd127bb23c441c3d8ad77468f2beefd5fceede3e02d65fc76167?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                  className="aspect-[1.33] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-base font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                  England
                </div>
              </div>
              <div className="items-stretch flex w-[163px] max-w-full gap-3 mt-4 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7b41201f66811ba9d78fd567ed59f57b1271cef606e029320584af8cf62c68e?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                  className="aspect-[1.33] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-base font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                  Japan
                </div>
              </div>
              <div className="items-stretch flex w-[163px] max-w-full gap-3 mt-4 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/11f2c5928b46ab8c142eff2adc90d43ac5ddaa1e8952a96d097396920741e1a5?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                  className="aspect-[1.33] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-base font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                  Australia
                </div>
              </div>
              <div className="items-stretch flex gap-3 mt-4 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c04421e8a9d7c55eca7a9e64a32b1a4f491295005cc5c6fa79db2a2602329442?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                  className="aspect-[1.33] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-base font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                  China
                </div>
              </div>
              <div className="justify-end items-stretch flex gap-4 mt-6 self-start">
                <div className="text-indigo-600 text-center text-base font-semibold leading-7 grow whitespace-nowrap">
                  View countries
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d09976ba153d5f9151e87ea7b95f986fd2286bbc2ee738bca2f229d18eb4531?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                  className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
              <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-6" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section */}
      <section className="items-center self-stretch bg-white flex flex-col justify-center px-16 py-12 rounded-lg max-md:px-5">
        <div className="flex w-full max-w-[1192px] flex-col items-stretch my-6 max-md:max-w-full">
          <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-slate-800 text-3xl font-semibold leading-10 whitespace-nowrap">
              Team
            </div>
            <div className="text-indigo-600 text-center text-base font-semibold leading-7 self-center whitespace-nowrap my-auto">
              See all (47)
            </div>
          </div>
          <div className="flex overflow-x-auto gap-4 mt-3 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            {
              teamMembers && teamMembers.map((member: typeof teamMembers[0], index: number) => (
                <div key={index} className="items-center rounded border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex grow flex-col px-8 py-6 border-solid max-md:px-5">
                  <figure className="w-[70px] relative rounded-full overflow-hidden h-auto aspect-square">
                    <Image alt={member.name} className="rounded-full object-cover object-center" src={member.image} />
                  </figure>
                  <div className="text-slate-700 text-center text-lg font-semibold leading-7 self-stretch whitespace-nowrap mt-4">
                    {member?.name}
                  </div>
                  <div className="text-slate-500 text-sm text-center leading-7 self-stretch whitespace-nowrap mt-1">
                    {member?.title}
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/facef49eafa7045343ee61a618ef50bc88e0313ca19945a8bf2b8b2c9b88f891?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-[2.5] object-contain object-center w-[60px] overflow-hidden max-w-full mt-4"
                  />
              </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="container p-4 mx-auto xl:max-w-screen-xl">
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

      <section className="mt-[clamp(40px,2vh,80px)] bg-indigo-50/70">
        <div className="px-[clamp(10px,3vw,40px)] py-[clamp(30px,5vh,80px)] container mx-auto max-w-screen-xl">
          <div className="mb-[clamp(10px,2vw,20px)] flex flex-row flex-wrap gap-x-2 justify-between">
            <h2 className=" text-sky-400 text-2xl font-semibold leading-[53px] grow shrink basis-auto max-md:text-4xl max-md:leading-[49px]">
              <span className="text-slate-700">Open Jobs </span>
              {/* <span className="text-sky-400">jobs open</span> */}
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
    </main>
  );
}


