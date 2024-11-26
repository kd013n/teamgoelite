import Image from "next/image";
import SampleImage from "../../public/images/Home/HomeMissionBanner.jpg";

export default function CareersTravel() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl font-semibold">
          Team <span className="text-links">Go</span> Elite
        </h2>
        <p className="text-balance text-center text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Travel Sense
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] justify-center items-center">
              <div className="px-8 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Exclusive Travel Opportunities
                </p>
                <p className="mt-2 mb-6 lg:mb-0 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm flex flex-col justify-center gap-y-0 lg:gap-y-3 pb-16 px-8 lg:px-0">
                <div>
                  <Image
                    alt=""
                    src={SampleImage}
                    height={0}
                    width={0}
                    className="lg:m-6 rounded-lg h-[15rem] w-full object-cover"
                  />
                  <p className="mt-2 lg:mr-5 lg:-mt-4 text-sm text-midText text-center lg:text-right font-semibold italic">
                    Bangkok, 2018
                  </p>
                </div>
                <div>
                  <Image
                    alt=""
                    src={SampleImage}
                    height={0}
                    width={0}
                    className="mt-8 lg:m-6 rounded-lg h-[15rem] w-full object-cover"
                  />
                  <p className="text-sm mt-2 lg:m-5 lg:-mt-4  text-midText text-center lg:text-right font-semibold italic">
                    Bangkok, 2018
                  </p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Adventure Awaits
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  maiores impedit.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-8 pt-6 pb-10">
                <Image
                  alt=""
                  src={SampleImage}
                  height={0}
                  width={0}
                  className="rounded-lg h-5/6 w-full object-cover"
                />
                <p className="mt-2 text-sm text-midText text-center font-semibold italic">
                  Tokyo, 2016
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Business Travel Simplified
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-8 pt-6 pb-10">
                <Image
                  alt=""
                  src={SampleImage}
                  height={0}
                  width={0}
                  className="rounded-lg h-5/6 w-full object-cover"
                />
                <p className="mt-2 text-sm text-midText text-center font-semibold italic">
                  Tokyo, 2016
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Tailored Coverage for Every Trip
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                  eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm flex flex-col justify-center gap-y-0 lg:gap-y-3 pb-16 px-8 lg:px-0">
                <div>
                  <Image
                    alt=""
                    src={SampleImage}
                    height={0}
                    width={0}
                    className="lg:m-6 rounded-lg h-[15rem] w-full object-cover"
                  />
                  <p className="mt-2 lg:mr-5 lg:-mt-4 text-sm text-midText text-center lg:text-right font-semibold italic">
                    Bangkok, 2018
                  </p>
                </div>
                <div>
                  <Image
                    alt=""
                    src={SampleImage}
                    height={0}
                    width={0}
                    className="mt-8 lg:m-6 rounded-lg h-[15rem] w-full object-cover"
                  />
                  <p className="text-sm mt-2 lg:m-5 lg:-mt-4  text-midText text-center lg:text-right font-semibold italic">
                    Bangkok, 2018
                  </p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
