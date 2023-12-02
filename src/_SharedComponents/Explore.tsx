import Link from "next/link"

export default function Explore() {
  return (
    <div className="flex flex-col items-stretch">
      <div className="items-center bg-white flex w-full flex-col justify-center">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          <div className="text-gray-700 text-lg leading-7 opacity-50 max-md:max-w-full">
            Companies we helped grow
          </div>
          <div className="justify-between items-start flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
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
            <Link href="/find-jobs" className="justify-end items-stretch flex gap-4 mt-7 self-end">
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
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="items-center border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex grow flex-col w-full p-8 border-solid max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0ad0b43-db49-498a-af42-0d52c0a4d5f1?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-[4.38] object-contain object-center w-[210px] overflow-hidden"
                  />
                  <div className="text-slate-800 text-2xl font-semibold leading-7 self-stretch mt-8">
                    Design
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-4 mt-3 px-px">
                    <div className="text-slate-500 text-lg leading-7">
                      235 jobs available
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f93b32a-5d59-49c0-a1f7-221c277dc957?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                      className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex grow flex-col w-full p-8 border-solid max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/80d82313-aed0-40a0-8664-e001d0bdae29?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-[4.38] object-contain object-center w-[210px] overflow-hidden"
                  />
                  <div className="text-slate-800 text-2xl font-semibold leading-7 self-stretch mt-8">
                    Sales
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-4 mt-3 px-px">
                    <div className="text-slate-500 text-lg leading-7">
                      756 jobs available
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/be5296e8-c1f7-4a4c-b0b8-595f01a082b5?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                      className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center bg-indigo-600 flex grow flex-col w-full p-8 max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2d7d8e3-ee93-4270-8851-9a40ac0c28d9?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-[4.38] object-contain object-center w-[210px] overflow-hidden"
                  />
                  <div className="text-white text-2xl font-semibold leading-7 self-stretch mt-8">
                    Marketing
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-4 mt-3 px-px">
                    <div className="text-white text-lg leading-7">
                      140 jobs available
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d5c66e9-2bb3-4781-b048-e67c38b70bdc?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                      className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex grow flex-col w-full p-8 border-solid max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/afda9a15-ce84-4fa3-9f7e-bda855ee7689?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-[4.38] object-contain object-center w-[210px] overflow-hidden"
                  />
                  <div className="text-slate-800 text-2xl font-semibold leading-7 self-stretch mt-8">
                    Finance
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-4 mt-3 px-px">
                    <div className="text-slate-500 text-lg leading-7">
                      325 jobs available
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f866fa2-de2f-4a25-8a4b-040a1381a079?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                      className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="items-center border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex grow flex-col w-full p-8 border-solid max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ebcc437-7712-44b3-8e61-40cae8acd0a6?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-[4.38] object-contain object-center w-[210px] overflow-hidden"
                  />
                  <div className="text-slate-800 text-2xl font-semibold leading-7 self-stretch mt-8">
                    Technology
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-4 mt-3 px-px">
                    <div className="text-slate-500 text-lg leading-7">
                      436 jobs available
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/23ec5b05-2b2b-4841-8a1a-6a45086db4fb?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                      className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex grow flex-col w-full p-8 border-solid max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9911269f-8cac-414d-b7d9-a0ee6af4b33e?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-[4.38] object-contain object-center w-[210px] overflow-hidden"
                  />
                  <div className="text-slate-800 text-2xl font-semibold leading-7 self-stretch mt-8">
                    Engineering
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-4 mt-3 px-px">
                    <div className="text-slate-500 text-lg leading-7">
                      542 jobs available
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36bfc9a-a60a-4d86-8e79-71c0697d5b7c?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                      className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex grow flex-col w-full p-8 border-solid max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a97a03-f61f-4fae-bbd2-c164e468e74a?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-[4.38] object-contain object-center w-[210px] overflow-hidden"
                  />
                  <div className="text-slate-800 text-2xl font-semibold leading-7 self-stretch mt-8">
                    Business
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-4 mt-3 px-0.5">
                    <div className="text-slate-500 text-lg leading-7">
                      211 jobs available
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f95fd24-3760-422f-9282-493332ddf7f8?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                      className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex grow flex-col w-full p-8 border-solid max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06c0367c-7837-40e3-b538-90d6819554ba?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                    className="aspect-[4.38] object-contain object-center w-[210px] overflow-hidden"
                  />
                  <div className="text-slate-800 text-2xl font-semibold leading-7 self-stretch mt-8">
                    Human Resource
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-4 mt-3 px-px">
                    <div className="text-slate-500 text-lg leading-7">
                      346 jobs available
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1c33ce-db76-4654-a8c1-a6da653f9511?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                      className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


