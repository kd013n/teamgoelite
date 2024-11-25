"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import {
  XMarkIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import SampleImage from "../../public/images/Home/HomeMissionBanner.jpg";

const subCategories = [
  {
    name: "All Products",
    value: "all",
    description: "All the products we offer.",
    imageSrc: SampleImage,
    href: "/products/all",
  },
  {
    name: "Health and Critical Illness",
    value: "Health",
    description: "Health-related insurance and services.",
    imageSrc: SampleImage,
    href: "/products/health",
  },
  {
    name: "Income Protection",
    value: "Income",
    description: "Insurance for protecting your income.",
    imageSrc: SampleImage,
    href: "/products/income",
  },
  {
    name: "Education",
    value: "Education",
    description: "Insurance for educational purposes.",
    imageSrc: SampleImage,
    href: "/products/education",
  },
  {
    name: "Retirement",
    value: "Retirement",
    description: "Saving for your retirement.",
    imageSrc: SampleImage,
    href: "/products/retirement",
  },
  {
    name: "Savings and Investment",
    value: "Savings",
    description: "Investing and saving for your future.",
    imageSrc: SampleImage,
    href: "/products/savings",
  },
  {
    name: "Travel Insurance",
    value: "Travel",
    description: "Protect your travel with insurance.",
    imageSrc: SampleImage,
    href: "/products/travel",
  },
  {
    name: "Car Insurance",
    value: "Car",
    description: "Insurance for your car.",
    imageSrc: SampleImage,
    href: "/products/car",
  },
  {
    name: "Home Insurance",
    value: "Home",
    description: "Protect your home with insurance.",
    imageSrc: SampleImage,
    href: "/products/home",
  },
  {
    name: "Commercial Insurance",
    value: "Commercial",
    description: "Insurance for commercial businesses.",
    imageSrc: SampleImage,
    href: "/products/commercial",
  },
];

const products = [
  {
    id: 1,
    name: "Global Health Access",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Health" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 2,
    name: "Health Care Access",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Health" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 3,
    name: "HealthMax",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Health" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 4,
    name: "Health Start",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Health" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 5,
    name: "Health Start Lite",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Health" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 6,
    name: "Assure",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Health" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 7,
    name: "My Life Choice Health",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Health" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 8,
    name: "My Life Choice Protect",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Income" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 9,
    name: "FlexiProtect",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Income" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 10,
    name: "Personal Accident",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Income" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 11,
    name: "My Life Choice Education",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Education" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 12,
    name: "My Life Choice Retirement",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Retirement" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 13,
    name: "My Life Choice",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Savings" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 14,
    name: "Asset Protect",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Savings" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 15,
    name: "Asset Master",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Savings" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 16,
    name: "Travel Insurance",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Travel" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 17,
    name: "Car Insurance",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Car" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 18,
    name: "Home Insurance",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Home" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 19,
    name: "Commercial Property",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 20,
    name: "Liability and Other Casualty",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 21,
    name: "Marine",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 22,
    name: "Engineer",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 23,
    name: "Surety (Bonds)",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 24,
    name: "SME",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 25,
    name: "SMEX",
    resource: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
];

interface products {
  name: string;
  value: string;
  description?: string;
  href: string;
}

export default function ProductsNavigation() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category.title === activeCategory);

  const activeCategoryData = subCategories.find(
    (category) => category.value === activeCategory
  ) ?? {
    name: "",
    value: "",
    description: "",
    imageSrc: undefined,
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
                          setMobileFiltersOpen(false); // Close filter after selection
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
          <div className="flex items-baseline justify-end pb-3 pt-16">
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Product Categories</span>
                <ListBulletIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="flex h-[calc(100vh-12rem)]">
              {/* Subcategories (desktop version) */}
              <form className="hidden lg:block w-1/4 pr-4">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-1 text-sm font-medium text-darkText sticky top-24"
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
                <div className="px-6 border-b border-lightestText">
                  <div className="grid-cols-1 grid-rows-2 pb-6">
                    <div className="grid grid-cols-3 grid-rows-1">
                      <div className="col-span-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-darkText">
                          {activeCategoryData.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">
                          {activeCategoryData.description}
                        </p>
                      </div>
                      <div className="col-span-1 flex justify-end items-center pr-5">
                        {activeCategory !== "all" && (
                          <div className="self-center bg-buttons text-sm text-background py-2 px-4 rounded-md hover:bg-hoverButtons">
                            <span className="hidden md:inline-block mr-1">
                              See More
                            </span>{" "}
                            <ArrowRightIcon className="inline-block size-4" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-y-auto h-[40rem] md:h-[32rem] px-6 py-6 border-b border-lightestText">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="group hover:opacity-8 cursor-pointer"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <Image
                          src={product.imageSrc}
                          height={0}
                          width={0}
                          alt=""
                          className="w-full rounded-lg object-cover aspect-[4/3]"
                        />
                        <article className="mt-3 flex max-w-xl flex-col items-start justify-between">
                          <div className="flex items-center gap-x-4 text-xs">
                            <div className="relative rounded-full bg-footerBg2 px-3 py-1.5 font-medium text-darkText">
                              {product.category.title}
                            </div>
                          </div>
                          <p className="font-semibold mt-3 mb-2 text-lg leading-tight text-darkText">
                            <div>{product.name}</div>
                          </p>
                          <p className="font-medium text-sm text-gray-500 line-clamp-2">
                            {product.description}
                          </p>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {selectedProduct && (
        <Dialog
          open={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          className="relative z-10"
        >
          <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-4 py-8 text-center sm:px-6 lg:px-8">
              <DialogPanel className="relative w-full max-w-2xl transform bg-white rounded-lg p-6 shadow-xl text-left">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="flex flex-col items-start px-6 py-6">
                  <Image
                    src={selectedProduct.imageSrc}
                    alt={selectedProduct.name}
                    width={400}
                    height={300}
                    className="rounded-lg w-full object-cover"
                  />
                  <div className="mt-4 relative font-medium text-lightText text-sm">
                    {selectedProduct.category.title}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-darkText">
                    {selectedProduct.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    {selectedProduct.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-4">
                    {/* Consult Adviser Button */}
                    <Link
                      href="https://example.com"
                      target="_blank"
                      className="bg-buttons text-background px-4 py-2 rounded-md hover:bg-hoverButtons"
                    >
                      <span className="mr-2 text-sm">
                        Consult a Financial Adviser
                      </span>{" "}
                      <ArrowRightIcon className="inline-block size-4" />
                    </Link>
                    {/* Learn More Button */}
                    <Link
                      href={selectedProduct.resource}
                      target="_blank"
                      className="inline-flex items-center bg-footerBg text-darkText px-4 py-2 rounded-md hover:bg-footerBg2"
                    >
                      <span className="mr-2 text-sm hidden sm:inline-block">
                        Learn More
                      </span>{" "}
                      <ArrowTopRightOnSquareIcon className="inline-block size-4" />
                    </Link>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
