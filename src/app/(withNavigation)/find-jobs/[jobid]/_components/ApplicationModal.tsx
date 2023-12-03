import Modal from "@sharedComponents/Modal";

interface IProps {
  isOpen: boolean,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
export default function ApplicationModal({ isOpen, setIsOpen }: IProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="p-4 md:p-6 lg:p-8 bg-white max-w-[600px] overflow-y-auto">
      <div className="flex flex-col justify-center items-stretch">
        <div className="bg-white flex w-full flex-col max-md:max-w-full">
          
          <div className="items-stretch self-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/38e610670618844a18f4fc41d343348b540700d4f7f2501b97b5c064c0e28ac2?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-square object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
            />
            <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
              <div className="text-slate-700 text-2xl font-semibold leading-7 whitespace-nowrap max-md:max-w-full">
                Social Media Assistant
              </div>
              <div className="items-center text-slate-500/80 flex gap-3 mt-1 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <span className="">Nomad</span> • <span>Paris, France</span> • <span>Full Time</span>
              </div>
            </div>
          </div>
          <div className="bg-zinc-200 self-stretch shrink-0 h-px my-6 max-md:max-w-full" />
          <div className="text-slate-800 text-2xl font-semibold leading-7 self-stretch whitespace-nowrap max-md:max-w-full">
            Submit your application
          </div>
          <div className="text-slate-500/80 text-sm leading-7 self-stretch whitespace-nowrap mt-2 max-md:max-w-full">
            The following is required and will only be shared with Nomad
          </div>

          <label htmlFor="fullname" className="mt-7">
            <p className="text-slate-600 text-base font-semibold leading-7 self-stretch whitespace-nowrap">Full Name</p>
            <input id="fullname" type="" placeholder="Enter your fullname" className="text-gray-500 w-full outline-offset-1 placeholder:text-slate-300 focus:outline focus:outline-2 focus:outline-slate-400/60 text-base leading-7 whitespace-nowrap self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] justify-center mt-1 p-4 py-2.5 border-solid items-start max-md:pr-5" />
          </label>

          <label htmlFor="email" className="mt-7">
            <p className="text-slate-600 text-base font-semibold leading-7 self-stretch whitespace-nowrap">Email Address</p>
            <input id="email" type="email" placeholder="Enter your email address" className="text-gray-500 w-full outline-offset-1 placeholder:text-slate-300 focus:outline focus:outline-2 focus:outline-slate-400/60 text-base leading-7 whitespace-nowrap self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] justify-center mt-1 p-4 py-2.5 border-solid items-start max-md:pr-5" />
          </label>

          <label htmlFor="phone" className="mt-7">
            <p className="text-slate-600 text-base font-semibold leading-7 self-stretch whitespace-nowrap">Phone Number</p>
            <input id="phone" type="tel" placeholder="Enter your phone number" className="text-gray-500 w-full outline-offset-1 placeholder:text-slate-300 focus:outline focus:outline-2 focus:outline-slate-400/60 text-base leading-7 whitespace-nowrap self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] justify-center mt-1 p-4 py-2.5 border-solid items-start max-md:pr-5" />
          </label>

          <label htmlFor="prevJobTitle" className="mt-7">
            <p className="text-slate-600 text-base font-semibold leading-7 self-stretch whitespace-nowrap">Current of previous job title</p>
            <input id="prevJobTitle" type="tel" placeholder="What&apos;s your current or previous job title?" className="text-gray-500 w-full outline-offset-1 placeholder:text-slate-300 focus:outline focus:outline-2 focus:outline-slate-400/60 text-base leading-7 whitespace-nowrap self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] justify-center mt-1 p-4 py-2.5 border-solid items-start max-md:pr-5" />
          </label>

         
          <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
          <div className="text-slate-800 text-lg font-bold leading-7 self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
            LINKS
          </div>

          <label htmlFor="linkedIn" className="mt-7">
            <p className="text-slate-600 text-base font-semibold leading-7 self-stretch whitespace-nowrap">Linkedin Profile</p>
            <input id="linkedIn" type="url" placeholder="Link to your LinkedIn" className="text-gray-500 w-full outline-offset-1 placeholder:text-slate-300 focus:outline focus:outline-2 focus:outline-slate-400/60 text-base leading-7 whitespace-nowrap self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] justify-center mt-1 p-4 py-2.5 border-solid items-start max-md:pr-5" />
          </label>

          <label htmlFor="portfolio" className="mt-7">
            <p className="text-slate-600 text-base font-semibold leading-7 self-stretch whitespace-nowrap">Portfolio URL</p>
            <input id="portfolio" type="url" placeholder="Link to your portfolio" className="text-gray-500 w-full outline-offset-1 placeholder:text-slate-300 focus:outline focus:outline-2 focus:outline-slate-400/60 text-base leading-7 whitespace-nowrap self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] justify-center mt-1 p-4 py-2.5 border-solid items-start max-md:pr-5" />
          </label>

          <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
          <div className="text-slate-600 text-base font-semibold leading-7 self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
            Additional information
          </div>
          <textarea className="text-gray-500 placeholder:text-slate-300 text-base outline-none border-b-0 leading-7 whitespace-nowrap self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] bg-white mt-1 pl-4 pr-16 pt-4 pb-24 border-solid items-start max-md:max-w-full max-md:pr-5" placeholder="Add a cover letter or anything else you want to share">
            
          </textarea>
          <div className="items-stretch self-stretch border border-[color:var(--neutrals-20,#D6DDEB)] bg-white flex gap-3 pl-4 pr-20 py-3 border-solid max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b54fc6a12b1a06a8ca2888957c6b6a7756c484bc82bff4b15777417b07550c7f?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d5abc6cd726ceca5b01c887fc17660e3eb345d68c9bd3dff1624289535aca26?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9256cd989b80f1ce3d1f4e14c908813c9f21e5999cd6c723bacb2131abe8c132?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b424ea8f3173ba64ed52545f6cd4679b962e06ad35a1ebe6001d2bbc7ceaf94?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e3c379d2537a0834e0de6bce270bd8116882698d2e2a3ec1202f68f52b7df22?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f230575081ac5bbc413511c5615005322bc5451ce38ac11354291702ec0e907b?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="justify-between items-stretch self-stretch flex gap-5 py-0.5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-gray-400 text-sm leading-7 whitespace-nowrap">
              Maximum 500 characters
            </div>
            <div className="text-slate-500 text-right text-sm leading-7 whitespace-nowrap">
              0 / 500
            </div>
          </div>
          <div className="items-center self-stretch flex w-full justify-between gap-5 mt-8 pr-3 max-md:max-w-full max-md:flex-wrap">
            <div className="text-gray-800 text-base font-semibold leading-7 grow whitespace-nowrap my-auto">
              Attach your resume
            </div>
            <div className="justify-between rounded border border-[color:var(--brands-primary,#4640DE)] bg-slate-50 self-stretch flex gap-4 p-4 border-dashed items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99db412db50ae07e99be2c870ddd8a7c44dd654078ff66a22854178374065fc5?apiKey=0ce679486ae447bd8ce08b2cc2263e2e&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-600 text-base font-medium leading-7 self-stretch grow whitespace-nowrap">
                Attach Resume/CV
              </div>
            </div>
          </div>
          <div className="bg-zinc-200 self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
          <button className="text-white text-center text-base font-bold leading-7 whitespace-nowrap justify-center items-center self-stretch bg-indigo-600 mt-8 px-16 py-3 max-md:max-w-full max-md:px-5">
            Submit Application
          </button>
          <div className="text-indigo-600 text-base leading-7 self-stretch mt-8 mb-4 max-md:max-w-full">
            <span className="text-slate-600">
              By sending the request you can confirm that you accept our{" "}
            </span>
            <span className="text-indigo-600">Terms of Service</span>
            <span className="text-slate-600"> and </span>
            <span className="text-indigo-600">Privacy Policy</span>
          </div>
        </div>
      </div>
    </Modal>
  )
}