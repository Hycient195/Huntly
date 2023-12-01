"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react"

type TView = ("My Profile"|"Login Details"|"Notifications");


export default function SettinsLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const views = [
    { text: "My Profile", route: "my-profile" },
    { text: "Login Details", route: "details" },
    { text: "Notifications", route: "notifications" }
  ]
  
  return (
    <main className="p-2 md:p-3 lg:p-4 xl:p-6 h-screen">
      <ul className="grid grid-flow-col gap-x-[1vw max-w-max">
        {
          views.map((view: typeof views[0], index: number) => (
            <li key={index} className={`border-4 border-white duration-300 ${pathname.includes(view.route) && " border-b-primary"}`}>
              <button onClick={() => router.push(view.route)} className="font-medium text-slate-500 px-1 py-2 capitalize">{view.text.replace(/-/g, " ")}</button>
            </li>
          ))
        }
      </ul>
      <hr className="bg-zinc-200 self-stretch shrink-0 h-px max-md:max-w-full" />
      { children }
    </main>
  )
}