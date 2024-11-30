"use client";
import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/compat/router";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductModal from "./ProductsModal";
import { Product } from "./ProductsTypes";
import { products, categories } from "./ProductsList";

export default function ProductGrid({ initialCategory = "all" }) {
  const router = useRouter();
  const itemsPerPage = 4;

  // Client-side state and effects
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ensure component only renders on the client
  useEffect(() => {
    setIsClient(true);

    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Safer category change handler
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);

    // Check if router is ready before navigation
    if (router?.isReady) {
      router.push(`/products/${category}`);
    }
  };

  // If not client-side, return null to prevent SSR rendering issues
  if (!isClient) {
    return null;
  }

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

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-12 py-16 sm:px-18 sm:py-24 lg:max-w-7xl lg:px-20">
        {/* Header and Category Dropdown */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-foreground">
            Explore Our Products
          </h2>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center text-left rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-gray-100">
                {isMobile ? (
                  // Mobile view: only show icon
                  selectedCategory === "all" ? (
                    <Squares2X2Icon className="size-5 mr-2 text-gray-600" />
                  ) : (
                    (() => {
                      const categoryIcon = categories.find(
                        (category) => category.id === selectedCategory
                      )?.icon;
                      return categoryIcon
                        ? React.createElement(categoryIcon, {
                            className: "h-5 w-5 inline-block text-gray-600",
                          })
                        : null;
                    })()
                  )
                ) : (
                  // Desktop view: show full text and icon
                  <span className="flex items-center">
                    {(() => {
                      const categoryIcon = categories.find(
                        (category) => category.id === selectedCategory
                      )?.icon;
                      return categoryIcon
                        ? React.createElement(categoryIcon, {
                            className:
                              "h-5 w-5 inline-block mr-2 text-gray-600",
                          })
                        : null;
                    })()}
                    {categories.find(
                      (category) => category.id === selectedCategory
                    )?.title || "Select Category"}
                    <ChevronDownIcon
                      className="ml-2 -mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                )}
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
                            selectedCategory === category.id
                              ? "bg-footerBg font-semibold" // Active category styling
                              : active
                              ? "bg-footerBg2" // Hovered styling
                              : "text-midText" // Default styling
                          } flex flex-row items-center justify-start space-y-1 px-2 py-2 text-sm rounded-md`}
                        >
                          {category.icon &&
                            React.createElement(category.icon, {
                              className:
                                "h-4 w-4 inline-block mr-2 text-gray-600",
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
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer hover:scale-105 transform transition-transform"
              onClick={() => openModal(product)}
            >
              <Image
                alt={product.name}
                src={product.imageSrc}
                width={0}
                height={0}
                className="aspect-[4/3] w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-64"
              />
              <div className="mt-3 flex justify-between">
                <div className="w-full flex flex-col items-center justify-center">
                  {(() => {
                    const category = categories.find(
                      (category) => category.id === product.category.id
                    );
                    return category ? (
                      <div className="my-2 flex items-center space-x-2 bg-accent3 py-1 px-2 rounded-xl">
                        {React.createElement(category.icon, {
                          className: "size-3 text-buttons",
                        })}
                        <span className="text-xs text-buttons">
                          {category.title}
                        </span>
                      </div>
                    ) : null;
                  })()}
                  <h3 className="text-lg text-darkText font-bold text-center">
                    {product.name}
                  </h3>
                  <p
                    className="mt-1 text-sm text-midText text-center line-clamp-2 px-6"
                    dangerouslySetInnerHTML={{ __html: product.description }}
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
