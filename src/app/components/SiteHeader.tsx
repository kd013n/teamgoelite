"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import TGELogo from "../../public/logo.png";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  Bars3Icon,
  BriefcaseIcon,
  CreditCardIcon,
  GlobeAsiaAustraliaIcon,
  HeartIcon,
  HomeIcon,
  PlusCircleIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

const careers = [
  {
    name: "Overview",
    description: "Preview of careers opportunities at Team Go Elite",
    href: "/careers",
    icon: SquaresPlusIcon,
  },
  {
    name: "Career Programs",
    description:
      "Launch your insurance career with comprehensive training at Team Go Elite",
    href: "/careers#careerPrograms",
    icon: BriefcaseIcon,
  },
  {
    name: "Travels and Incentives",
    description:
      "Earn exclusive travel rewards and bonuses while achieving your professional goals",
    href: "/",
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: "High-Income Earners",
    description:
      "Discover strategies to maximize your earnings inspired by the success stories of top Team Go Elite performers",
    href: "/",
    icon: ArrowTrendingUpIcon,
  },
];

const products = [
  {
    name: "Overview",
    description: "Preview of product solutions at Team Go Elite.",
    href: "/products",
    icon: SquaresPlusIcon,
  },
  {
    name: "Health and Critical Illness",
    description: "Comprehensive health coverage for emergencies and illnesses.",
    href: "#",
    icon: HeartIcon,
  },
  {
    name: "Income Protection",
    description: "Secure your family's income during uncertain times.",
    href: "#",
    icon: CreditCardIcon,
  },
  {
    name: "Education",
    description: "Plan for your child's academic future today.",
    href: "#",
    icon: AcademicCapIcon,
  },
  {
    name: "Retirement",
    description: "Save now for a comfortable future lifestyle.",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Savings and Investment",
    description: "Achieve financial goals with savings and investments.",
    href: "#",
    icon: BanknotesIcon,
  },
  {
    name: "Travel Insurance",
    description:
      "Coverage for travel emergencies, cancellations, and belongings.",
    href: "#",
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: "General Insurance",
    description: "Protect assets with home, car, and business insurance.",
    href: "#",
    icon: PlusCircleIcon,
  },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 drop-shadow-md bg-background">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width={0}
              height={0}
              alt="TGE Logo Full"
              src={TGELogo}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 drop-shadow-2xl">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-darkText">
              Careers
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {careers.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-red-500"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-darkText"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-darkText">
              Products
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-red-500"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-darkText"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            href="/testimonials"
            className="text-sm font-semibold leading-6 text-darkText"
          >
            Testimonials
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-darkText"
          >
            About TGE
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-12">
          <Link
            href="/support"
            className="text-sm font-semibold leading-6 text-darkText"
          >
            Support
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-darkText"
          >
            Log in
          </Link>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Team Go Elite</span>
              <Image
                width={0}
                height={0}
                alt="TGE Logo Full"
                src={TGELogo}
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-darkText hover:bg-footerBg2">
                    Careers
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...careers].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-darkText hover:bg-footerBg2"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-darkText hover:bg-footerBg2">
                    Products
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-darkText hover:bg-footerBg2"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkText hover:bg-footerBg2"
                >
                  Testimonials
                </Link>
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkText hover:bg-footerBg2"
                >
                  About TGE
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkText hover:bg-footerBg2"
                >
                  Support
                </Link>
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkText hover:bg-footerBg2"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
