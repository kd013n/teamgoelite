"use client";
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

  // Handle mobile display
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default CareersGrid;
