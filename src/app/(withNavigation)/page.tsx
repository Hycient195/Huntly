import Image from 'next/image'
import Hero from '../../_SharedComponents/Hero'
import Explore from '../../_SharedComponents/Explore'
import FeaturedJobs from '../../_SharedComponents/FeaturedJobs'
import CompanyList from '../../_SharedComponents/CompanyList'
import { companies } from '../(withoughtNavigation)/dashboard/companies/data'
import LatestJobCard from '../_components/LatestJobsCard'
import { openJobs } from '../data'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="p-[clamp(10px,3vw,40px)] container mx-auto max-w-screen-xl">
        <Explore />

        <section className="my-[clamp(40px,10vh,100px)]">
          <div className="mb-[clamp(10px,2vw,20px)] text-sky-400 text-5xl font-semibold leading-[53px] grow shrink basis-auto max-md:text-4xl max-md:leading-[49px]">
            <span className="text-slate-800">Featured </span>
            <span className="text-sky-400">jobs</span>
          </div>
          <CompanyList scroll={false} companies={companies} arrangement="grid" />
        </section>
        
      </div>

      <section className="mt-[clamp(40px,2vh,80px)] bg-indigo-50/70">
        <div className="px-[clamp(10px,3vw,40px)] py-[clamp(30px,5vh,80px)] container mx-auto max-w-screen-xl">
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
                <LatestJobCard key={index} />
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

// Generate and populate the data format with 8 random but reasonable data in the structure below

// const openJobs = [
//   {
//     title: "",
//     companyName: "",
//     location: {
//       country: "",
//       city: ""
//     },
//     jobType: "",
//     jobIndustry: ""
//   }
// ]
