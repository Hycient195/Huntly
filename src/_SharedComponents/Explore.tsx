import Link from "next/link"
import { exploreCategory } from "../app/(withNavigation)/data";

export default function Explore() {
  return (
    <div className="flex flex-col items-stretch">
      <div className="items-center bg-white flex w-full flex-col justify-center">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          {/* <div className="text-gray-700 text-lg leading-7 opacity-50 max-md:max-w-full">
            Companies we helped grow
          </div> */}
          <div className="justify-between items-start flex gap-6 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b99e9c8-ff41-485c-bdf0-ade9417e8181?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-[3.85] object-contain object-center w-[154px] opacity-30 overflow-hidden self-stretch shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f533fc0-c36c-4952-944f-6a66cc1e9c24?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-[2.56] object-contain object-center w-[82px] opacity-30 overflow-hidden shrink-0 max-w-full self-start"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/49f8e597-da5c-40ad-b911-8c457d1a661d?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-[7.63] object-contain object-center w-[183px] opacity-30 overflow-hidden shrink-0 max-w-full self-start"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37fc158a-40a1-4a12-ae9b-97a9262f2a2d?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-[4.14] object-contain object-center w-[116px] opacity-30 overflow-hidden shrink-0 max-w-full self-start"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f543ae-30b4-4161-b3a6-389dd0095ad1?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-[3.38] object-contain object-center w-[108px] opacity-30 overflow-hidden shrink-0 max-w-full self-start"
            />
          </div>
        </div>
      </div>
      <div className="justify-end items-center bg-white flex w-full flex-col pt-12  max-md:max-w-full">
        <div className="flex w-full max-w-[1192px] flex-col items-stretch mt-6 max-md:max-w-full">
          <div className="justify-between items-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-sky-400 text-5xl font-semibold leading-[53px] grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
              <span className="text-slate-800">Explore by </span>
              <span className="text-sky-400">category</span>
            </div>
            <Link href="/find-jobs" className="justify-end items-stretch flex gap-4 self-end">
              <div className="text-indigo-600 text-center text-base font-semibold leading-7">
                Show all jobs
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/caac7888-f29e-4186-962d-5f556851538c?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </Link>
          </div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[clamp(0.8rem,1.8vw,2rem)]">
              {
                exploreCategory.map((category: typeof exploreCategory[0], index: number) => (
                  <div className="items-center group border rounded-lg hover:bg-primary duration-500 flex grow flex-col w-full p-8 border-solid">
                    <div className="text-primary group-hover:text-white w-[40%] h-auto aspect-square flex items-center justify-center"> {category.icon}</div>
                    <div className="text-slate-600 group-hover:text-white tracking-wide text-2xl font-semibold leading-7 self-stretch mt-8">
                      {category.title}
                    </div>
                    <div className="items-stretch self-stretch flex justify-between gap-4 mt-1 px-px">
                      <div className="text-slate-400 group-hover:text-white text-md leading-7">
                        {category.details}
                      </div>
                      <div className="group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>

                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


