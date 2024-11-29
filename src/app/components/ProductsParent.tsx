"use client";
import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import ProductModal from "./ProductsModal";
import { Category, Product } from "./ProductsTypes";
import SampleImage from "../../public/images/Home/HomeMissionBanner.jpg";
import {
  HeartIcon,
  CreditCardIcon,
  AcademicCapIcon,
  HomeIcon,
  BanknotesIcon,
  PlusCircleIcon,
  Squares2X2Icon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/20/solid";

const categories: Category[] = [
  { id: "all", title: "All Products", icon: Squares2X2Icon },
  { id: "health", title: "Health and Critical Illness", icon: HeartIcon },
  { id: "income", title: "Income Protection", icon: CreditCardIcon },
  { id: "education", title: "Education", icon: AcademicCapIcon },
  { id: "retirement", title: "Retirement", icon: HomeIcon },
  { id: "savings", title: "Savings and Investment", icon: BanknotesIcon },
  { id: "travel", title: "Travel Insurance", icon: GlobeAsiaAustraliaIcon },
  { id: "general", title: "General Insurance", icon: PlusCircleIcon },
];

const products: Product[] = [
  {
    id: 1,
    name: "Global Health Access",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 2,
    name: "Health Care Access",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 3,
    name: "Health Max",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 4,
    name: "Health Max Elite",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 5,
    name: "Health Start",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 6,
    name: "Health Start Lite",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 7,
    name: "My Life Choice Health",
    imageSrc: SampleImage,
    category: { id: "health", title: "Health and Critical Illness" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 8,
    name: "My Life Choice Protect",
    imageSrc: SampleImage,
    category: { id: "income", title: "Income Protection" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 9,
    name: "FlexiProtect",
    imageSrc: SampleImage,
    category: { id: "income", title: "Income Protection" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 10,
    name: "Assure",
    imageSrc: SampleImage,
    category: { id: "income", title: "Income Protection" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 11,
    name: "My Life Choice Education",
    imageSrc: SampleImage,
    category: { id: "education", title: "Education" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 12,
    name: "My Life Choice Retirement",
    imageSrc: SampleImage,
    category: { id: "retirement", title: "Retirement" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 13,
    name: "My Life Choice",
    imageSrc: SampleImage,
    category: { id: "savings", title: "Savings and Investment" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 14,
    name: "Goal Getter",
    imageSrc: SampleImage,
    category: { id: "savings", title: "Savings and Investment" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 15,
    name: "Asset Protect",
    imageSrc: SampleImage,
    category: { id: "savings", title: "Savings and Investment" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 16,
    name: "Asset Master",
    imageSrc: SampleImage,
    category: { id: "savings", title: "Savings and Investment" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 17,
    name: "AXA Secure Future",
    imageSrc: SampleImage,
    category: { id: "savings", title: "Savings and Investment" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 18,
    name: "Travel Insurance",
    imageSrc: SampleImage,
    category: { id: "travel", title: "Travel Insurance" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 19,
    name: "Car Insurance",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 20,
    name: "Home Insurance",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 21,
    name: "Commercial Property",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 22,
    name: "Liability and Other Casualty",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 23,
    name: "Marine",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 24,
    name: "Engineer",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 25,
    name: "Surety (Bonds)",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 26,
    name: "SME",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description: "placeholder",
    href: "#",
  },
  {
    id: 27,
    name: "SMEX",
    imageSrc: SampleImage,
    category: { id: "general", title: "General Insurance" },
    description: "placeholder",
    href: "#",
  },
];

export default function ProductGrid() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category.id === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = isMobile
    ? filteredProducts
    : filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Header and Category Dropdown */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Explore Our Products
          </h2>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center text-left rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-links focus:ring-offset-2 focus:ring-offset-gray-100">
                {selectedCategory}
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
                          {category.icon &&
                            React.createElement(category.icon, {
                              className:
                                "h-4 w-4 inline-block mr-2 text-gray-600 group-hover:text-red-500",
                            })}
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
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              onClick={() => openModal(product)}
            >
              <Image
                alt={product.name}
                src={product.imageSrc}
                width={0}
                height={0}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category.title}
                  </p>
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
                {Math.min(startIndex + itemsPerPage, filteredProducts.length)}
              </span>{" "}
              of <span className="font-medium">{filteredProducts.length}</span>{" "}
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

        {/* Product Modal */}
        <ProductModal
          isOpen={isModalOpen}
          product={selectedProduct}
          onClose={closeModal}
        />
      </div>
    </div>
  );
}
