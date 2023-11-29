import { skills } from "../data";

export default function UserProfileSkills() {
  return (
    <section className="border border-slate-300 p-3 lg:p4 xl:p-5 relative">
      <div className="flex flex-row gap-x-2 justify-between items-center">
        <h2 className="text-lg text-slate700 font-semibold">Skills</h2>

        <span className="flex gap-x-2 items-center">
          <button className="btn-secondary px-1.5 py-1 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
          <button className="text-primary btn-secondary px-1.5 py-1 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </button>
        </span>
      </div>

      <ul className="flex flex-row gap-2 lg:gap-3 flex-wrap mt-3">
        {
          skills && skills.map((skill: string, index: number) => (
            <li key={index} className="px-3 py-1.5 text-sm bg-violet-50 text-primary">{skill}</li>
          ))
        }
      </ul>
    </section>
  )
}