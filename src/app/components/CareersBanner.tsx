import Link from "next/link";
import {
  BanknotesIcon,
  BriefcaseIcon,
  GiftIcon,
  GlobeEuropeAfricaIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Income Opportunities",
    description:
      "Take control of your financial future. Set your desired earnings and achieve your goals on your terms.",
    icon: BanknotesIcon,
  },
  {
    name: "Career Growth",
    description:
      "Join us to elevate your career. Together, we'll unlock your potential and achieve incredible milestones. Your growth awaits!",
    icon: BriefcaseIcon,
  },
  {
    name: "Rewards and Recognition",
    description:
      "Unlock your earning potential with our innovative bonuses. Achieve your financial dreams faster than ever before.",
    icon: GiftIcon,
  },
  {
    name: "Travel",
    description:
      "Discover exciting domestic and international travel promotions, exploring the world around you at no cost.",
    icon: GlobeEuropeAfricaIcon,
  },
];

export default function CareersBanner() {
  return (
    <div className="bg-background py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-links">
            Career Benefits
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-balance">
            Careers at Team <span className="text-buttons">Go</span> Elite
          </p>
          <div className="mt-6 text-md md:text-base/7 text-gray-600">
            <p>
              Our benefits are created to help all of our employees and enhance
              the operating environment. To encourage people, we ensure that
              what we offer was equitable, supportive and compete with the
              market.
            </p>
            <p className="mt-2 font-semibold">
              We mentor, we empower, and we lead you to be successful.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-18 lg:mt-16 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-md md:text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-links">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm md:text-md text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="#navigation"
            className="inline-block text-center text-lightText font-semibold hover:text-buttons hover:font-bold"
          >
            See more <ArrowRightIcon className="inline-block size-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
