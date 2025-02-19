"use client";
import React, { useState, useEffect, Fragment } from "react";
import { Dialog } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon,
  ArrowLongRightIcon,
  ArrowLeftIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import Image, { StaticImageData } from "next/image";
import { Menu, Transition } from "@headlessui/react";
import SampleImage from "../../public/images/Home/HomeMissionBanner.jpg";

const categories = [
  {
    id: "faHiring",
    title: "Financial Advisers Hiring Program",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: "abhHiring",
    title: "Associate Branch Head Hiring Program",
    icon: BuildingOfficeIcon,
  },
  { id: "mgHiring", title: "Manager Hiring Program", icon: UserPlusIcon },
  { id: "mgDev", title: "Manager Development Program", icon: UsersIcon },
];

const descriptions = [
  {
    id: 1,
    name: "Financial Advisers Hiring Program",
    value: "faHiring",
    description: "placeholder",
    imageSrc: SampleImage,
    qualifications: ["placeholder"],
    category: { id: "faHiring", title: "Financial Advisers Hiring Program" },
  },
  {
    id: 2,
    name: "Associate Branch Head Hiring Program",
    value: "abhHiring",
    description: "placeholder",
    imageSrc: SampleImage,
    qualifications: ["placeholder"],
    keytasks: ["placeholder"],
    category: {
      id: "abhHiring",
      title: "Associate Branch Head Hiring Program",
    },
  },
  {
    id: 3,
    name: "Manager Hiring Program",
    value: "mgHiring",
    description: "placeholder",
    imageSrc: SampleImage,
    qualifications: ["placeholder"],
    keytasks: ["placeholder"],
    category: { id: "mgHiring", title: "Manager Hiring Program" },
  },
  {
    id: 4,
    name: "Manager Development Program",
    value: "mgDev",
    description: "placeholder",
    imageSrc: SampleImage,
    qualifications: ["placeholder"],
    keytasks: ["placeholder"],
    category: { id: "mgDev", title: "Manager Development Program" },
  },
];

