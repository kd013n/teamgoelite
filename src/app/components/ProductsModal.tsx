import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import {
  XMarkIcon,
  ArrowLongRightIcon,
  ArrowTopRightOnSquareIcon,
  ArrowLeftIcon,
} from "@heroicons/react/20/solid";
import { Product, ModalView, FormData } from "./ProductsTypes";

interface ProductModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  product,
  onClose,
}) => {
  const [modalView, setModalView] = useState<ModalView>(ModalView.ProductInfo);
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    middleInitial: "",
    suffix: "",
    sex: "",
    contactNumber: "",
    email: "",
    productAvailed: product?.name || "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    middleInitial: "",
    suffix: "",
    email: "",
    contactNumber: "",
  });

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
    });
    // Show the confirmation modal
    setModalView(ModalView.Confirmation);
  };

  if (!isOpen || !product) return null;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 z-10 overflow-y-auto bg-black/50">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-2">
            <div className="p-10">
              <div className="absolute top-0 right-0 p-4">
                <button
                  onClick={onClose}
                  className="text-gray-700 hover:text-buttons"
                >
                  <XMarkIcon className="size-6" aria-hidden="true" />
                </button>
              </div>

              {modalView === ModalView.ProductInfo && (
                <>
                  {/* Product Info View */}
                  <div className="relative w-full h-64">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mt-4">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xs text-links">
                    {product.category.title}
                  </p>
                  <p
                    className="mt-1 text-sm text-midText"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />

                  <div className="mt-6 flex flex-col space-y-4">
                    <button
                      onClick={() => setModalView(ModalView.Form)}
                      className="w-full inline-flex justify-center items-center px-4 py-2 text-white bg-links rounded-md hover:bg-hoverLinks"
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

              {modalView === ModalView.Description && (
                <>
                  {/* Back Button positioned in the top left corner */}
                  <div className="absolute top-0 left-0 p-4">
                    <button
                      type="button"
                      onClick={() => setModalView(ModalView.ProductInfo)}
                      className="text-gray-700 hover:text-buttons"
                    >
                      <ArrowLeftIcon className="size-6" aria-hidden="true" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Product Description
                  </h3>
                  <p className="mt-4 text-sm text-gray-500">
                    {product.description}
                  </p>
                </>
              )}

              {modalView === ModalView.Form && (
                <>
                  {/* Back Button positioned in the top left corner */}
                  <div className="absolute top-0 left-0 p-4">
                    <button
                      type="button"
                      onClick={() => setModalView(ModalView.ProductInfo)}
                      className="text-gray-700 hover:text-buttons"
                    >
                      <ArrowLeftIcon className="size-6" aria-hidden="true" />
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

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                                  validateField(e.target.name, e.target.value)
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
                                  validateField(e.target.name, e.target.value); // Validation logic
                                }}
                                onBlur={(e) =>
                                  validateField(e.target.name, e.target.value)
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
                                value={product?.name || "Not Available"}
                                readOnly
                                required
                                className=" w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-700 outline-none bg-opacity-50 cursor-not-allowed"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        type="submit"
                        className="rounded-md bg-links px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hoverLinks focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent5"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </>
              )}

              {modalView === ModalView.Confirmation && (
                <>
                  {/* Confirmation Message */}
                  <h3 className="text-xl text-center font-semibold text-gray-900 mt-4">
                    Thank you for your submission!
                  </h3>
                  <p className="mt-2 text-sm text-center text-gray-500">
                    Your information has been successfully submitted and will be
                    forwarded to a financial adviser for review.
                  </p>

                  {/* Close Button */}
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={onClose}
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
  );
};

export default ProductModal;
