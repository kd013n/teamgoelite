import Image from "next/image";

import { TrophyIcon, UserGroupIcon, StarIcon } from "@heroicons/react/20/solid";

import SampleImage from "../../public/images/Home/HomeMissionBanner.jpg";

export default function HomeTagline() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-6 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base leading-7 text-gray-700 font-bold">
                AXA Team Go Elite
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-5xl">
                #KnowYouCan
              </h1>
              <div className="mt-6 max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  We are dedicated to promoting financial literacy and
                  advocating for risk management among Filipino families. We aim
                  to empower Filipinos by providing them with opportunities to
                  achieve financial freedom and improve their overall financial
                  well-being.
                </p>
              </div>
              <p className="mt-8 text-lg leading-8 text-gray-900 font-bold">
                We mentor, we empower, and we lead you to be successful.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <TrophyIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-red-500"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Achievement Goes Here.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserGroupIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-red-500"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Stat Goes Here.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <StarIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-red-500"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Random Thingy Goes Here.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-6 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt=""
            src={SampleImage}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
      </div>
    </div>
  );
}
