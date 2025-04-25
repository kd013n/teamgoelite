"use client";
<<<<<<< HEAD

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
=======
import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { categories, descriptions } from "./CareersList";
import AppFormModal from "./CareersModal";

const CareersGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("faHiring");
  const [selectedDescription, setSelectedDescription] = useState<
    null | (typeof descriptions)[0]
  >(null);
  const appForm = {}; // Define the appForm variable

  const activeCategory =
    categories.find((category) => category.id === selectedCategory)?.title ||
    "Financial Advisers Hiring Program";
  const [isMobile, setIsMobile] = useState(false);
>>>>>>> 8ce4a2a5f288518eb829830f61d64868a4ab9f15

  // Handle mobile display
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

<<<<<<< HEAD
  const activeCategoryData =
    subCategories[0].items.find((item) => item.value === activeCategory) ??
    subCategories[0].items[0];
=======
  const filteredDescriptions =
    selectedCategory === "all"
      ? descriptions
      : descriptions.filter(
          (description) => description.category?.id === selectedCategory
        );

  const totalPages = Math.ceil(filteredDescriptions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDescription = isMobile
    ? filteredDescriptions
    : filteredDescriptions.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
>>>>>>> 8ce4a2a5f288518eb829830f61d64868a4ab9f15

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Header with Category Dropdown Menu using Headless UI Menu */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Explore Our Products
          </h2>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center text-left rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-links focus:ring-offset-2 focus:ring-offset-gray-100">
                {activeCategory}
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="flex flex-col p-4">
                  {categories.map((category) => (
                    <Menu.Item key={category.id}>
                      {({ active }: { active: boolean }) => (
                        <button
                          onClick={() => handleCategoryChange(category.id)}
                          className={`${
                            active
                              ? "bg-footerBg2 text-darkestText font-semibold"
                              : "text-midText"
                          } flex flex-row items-center justify-start space-y-1 px-2 py-2 text-sm rounded-md font-semibold`}
                        >
                          {category.icon && (
                            <span aria-hidden="true">
                              {React.createElement(category.icon, {
                                className:
                                  "size-4 inline-block mr-2 text-gray-600 group-hover:text-red-500",
                              })}
                            </span>
                          )}
                          <span>{category.title}</span>
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {/* Product Grid */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentDescription.map((description) => (
            <div
              key={description.id}
              className="group relative cursor-pointer"
              onClick={() => {
                setSelectedDescription(description);
              }}
            >
              <Image
                alt={description.name}
                src={description.imageSrc}
                width={0}
                height={0}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{description.name}</h3>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    bullshit
                  </button>
                  <AppFormModal
                    isOpen={isModalOpen} // Pass the modal open state
                    onClose={() => setIsModalOpen(false)} // Pass the function to close the modal
                    appForm={appForm} // Pass the form data
                  />
>>>>>>> 8ce4a2a5f288518eb829830f61d64868a4ab9f15
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
<<<<<<< HEAD
          </div>
        </section>
      </main>
=======
          ))}
        </div>
        {/* Pagination */}
        {!isMobile && (
          <div className="mt-8 flex items-center justify-between border-t border-gray-400 bg-white px-4 py-3 sm:px-6">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(
                  startIndex + itemsPerPage,
                  filteredDescriptions.length
                )}
              </span>{" "}
              of{" "}
              <span className="font-medium">{filteredDescriptions.length}</span>{" "}
              results
            </p>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            >
              <button
                onClick={handlePreviousPage}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon aria-hidden="true" className="size-5" />
              </button>
              {generatePageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`${
                    page === currentPage
                      ? "z-10 inline-flex items-center border-hoverLinks bg-links text-background"
                      : "inline-flex items-center border-y border-gray-300 text-gray-500 hover:bg-gray-100"
                  } relative inline-flex items-center px-4 py-2 text-sm font-medium focus:outline-none`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === totalPages}
              >
                <ChevronRightIcon aria-hidden="true" className="size-5" />
              </button>
            </nav>
          </div>
        )}
      </div>
>>>>>>> 8ce4a2a5f288518eb829830f61d64868a4ab9f15
    </div>
  );
};

export default CareersGrid;
