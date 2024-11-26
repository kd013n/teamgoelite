import { CheckIcon } from "@heroicons/react/24/outline";

const tiers = [
  {
    id: "tier-mission",
    name: "Our Mission",
    description:
      "To Create Life-Changing Experiences With Our Partners & Clients",
    featured: false,
  },
  {
    id: "tier-core",
    name: "Our Core Values",
    corevalues: [
      "Culture of Learning",
      "Strong Support System",
      "Integrity & Malasakit",
      "Teamwork",
      "God-Centered",
      "Competitive Spirit",
    ],
    featured: true,
  },
  {
    id: "tier-vision",
    name: "Our Vision",
    description:
      "To be a Mega-Agency With 5 Branches, 300 Distributors, 20 MDRTs & 250M PVI",
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeEthos() {
  return (
    <div className="relative isolate px-6 py-24 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 75% 10%, 100% 25%, 90% 50%, 100% 75%, 75% 90%, 50% 100%, 25% 90%, 0% 75%, 10% 50%, 0% 25%, 25% 10%, 50% 0%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-t from-[#ca3333] to-[#9089fc] opacity-40"
        ></div>
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          The Team <span className="text-buttons">Go</span> Elite Ethos
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-md leading-7 md:leading-8 text-midText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat
        placeat nihil libero animi autem odit error aspernatur vel.
      </p>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-5xl lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-foreground shadow-2xl"
                : "bg-white sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 flex flex-col justify-center items-center"
            )}
          >
            <p className="mt-4 flex items-baseline gap-x-2 justify-center">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-900 pt-12",
                  "text-4xl font-semibold text-center tracking-tight"
                )}
              >
                {tier.name}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-midText" : "text-midText pb-12",
                "mt-5 text-lg text-center"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-lightestText" : "text-gray-600",
                "mt-3 space-y-1 w-fit"
              )}
            >
              {tier.corevalues &&
                tier.corevalues.map((value) => (
                  <li
                    key={value}
                    className="flex items-center gap-x-3 text-base/7 font-medium"
                  >
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured
                          ? "text-links font-semibold"
                          : "text-links",
                        "size-5 flex-none"
                      )}
                    />
                    {value}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
