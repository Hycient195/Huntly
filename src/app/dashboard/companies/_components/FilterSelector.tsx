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
              <input id={filter} type="checkbox" className="accent-primary" />
              {filter}
            </label>
          </li>
        ))
      }
    </ul>
  )
})

export default FilterSelector;

export const industryFilter = [
  "Advertising",
  "Business Services",
  "Blockchain)",
  "Cloud)",
  "Consumer Tech)",
  "Education)",
  "Fintech)",
  "Gaming)",
  "Food & Beverage)",
  "Healthcare)",
  "Hostinng)",
  "Media)",
]

export const companySizeFilter = [
  "1-50)",
  "51-150)",
  "151-250)",
  "251-500)",
  "501-1000)",
  "1000 - above)",
]