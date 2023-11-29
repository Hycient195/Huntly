import { additionalDetails } from "../data"

interface IProps {
  details: typeof additionalDetails
}

export default function AdditionalDetails({ details }: IProps) {
  return (
    <div className="flex flex-col gap-y-4 p-2 lg:p-3 xl:p-4 border border-slate-300">
      <span className="flex flex-row items-center gap-x-2 justify-between">
        <h2 className="text-lg text-slate700 font-semibold">Additional Details</h2>
        <button className="bg-transparent text-primary top-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>
      </span>

      <ul className="flex flex-col gap-y-3">
        {
          details && details.map((detail: typeof additionalDetails[0], index: number) => (
            <li className="grid grid-cols-[max-content_1fr] gap-x-1.5 lg:gap-x-2">
              <span className="text-slate-500 bg-transparent">
                {detail.icon}
              </span>
              <div className="">
                <p className="text-slate-500 text-sm">{detail.text}</p>
                {
                  detail.text === "Email"
                    ? (
                      <a href={`mailto:${detail.detail}`} className="text-slate-600 text-sm">{detail.detail}</a>
                    ) : detail.text === "Phone" ? (
                      <a href={`tel:${detail.detail}`} className="text-slate-600 text-sm">{detail.detail}</a>
                    ) : (
                      <p className="text-slate-600 text-sm">{detail.detail}</p>
                    )
                }
              </div>
          </li>
          ))
        }
      </ul>
    </div>
  )
}