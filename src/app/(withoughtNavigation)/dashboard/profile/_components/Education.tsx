"use client";

import { memo, useState } from "react";
import { education, jobExperiences } from "../data";
import Image from "next/image";


const UserProfileEducation = memo(({ experiences } : { experiences: Array<typeof education[0]> }) => {
  const [ visibleExperiencesCount, setVisibleExperiencesCount ] = useState<number>(2);

  const handleToggleExperiences = (): void => {
    if (visibleExperiencesCount === 2) {
      setVisibleExperiencesCount(experiences?.length)
    } else {
      setVisibleExperiencesCount(2);
    }
  }

  return (
    <section className="border border-slate-300 p-3 lg:p4 xl:p-5 relative">
    <div className="flex flex-row gap-x-2 justify-between items-center">
      <h2 className="text-lg text-slate700 font-semibold">Education</h2>
      <button className="btn-secondary px-1.5 py-1 rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>

    <ul className="mt-4">
      {
        experiences && experiences?.filter((_, index: number) => index < visibleExperiencesCount)?.map((experience: typeof education[0], index: number) => (
          <>
            <li key={experience?.institutionName} className="grid grid-cols-[1fr_5fr]">
              <figure className="overflow-hidden relative justify-self-center w-[clamp(30px,80%,70px)] h-auto aspect-square">
                { experience.image && <Image alt={experience.institutionName} src={experience.image} /> }
              </figure>
              <div className="flex flex-col gap-y-2">
                <span className="w-full flex gap-x-2 justify-between">
                  <h3 className="text-slate-700 font-semibold">{experience?.institutionName}</h3>
                  <button className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </button>
                </span>
                <p className="text-slate-400 text-xs flex flex-row gap-1.5">
                  <span className="text-slate-500 font-light text-xs">{experience?.degreeType}</span>.
                  <span className="text-slate-500 font-light text-xs">{experience?.course}</span>.
                  <span className="text-slate-700 font-semibold text-xs">{experience?.startDate}</span>.

                  <span className="text-slate-500 font-light text-xs">{ experience.isCurrentlySchoolingHere ? "Still schooling here" : experience.endDate }</span>
                </p>
                <p className="text-slate-400 text-xs">{experience?.location}</p>
                <ul className="">
                  {
                    experience.achievements && experience.achievements.map((acheivement: string, innerIndex: number) => (
                      <li key={acheivement} className="text-slate-500 text-xs tracking-wide leading-5">{acheivement}</li>
                    ))
                  }
                </ul>
              </div>
            </li>
            { index <= (visibleExperiencesCount - 2) && <div className="h-[1px] w-full bg-slate-300/80 my-5" /> }
          </>
        ))
      }
    </ul>
    
    <div className="w-full flex justify-center mt-5">
      <button onClick={handleToggleExperiences} className="text-primary font-semibold text-center">
        {
          visibleExperiencesCount === 2
            ? `Show ${experiences?.length - visibleExperiencesCount} more educations` :
            "Hide Education"
        }
      </button>
    </div>
  </section>
  )
})

export default UserProfileEducation;