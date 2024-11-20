"use client";

import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className="bg-background">
      <div className="relative isolate px-8 lg:px-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="absolute left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#db5353] to-[#4342a0] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-moveBackground"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 transform-gpu -translate-x-1/2 overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(50% 0%, 90% 20%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 10% 20%)",
              }}
              className="relative aspect-square w-[45rem] bg-gradient-to-br from-[#ff7f50] to-[#6a5acd] opacity-40 animate-moveBackground"
            />
            {/* Shape 2 */}
            <div
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 85% 40%, 70% 85%, 50% 100%, 30% 85%, 15% 40%)",
              }}
              className="absolute -left-36 bottom-16 aspect-square w-[35rem] bg-gradient-to-tr from-[#4873d1] to-[#ff2c2c] opacity-30 animate-moveBackground2"
            />
            {/* Shape 3 */}
            <div
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
              className="absolute left-36 -bottom-20 aspect-square w-[40rem] bg-gradient-to-bl from-[#ff7a7a] to-[#574de0] opacity-50 animate-moveBackground3"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl py-44 lg:py-48">
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
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl drop-shadow-lg">
              Empower Your Journey, Secure Your Future
            </h1>
            <p className="mt-6 text-lg leading-8 text-darkText">
              Team Go Elite is dedicated to guiding you towards a successful
              career in the insurance industry. We provide comprehensive
              training, mentorship, and resources to help you achieve financial
              freedom. Join us and become part of a team that empowers you to
              thrive!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#HomeNavigation"
                className="rounded-md bg-buttons px-3.5 py-2.5 text-sm font-semibold text-background shadow-lg hover:bg-hoverButtons"
              >
                Discover TGE
              </Link>
              <Link
                href="#HomeMission"
                className="text-sm font-semibold leading-6 text-darkText"
              >
                Our Ethos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
