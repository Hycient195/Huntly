import { memo } from "react";

interface IProps {
  filters: Array<string>
}

const FilterSelector: React.FC<IProps> = memo(({ filters }) => {
  return (
    <ul className="flex flex-col items- gap-y-2">
      {
        filters.map((filter: string, index: number) => (
          <li key={index} className="">
            <label htmlFor={filter} className="text-slate-500 hover:cursor-pointer flex font-light flex-row items-center gap-x-2">
              <input id={filter} type="checkbox" className="accent-primary h-[20px] w-[20px]" />
              {filter}
            </label>
          </li>
        ))
      }
    </ul>
  )
})

export default FilterSelector;

export const employmentFilter = [
  "Full-Time", "Part-Time", "Remote", "Internship", "Contract"
]

export const categoriesFilter = [
  "Design", "Sales", "Marketing", "Business", "Human Resource", "Finance", "Engineering", "Technoloty"
]

export const jobLevel = [
  "Entry Level", "Mid Level", "Senior", "Director", "VP or Above"
]

export const salaryRange = [
  "$700 - $1000", "$100 - $1500", "$1500 - $2000", "$3000 or above"
]

export const industryFilter = [
  "Advertising",
  "Business Services",
  "Blockchain",
  "Cloud",
  "Consumer Tech",
  "Education",
  "Fintech",
  "Gaming",
  "Food & Beverage",
  "Healthcare",
  "Hostinng",
  "Media",
]

export const companySizeFilter = [
  "1-50",
  "51-150",
  "151-250",
  "251-500",
  "501-1000",
  "1000 - above",
]