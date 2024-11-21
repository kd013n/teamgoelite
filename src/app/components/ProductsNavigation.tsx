"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";

const subCategories = [
  { name: "All Products", value: "all" },
  { name: "Health", value: "Health" },
  { name: "Income Protection", value: "Income Protection" },
  { name: "Lifestyle Protection", value: "Lifestyle Protection" },
  { name: "Education", value: "Education" },
  { name: "Retirement", value: "Retirement" },
  { name: "Savings and Investment", value: "Savings and Investment" },
  { name: "General Insurance", value: "General Insurance" },
];

const products: Product[] = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    category: { title: "Health", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    category: { title: "Income Protection", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    category: { title: "Retirement", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: { title: "Education", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: { title: "Health", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
  {
    id: 6,
    name: "Machined Mechanical Pencil",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: { title: "Education", href: "#" },
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  },
];

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: {
    title: string;
    href: string;
  };
  description: string;
}

export default function ProductsNavigation() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category.title === activeCategory);

  return (
    <div className="bg-white">
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

              {/* Mobile filter categories */}
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

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {/* Filters (desktop version) */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-1 text-sm font-medium text-gray-900"
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
              <div className="sm:col-span-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
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
                      <p className="text-base font-normal text-gray-700 line-clamp-3">
                        {product.description}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
