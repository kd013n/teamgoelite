"use client";

import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className="bg-background">
      <div className="relative isolate px-8 lg:px-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#db5353] to-[#4342a0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-3xl py-40 sm:py-38 lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-midText ring-1 ring-outlines hover:ring-hoverOutlines">
              We&apos;ve updated our site.{" "}
              <Link
                href="#"
                className="font-semibold text-links hover:text-hoverLinks"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empower Your Journey, Secure Your Future
            </h1>
            <p className="mt-6 text-sm lg:text-lg leading-5 md:leading-8 text-gray-600">
              Team Go Elite is dedicated to guiding you towards a successful
              career in the insurance industry. We provide comprehensive
              training, mentorship, and resources to help you achieve financial
              freedom and make a positive impact in your community. Join us and
              become part of a team that empowers you to thrive!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#HomeNavigation"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
              >
                Discover TGE
              </Link>
              <Link
                href="#HomeMission"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Our Ethos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 -z-10 transform-gpu overflow-hidden blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(10% 20%, 90% 10%, 100% 40%, 75% 100%, 40% 80%, 20% 60%, 0% 30%)",
            }}
            className="relative right-[calc(50%-10rem)] aspect-[1155/678] w-[28rem] translate-y-1/2 rotate-[30deg] bg-gradient-to-bl from-[#7573b9] to-[#c06c6c] opacity-50 sm:right-[calc(50%-20rem)] sm:w-[56rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-10 transform-gpu overflow-hidden blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(10% 0%, 90% 5%, 100% 40%, 85% 95%, 50% 100%, 25% 75%, 5% 50%)",
            }}
            className="relative right-0 aspect-[1155/678] w-[48rem] translate-y-1/4 rotate-[10deg] bg-gradient-to-br from-[#c23838] to-[#4342a0] opacity-20 sm:w-[72rem]"
          />
        </div>
      </div>
    </div>
  );
}
