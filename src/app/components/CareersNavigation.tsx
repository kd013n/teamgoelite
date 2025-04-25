"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import SampleImage from "../../public/images/Home/careers.jpg";

export default function CareersNavigation() {
  const [activeCategory, setActiveCategory] = useState("financialAdvisers");
  const [activeTab, setActiveTab] = useState("qualifications");
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const subCategories = [
    {
      name: "All Products",
      items: [
        {
          name: "Financial Advisers Hiring Program",
          value: "faHiring",
          description:
            "AHP Program is a 12-36 months extensive advisor developmental training to prepare the candidate/s to become a highly productive financial advisors.",
          imageSrc: SampleImage,
          qualifications: [
            "Open to candidates with atleast 5 years sales experience in Retail Banking, Life Insurance sales experience or Bancassurance",
          ],
          keytasks: ["N/A"],
        },
        {
          name: "Associate Branch Head Hiring Program",
          value: "abhHiring",
          description:
            "ABH Program is a 12 months extensive leadership training to prepare the candidate/s to become future Branch Head",
          imageSrc: SampleImage,
          qualifications: [
            "Good follower & obedient",
            "With atleast 3 years sales management experience in the life insurance industry",
            "Must have an existing sales team",
          ],
          keytasks: [
            "To recruit business partners as direct Unit Heads & Financial Advisors",
            "Undergo & finish all mandatory courses & trainings",
            "Monitor/track the daily activities of his/her direct team",
            "Reports directly to recruiting leader for mentoring",
          ],
        },
        {
          name: "Manager Hiring Program",
          value: "mgHiring",
          description:
            "MHP Program is a 12 months extensive leadership training to prepare the candidate/s to become a regular Unit Head",
          imageSrc: SampleImage,
          qualifications: [
            "Good follower & obedient",
            "With atleast 3 years field sales & management experience from industries such as pharmaceutical, banking, healthcare, investment, real estate, travel, FMCG, etc.",
          ],
          keytasks: [
            "To recruit business partners as direct Financial Advisors",
            "Undergo & finish all mandatory courses & trainings",
            "Monitor/track the daily activities of his/her direct team",
            "Reports directly to recruiting leader for mentoring",
          ],
        },
        {
          name: "Manager Development Program",
          value: "mgDev",
          description:
            "Internal MDP Program is a 12 months extensive leadership training to prepare the candidate/s to become an appointed Unit Head.",
          imageSrc: SampleImage,
          qualifications: [
            "Good follower & obedient",
            "Open to existing Financial Advisors (organic)",
            "Must have recruited atleast 5 advisors prior to promotion to Unit Head",
          ],
          keytasks: [
            "To recruit direct Financial Advisors",
            "Finish all mandatory courses & trainings",
            "Monitor/track the daily activities of his/her direct team",
            "Reports directly to recruiting leader for mentoring",
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activeCategoryData =
    subCategories[0].items.find((item) => item.value === activeCategory) ??
    subCategories[0].items[0];

  if (!isMounted) return null;

  return (
    <div className="bg-background" id="navigation">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Dropdown */}
        <div className="bg-background flex items-baseline justify-between border-b border-lightestText pb-6 pt-24 sticky top-6 md:top-0 md:relative">
          <h1 className="text-4xl font-bold tracking-tight text-darkText">
            Career Offerings
          </h1>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              <span>All Categories</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-4 space-y-4">
                  {/* Featured Programs with Images */}
                  <div>
                    <div className="grid grid-cols-1">
                      {subCategories[0].items.map((item) => (
                        <button
                          key={item.value}
                          onClick={() => {
                            setActiveCategory(item.value);
                            setIsOpen(false);
                          }}
                          className="group relative text-left"
                        >
                          <p className="mt-2 text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Other Categories */}
                  <div className="space-y-2">
                    {subCategories.slice(1).map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveCategory(category.items[0]?.value || "");
                          setIsOpen(false);
                        }}
                        className="flex items-center space-x-2 w-full px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <span className="w-5 h-5 bg-gray-300 rounded-full"></span>
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <section aria-labelledby="careers-heading" className="pb-24 pt-6">
          <h2 id="careers-heading" className="sr-only">
            Careers
          </h2>

          {/* Career Details */}
          <div className="w-full flex lg:flex-row items-start justify-center gap-x-10">
            <Image
              src={activeCategoryData.imageSrc}
              height={0}
              width={0}
              alt="Image"
              className="w-[500px] h-auto overflow-hidden object-cover rounded-md"
            />
            <div className="w-full">
              <h2 className="text-2xl font-semibold">
                {activeCategoryData.name}
              </h2>
              <p className="mt-2 text-darkText">
                {activeCategoryData.description}
              </p>

              {/* Tab Navigation */}
              <div className="mt-4 flex border-b">
                <button
                  className={`px-4 py-2 ${
                    activeTab === "qualifications"
                      ? "border-b-2 border-darkText font-semibold"
                      : ""
                  }`}
                  onClick={() => setActiveTab("qualifications")}
                >
                  Qualifications
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeTab === "keytasks"
                      ? "border-b-2 border-darkText font-semibold"
                      : ""
                  }`}
                  onClick={() => setActiveTab("keytasks")}
                >
                  Key Tasks
                </button>
              </div>

              {/* Tab Content */}
              <ul className="mt-4 space-y-2">
                {activeTab === "qualifications"
                  ? activeCategoryData.qualifications.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))
                  : activeCategoryData.keytasks.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-blue-500 mr-2" />
                        {item}
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
