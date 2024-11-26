import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const tiers = [
  {
    id: "tier-gama",
    href: "/gama",
    hrefname: "Testimonials",
    name: "GAMA",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veritatis.",
    featured: false,
  },
  {
    id: "tier-mdrt",
    href: "/mdrt",
    hrefname: "Testimonials",
    href2: "/mdrt-mentoring",
    href2name: "Mentoring Program",
    name: "MDRT",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veritatis.",
    featured: true,
  },
  {
    id: "tier-axaprime",
    href: "https://axa.com.ph/axaprime",
    hrefname: "AXA Prime",
    name: "AXA Prime",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veritatis.",
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CareersHighIncome() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-6xl">
          High-Income Earners
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-md font-medium text-gray-600 sm:text-xl/8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat
        placeat nihil libero animi autem odit error aspernatur vel.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-foreground shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-900",
                  "text-3xl font-semibold tracking-tight"
                )}
              >
                {tier.name}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 text-base/7"
              )}
            >
              {tier.description}
            </p>
            <Link
              href={tier.href}
              target="_blank"
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "text-white ring-1 ring-inset ring-white/20 hover:ring-white/50  focus-visible:outline-white"
                  : "text-links ring-1 ring-inset ring-red-200 hover:ring-red-300 focus-visible:outline-red-400",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              {tier.hrefname}
            </Link>
            {tier.id === "tier-mdrt" && tier.href2 && (
              <Link
                href={tier.href2}
                target="_blank"
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-hoverLinks text-white shadow-sm hover:bg-links focus-visible:outline-red-400"
                    : "",
                  "mt-2 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                )}
              >
                {tier.href2name}{" "}
                <ArrowRightIcon className="inline-block size-4 ml-1" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