export default function CareersGrid() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("faHiring");
  const [selectedDescription, setSelectedDescription] = useState<
    null | (typeof descriptions)[0]
  >(null);
  const activeCategory =
    categories.find((category) => category.id === selectedCategory)?.title ||
    "Financial Advisers Hiring Program";
  const [isMobile, setIsMobile] = useState(false);

  enum ModalView {
    Name = "name",
    Overview = "overview",
    Form = "form",
    Confirmation = "confirmation",
  }

  // State for Modal View
  const [modalView, setModalView] = useState<ModalView>(ModalView.Description);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      lastName: "",
      firstName: "",
      middleInitial: "",
      suffix: "",
      sex: "",
      contactNumber: "",
      email: "",
      productAvailed: "",
      file: "",
    });
    // Show the confirmation modal
    setModalView(ModalView.Confirmation);
  };

  const initialFormData = {
    lastName: "",
    firstName: "",
    middleInitial: "",
    suffix: "",
    sex: "",
    contactNumber: "",
    email: "",
    productAvailed: "",
    file: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  // State to handle form errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    middleInitial: "",
    suffix: "",
    email: "",
    contactNumber: "",
  });

  // Shared validation function
  function validateField(name: string, value: string) {
    const updatedErrors = { ...errors };

    // Validate Email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        updatedErrors.email = "Email address is required.";
      } else if (!emailRegex.test(value)) {
        updatedErrors.email = "Please enter a valid email address.";
      } else {
        updatedErrors.email = "";
      }
    }

    // Validate Contact Number
    if (name === "contactNumber") {
      if (!value) {
        updatedErrors.contactNumber = "Contact number is required.";
      } else if (value.length > 11) {
        updatedErrors.contactNumber = "Contact number must be 11 digits long.";
      } else if (!value.startsWith("09")) {
        updatedErrors.contactNumber = "Contact number must start with '09'.";
      } else {
        updatedErrors.contactNumber = "";
      }
    }

    // Validate Name Fields (first name, last name, middle initial, suffix)
    if (
      name === "firstName" ||
      name === "lastName" ||
      name === "middleInitial" ||
      name === "suffix"
    ) {
      const namePattern = /^[A-Za-z\s-]+$/; // Allows letters, spaces, and hyphens
      if (!value) {
        updatedErrors[name] = "This field is required.";
      } else if (!namePattern.test(value)) {
        updatedErrors[name] = "Only letters, spaces, and hyphens are allowed.";
      } else {
        updatedErrors[name] = "";
      }
    }

    setErrors(updatedErrors);
  }

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Validate the field on change
    validateField(name, value);

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const openModal = (description: Description) => {
    setSelectedDescription(description);
    setModalView(ModalView.ProductInfo);
  };

  const closeModal = () => {
    setSelectedDescription(null);
    setModalView(ModalView.ProductInfo);
  };

  // Handle mobile display
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredDescriptions =
    selectedCategory === "faHiring"
      ? descriptions
      : descriptions.filter(
          (description) => description.category.id === selectedCategory
        );

  const totalPages = Math.ceil(filteredDescriptions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = isMobile
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
                          {category.icon &&
                            React.createElement(category.icon, {
                              "aria-hidden": "true",
                              className:
                                "size-4 inline-block mr-2 text-gray-600 group-hover:text-red-500",
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
              onClick={() => {
                setSelectedProduct(product);
                openModal(product);
              }}
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
                    {
                      categories.find((cat) => cat.id === product.category.id)
                        ?.title
                    }
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
      </div>

      {selectedProduct && (
        <Dialog open={true} onClose={closeModal}>
          <div className="fixed inset-0 z-10 overflow-y-auto bg-black/50">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-2">
                <div className="p-10">
                  {/* Close Button */}
                  <div className="absolute top-0 right-0 p-4">
                    <button
                      onClick={closeModal}
                      className="text-gray-700 hover:text-buttons"
                    >
                      <XMarkIcon className="size-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Dynamic Modal Content */}
                  {modalView === "productInfo" && (
                    <>
                      {/* Product Image */}
                      <div className="relative w-full h-64">
                        <Image
                          src={selectedProduct.imageSrc}
                          alt={selectedProduct.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>

                      {/* Product Title */}
                      <h3 className="text-xl font-semibold text-gray-900 mt-4">
                        {selectedProduct.name}
                      </h3>

                      {/* Product Category and Description */}
                      <p className="mt-1 text-sm text-links">
                        {selectedProduct.category.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        {selectedProduct.description}
                      </p>

                      {/* Buttons */}
                      <div className="mt-6 flex flex-col space-y-4">
                        <button
                          onClick={() => setModalView(ModalView.Form)}
                          className="w-full inline-flex justify-center items-center px-4 py-2 text-white bg-links rounded-md hover:bg-indigo-700"
                        >
                          Consult a Financial Adviser
                          <ArrowLongRightIcon
                            className="ml-2 -mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                        <button
                          onClick={() => setModalView(ModalView.Description)}
                          className="w-full inline-flex justify-center items-center px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
                        >
                          Learn More
                          <ArrowTopRightOnSquareIcon
                            className="ml-2 -mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </>
                  )}

                  {modalView === "description" && (
                    <>
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Product Description
                      </h3>
                      <p className="mt-4 text-sm text-gray-500">
                        {selectedProduct.description}
                      </p>
                      <button
                        onClick={() => setModalView(ModalView.ProductInfo)}
                        className="mt-6 inline-flex items-center justify-center px-4 py-2 text-white bg-gray-300 rounded-md hover:bg-gray-400"
                      >
                        Go Back
                      </button>
                    </>
                  )}

                  {modalView === "form" && (
                    <>
                      {/* Back Button positioned in the top left corner */}
                      <div className="absolute top-0 left-0 p-4">
                        <button
                          type="button"
                          onClick={() => setModalView(ModalView.ProductInfo)}
                          className="text-gray-700 hover:text-buttons"
                        >
                          <ArrowLeftIcon
                            className="size-6"
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold leading-6 text-gray-900 mt-10 pb-3 border-b border-gray-200">
                        Consult a Financial Adviser
                      </h3>
                      <form onSubmit={handleSubmitForm}>
                        <div className="space-y-12">
                          <div className="border-b border-gray-900/10 pb-12 pt-3">
                            <h2 className="text-base font-semibold text-gray-900">
                              Personal Information
                            </h2>
                            <p className="text-sm text-gray-600">
                              Please provide your details below.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              {/* First Name */}
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  First Name
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="first-name"
                                    name="firstName"
                                    type="text"
                                    placeholder="Juan"
                                    value={formData.firstName}
                                    onChange={handleFormChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-accent5 sm:text-sm"
                                    required
                                  />
                                  {errors.firstName && (
                                    <p className="mt-2 text-sm text-red-600">
                                      {errors.firstName}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Last Name */}
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="last-name"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  Last Name
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="last-name"
                                    name="lastName"
                                    type="text"
                                    placeholder="Dela Cruz"
                                    value={formData.lastName}
                                    onChange={handleFormChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-accent5 sm:text-sm"
                                    required
                                  />
                                  {errors.lastName && (
                                    <p className="mt-2 text-sm text-red-600">
                                      {errors.lastName}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Middle Initial */}
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="middle-initial"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  Middle Initial
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="middle-initial"
                                    name="middleInitial"
                                    type="text"
                                    maxLength={1}
                                    placeholder="A"
                                    value={formData.middleInitial}
                                    onChange={handleFormChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-accent5 sm:text-sm"
                                  />
                                  {errors.middleInitial && (
                                    <p className="mt-2 text-sm text-red-600">
                                      {errors.middleInitial}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Suffix */}
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="suffix"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  Suffix
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="suffix"
                                    name="suffix"
                                    type="text"
                                    maxLength={3}
                                    placeholder="III"
                                    value={formData.suffix}
                                    onChange={handleFormChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-accent5 sm:text-sm"
                                  />
                                  {errors.suffix && (
                                    <p className="mt-2 text-sm text-red-600">
                                      {errors.suffix}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Sex */}
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="sex"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  Sex
                                </label>
                                <div className="mt-2">
                                  <select
                                    id="sex"
                                    name="sex"
                                    value={formData.sex}
                                    onChange={handleFormChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-accent5 sm:text-sm"
                                    required
                                  >
                                    <option
                                      value=""
                                      className="text-base text-gray-900 font-sans"
                                    >
                                      Select
                                    </option>
                                    <option
                                      value="Male"
                                      className="text-base text-gray-900 font-sans"
                                    >
                                      Male
                                    </option>
                                    <option
                                      value="Female"
                                      className="text-base text-gray-900 font-sans"
                                    >
                                      Female
                                    </option>
                                    <option
                                      value="Other"
                                      className="text-base text-gray-900 font-sans"
                                    >
                                      Other
                                    </option>
                                  </select>
                                </div>
                              </div>

                              {/* Contact Number */}
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="contact-number"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  Contact Number
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="contact-number"
                                    name="contactNumber"
                                    type="text"
                                    maxLength={11}
                                    placeholder="09123456789"
                                    value={formData.contactNumber}
                                    onChange={(e) => {
                                      // Allow only numeric input and handle validation
                                      const value = e.target.value.replace(
                                        /[^0-9]/g,
                                        ""
                                      );
                                      handleFormChange({
                                        ...e,
                                        target: {
                                          ...e.target,
                                          name: "contactNumber",
                                          value,
                                        },
                                      });
                                      validateField("contactNumber", value);
                                    }}
                                    onBlur={(e) =>
                                      validateField(
                                        e.target.name,
                                        e.target.value
                                      )
                                    }
                                    className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 placeholder:text-gray-400 sm:text-sm ${
                                      errors.contactNumber
                                        ? "outline-red-600"
                                        : "outline-gray-300"
                                    } focus:outline-2 focus:-outline-offset-2 ${
                                      errors.contactNumber
                                        ? "focus:outline-red-600"
                                        : "focus:outline-accent5"
                                    }`}
                                    required
                                    aria-describedby="contact-number-error"
                                  />
                                  {errors.contactNumber && (
                                    <p
                                      id="contact-number-error"
                                      className="mt-2 text-sm text-red-600"
                                    >
                                      {errors.contactNumber}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Email Address */}
                              <div className="sm:col-span-6">
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  Email Address
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="juandelacruz@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => {
                                      handleFormChange(e);
                                      validateField(
                                        e.target.name,
                                        e.target.value
                                      ); // Validation logic
                                    }}
                                    onBlur={(e) =>
                                      validateField(
                                        e.target.name,
                                        e.target.value
                                      )
                                    } // Validate on blur
                                    className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 placeholder:text-gray-400 sm:text-sm 
                                    ${
                                      errors.email
                                        ? "outline-red-500 focus:outline-red-600"
                                        : "outline-gray-300 focus:outline-accent5"
                                    }`}
                                    required
                                    aria-invalid={!!errors.email} // Accessibility
                                    aria-describedby="email-error"
                                  />
                                  {errors.email && (
                                    <p
                                      id="email-error"
                                      className="mt-2 text-sm text-red-600"
                                    >
                                      {errors.email}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Product Availed (Read-Only and Unclickable) */}
                              <div className="sm:col-span-6">
                                <label
                                  htmlFor="product-availed"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  Product Availed
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="product-availed"
                                    name="productAvailed"
                                    type="text"
                                    value={
                                      selectedProduct?.name || "Not Available"
                                    }
                                    readOnly
                                    required
                                    className=" w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-700 outline-none bg-opacity-50 cursor-not-allowed"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Submit and Cancel Buttons */}
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                          <button
                            type="submit"
                            className="rounded-md bg-buttons px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent5"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </>
                  )}

                  {modalView === "confirmation" && (
                    <>
                      {/* Confirmation Message */}
                      <h3 className="text-xl font-semibold text-gray-900 mt-4">
                        Thank you for your submission!
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Your information has been successfully submitted and
                        will be forwarded to a financial adviser for review. We
                        appreciate your time and effort.
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        Please close this pop-up once you&apos;re done. Thank
                        you!
                      </p>

                      {/* Close Button */}
                      <div className="mt-6 flex justify-center">
                        <button
                          onClick={closeModal}
                          className="w-full inline-flex justify-center items-center px-4 py-2 text-white bg-links rounded-md hover:bg-hoverLinks"
                        >
                          Close
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
