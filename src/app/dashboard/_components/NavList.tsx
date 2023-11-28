"use client";

import Link from "next/link"
import { navRoutes } from "../data"
import { usePathname } from "next/navigation";

export const NavList = ({ route }: { route: Array<typeof navRoutes[0]> }) => {
  const pathname = usePathname();
  const highlightActive = (arg: string): boolean => pathname.includes(arg);

  return (
    <ul className="flex flex-col gap-y-2 my-[2vh]">
      {
        route.map((item: typeof route[0], index: number) => (
          <li key={index} className={`pl-3 pr-5 border-l-4 ${highlightActive(item.route) && "border-l-indigo-500"}`}>
            <Link href={`/dashboard/${item.route}`} className={`flex px-2 py-1.5 rounded-md flex-row gap-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 ${highlightActive(item.route) && "bg-indigo-50 text-indigo-600"}`}>
              {item.icon}
              <p className="text-md">{item.text}</p>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}