import { memo } from "react";
import Image from "next/image";
import { benefits } from "../_SharedData/perksAndBenefits";

const BenefitCard: React.FC<typeof benefits[0]> = memo(({ image, title, text }) => {
  return (
    <li className="max-w-[350px] flex flex-col">
      <Image alt={title} className="self-center lg:self-start" src={image} />
      <h3 className="text-md self-center lg:self-start text-slate-800 font-semibold mt-4">{title}</h3>
      <p className="text-slate-500 text-sm font-light mt-2 list tracking-wider">{text}</p>
    </li>
  )
})

BenefitCard.displayName = "BenefitCard";
export default BenefitCard;