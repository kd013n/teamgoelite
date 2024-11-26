"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon, CheckIcon } from "@heroicons/react/20/solid";
import SampleImage from "../../public/images/Home/HomeMissionBanner.jpg";
import Image from "next/image";

const subCategories = [
  {
    name: "Financial Advisers Hiring Program",
    value: "financialAdvisers",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente est earum quis error quidem tempore atque similique ducimus fuga reprehenderit dicta asperiores, reiciendis eveniet voluptates doloribus ullam quia vitae exercitationem.",
    imageSrc: SampleImage,
    resource: "https://www.example.com",
    forms: "https://youtube.com",
    qualifications: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    keytasks: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
  },
  {
    name: "Associate Branch Head Program",
    value: "associateBranchHead",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci magni incidunt provident beatae, totam praesentium exercitationem numquam error ducimus natus culpa nihil itaque molestias reiciendis hic eligendi.",
    imageSrc: SampleImage,
    resource: "https://www.example.com",
    forms: "https://youtube.com",
    qualifications: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    keytasks: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
  },
  {
    name: "Manager Hiring Program",
    value: "managerHiring",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci magni incidunt provident beatae, totam praesentium exercitationem numquam error ducimus natus culpa nihil itaque molestias reiciendis hic eligendi.",
    imageSrc: SampleImage,
    resource: "https://www.example.com",
    forms: "https://youtube.com",
    qualifications: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    keytasks: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
  },
  {
    name: "Manager Development Program",
    value: "managerDevelopment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci magni incidunt provident beatae, totam praesentium exercitationem numquam error ducimus natus culpa nihil itaque molestias reiciendis hic eligendi.",
    imageSrc: SampleImage,
    resource: "https://www.example.com",
    forms: "https://youtube.com",
    href: "/careers/retirement",
    qualifications: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    keytasks: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
  },
];

export default function CareersNavigation() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("financialAdvisers");
  const [activeTab, setActiveTab] = useState("qualifications");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activeCategoryData = subCategories.find(
    (category) => category.value === activeCategory
  ) ?? {
    name: "",
    value: "",
    description: "",
    imageSrc: undefined,
    resource: "",
    qualifications: [],
    keytasks: [],
  };

  if (!isMounted) return null;

  return (
    <div className="bg-background" id="navigation">
      <div>
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-xl font-bold text-darkText pl-3 pt-6">
                  Product Categories
                </h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-lg bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <form>
                <ul className="mt-4 text-sm px-3">
                  {subCategories.map((category) => (
                    <li
                      key={category.name}
                      className={`text-left rounded-lg py-2 pl-6 pr-3 mb-1 text-sm font-semibold leading-7 text-darkText hover:bg-footerBg2 ${
                        activeCategory === category.value ? "bg-footerBg" : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory(category.value);
                          setMobileFiltersOpen(false);
                        }}
                        className="w-full text-left"
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-background flex items-baseline justify-between border-b border-lightestText pb-6 pt-24 sticky top-6 md:top-0 md:relative">
            <h1 className="text-4xl font-bold tracking-tight text-darkText">
              Career Offerings
            </h1>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Career Offerings</span>
                <ListBulletIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="careers-heading" className="pb-24 pt-6">
            <h2 id="careers-heading" className="sr-only">
              Careers
            </h2>

            <div className="flex h-auto">
              <form className="hidden lg:block w-1/4 pr-4">
                <ul
                  role="list"
                  className="space-y-1 text-sm font-medium text-darkText top-24"
                >
                  {subCategories.map((category) => (
                    <li
                      key={category.name}
                      className={`${
                        activeCategory === category.value
                          ? "bg-gray-200 rounded-md"
                          : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveCategory(category.value)}
                        className="w-full text-left hover:bg-footerBg2 px-2 py-2 rounded-md"
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </form>

              <div className="flex-1">
                <div className="px-6">
                  <div className="h-[100dvh] md:h-[35rem] bg-footerBg rounded-lg p-6 flex justify-center items-center">
                    <div className="max-h-full grid grid-cols-1 grid-rows-3 px-6 py-6 md:grid-cols-3 md:grid-rows-1 md:gap-x-6 xl:gap-x-12">
                      <div className="row-span-1 md:col-span-1">
                        {activeCategoryData.imageSrc && (
                          <Image
                            src={activeCategoryData.imageSrc}
                            alt={activeCategoryData.name}
                            height={0}
                            width={0}
                            className="rounded-lg w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="row-span-2 md:row-span-1 md:col-span-2">
                        <div className="pb-6">
                          <h3 className="text-2xl font-bold text-darkText mt-6">
                            {activeCategoryData.name}
                          </h3>
                          <p className="text-midText text-sm mt-2">
                            {activeCategoryData.description}
                          </p>
                          <div className="mt-6 flex justify-start">
                            {activeCategory !== "all" && (
                              <div className="bg-buttons text-sm text-background py-3 px-4 rounded-md hover:bg-hoverButtons mt-2">
                                <span className="inline-block">Apply</span>{" "}
                                <ArrowRightIcon className="inline-block size-4 ml-1" />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="mt-4 h-[15rem]">
                          <div className="flex border-b border-gray-300">
                            <button
                              className={`py-2 px-4 ${
                                activeTab === "qualifications"
                                  ? "border-b-2 border-buttons font-semibold"
                                  : "text-gray-500"
                              }`}
                              onClick={() => setActiveTab("qualifications")}
                            >
                              Qualifications
                            </button>
                            <button
                              className={`py-2 px-4 ${
                                activeTab === "keytasks"
                                  ? "border-b-2 border-buttons font-semibold"
                                  : "text-gray-500"
                              }`}
                              onClick={() => setActiveTab("keytasks")}
                            >
                              Key Tasks
                            </button>
                          </div>
                          <div className="mt-4 overflow-y-scroll max-h-36">
                            {activeTab === "qualifications" && (
                              <ul role="list" className="gap-y-3">
                                {activeCategoryData.qualifications.map(
                                  (feature) => (
                                    <li
                                      key={feature}
                                      className="flex items-center py-1"
                                    >
                                      <CheckIcon className="inline-block size-4 fill-buttons mr-3" />
                                      <span className="inline-block text-sm">
                                        {feature}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                            {activeTab === "keytasks" && (
                              <ul role="list">
                                {activeCategoryData.keytasks.map((task) => (
                                  <li
                                    key={task}
                                    className="flex items-center py-1"
                                  >
                                    <CheckIcon className="inline-block size-4 fill-buttons mr-3" />
                                    <span className="inline-block text-sm">
                                      {task}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
