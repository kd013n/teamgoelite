"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import SampleImage from "../../public/images/Home/HomeMissionBanner.jpg";

const subCategories = [
  { name: "All Products", value: "all" },
  { name: "Health and Critical Illness", value: "Health" },
  { name: "Income Protection", value: "Income" },
  { name: "Lifestyle Protection", value: "Lifestyle" },
  { name: "Education", value: "Education" },
  { name: "Retirement", value: "Retirement" },
  { name: "Savings and Investment", value: "Savings" },
  { name: "Travel Insurance", value: "Travel" },
  { name: "Car Insurance", value: "Car" },
  { name: "Home Insurance", value: "Home" },
  { name: "Commercial Insurance", value: "Commercial" },
];

const products = [
  {
    id: 1,
    name: "Global Health Access",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Health", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 2,
    name: "Health Care Access",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Health", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 3,
    name: "HealthMax",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Health", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 4,
    name: "Health Start",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Health", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 5,
    name: "Health Start Lite",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Health", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 6,
    name: "Assure",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Health", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 7,
    name: "My Life Choice Health",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Health", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 8,
    name: "My Life Choice Protect",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Income", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 9,
    name: "FlexiProtect",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Income", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 10,
    name: "Personal Accident",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Income", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 11,
    name: "My Life Choice Education",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Education", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 12,
    name: "My Life Choice Retirement",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Retirement", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 13,
    name: "My Life Choice",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Savings", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 14,
    name: "Asset Protect",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Savings", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 15,
    name: "Asset Master",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Savings", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 16,
    name: "Travel Insurance",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Travel", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 17,
    name: "Car Insurance",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Car", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 18,
    name: "Home Insurance",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Home", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 19,
    name: "Commercial Property",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 20,
    name: "Liability and Other Casualty",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 21,
    name: "Marine",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 22,
    name: "Engineer",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 23,
    name: "Surety (Bonds)",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 24,
    name: "SME",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 25,
    name: "SMEX",
    href: "#",
    imageSrc: SampleImage,
    category: { title: "Commercial", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
];

export default function ProductsNavigation() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category.title === activeCategory);

  return (
    <div className="bg-background" id="products">
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
                <h2 className="text-xl md:lg font-medium text-gray-900">
                  Product Categories
                </h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <form>
                <ul className="mt-4">
                  {subCategories.map((category) => (
                    <li
                      key={category.name}
                      className={`${
                        activeCategory === category.value ? "bg-gray-200" : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory(category.value);
                          setMobileFiltersOpen(false); // Close filter after selection
                        }}
                        className="w-full text-left hover:bg-footerBg2 px-4 py-3"
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
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Products
            </h1>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Product Categories</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
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
                  className="space-y-1 text-sm font-medium text-gray-900 sticky top-24"
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

              {/* Products grid */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group">
                      <Image
                        src={product.imageSrc}
                        height={0}
                        width={0}
                        alt=""
                        className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                      />
                      <article className="mt-3 flex max-w-xl flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                          <a
                            href={product.category.href}
                            className="relative rounded-full bg-footerBg2 px-3 py-1.5 font-medium text-gray-900 hover:bg-footerBg"
                          >
                            {product.category.title}
                          </a>
                        </div>
                        <p className="font-semibold mt-3 mb-2 text-lg leading-tight text-gray-900">
                          <a href={product.href}>{product.name}</a>
                        </p>
                        <p className="text-sm font-normal text-gray-700 line-clamp-2">
                          {product.description}
                        </p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
