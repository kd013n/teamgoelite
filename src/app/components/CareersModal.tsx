import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Description, ModalView, type FormData } from "./CareersTypes";

interface AppFormModalProps {
  isOpen: boolean;
  appForm: Description | null;
  onClose: () => void;
}

const AppFormModal: React.FC<AppFormModalProps> = ({
  isOpen,
  appForm,
  onClose,
}) => {
  const [modalView, setModalView] = useState<ModalView>(ModalView.AppForm);
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    middleInitial: "",
    suffix: "",
    sex: "",
    contactNumber: "",
    email: "",
    position: appForm?.category?.title || "",
    file: null,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    middleInitial: "",
    suffix: "",
    email: "",
    contactNumber: "",
    file: "",
  });

  function validateField(name: string, value: string | File | null) {
    const updatedErrors = { ...errors };

    // Validate Email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        updatedErrors.email = "Email address is required.";
      } else if (typeof value === "string" && !emailRegex.test(value)) {
        updatedErrors.email = "Please enter a valid email address.";
      } else {
        updatedErrors.email = "";
      }
    }

    // Validate Contact Number
    if (name === "contactNumber") {
      if (!value) {
        updatedErrors.contactNumber = "Contact number is required.";
      } else if (typeof value === "string" && value.length > 11) {
        updatedErrors.contactNumber = "Contact number must be 11 digits long.";
      } else if (typeof value === "string" && !value.startsWith("09")) {
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
      } else if (typeof value === "string" && !namePattern.test(value)) {
        updatedErrors[name] = "Only letters, spaces, and hyphens are allowed.";
      } else {
        updatedErrors[name] = "";
      }
    }

    // Validate File
    if (name === "file") {
      if (!value) {
        updatedErrors.file = "A file is required.";
      } else {
        updatedErrors.file = "";
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    // Validate the file
    if (file && file.type !== "application/pdf") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: "Only PDF files are allowed.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: "",
      }));
    }

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
    });

    // Check if there are any errors
    if (Object.values(errors).some((error) => error !== "")) {
      alert("Please fix the errors before submitting.");
      return;
    }

    // Prepare form data for submission
    const submissionData = new FormData();
    submissionData.append("lastName", formData.lastName);
    submissionData.append("firstName", formData.firstName);
    submissionData.append("middleInitial", formData.middleInitial);
    submissionData.append("suffix", formData.suffix);
    submissionData.append("sex", formData.sex);
    submissionData.append("contactNumber", formData.contactNumber);
    submissionData.append("email", formData.email);
    submissionData.append("position", formData.position);
    if (formData.file) {
      submissionData.append("file", formData.file);
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: submissionData,
      });

      if (response.ok) {
        console.log("Form Data Submitted:", formData);
        setFormData({
          lastName: "",
          firstName: "",
          middleInitial: "",
          suffix: "",
          sex: "",
          contactNumber: "",
          email: "",
          position: "",
          file: null,
        });
        setModalView(ModalView.Confirmation);
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed.");
    }
  };

  if (!isOpen || !appForm) return null;

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

              {modalView === ModalView.AppForm && (
                <>
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

                          {/* File Upload */}
                          <div className="sm:col-span-6">
                            <label
                              htmlFor="file"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Upload File
                            </label>
                            <div className="mt-2">
                              <input
                                id="file"
                                name="file"
                                type="file"
                                accept=".pdf" // Restrict file selection to PDFs
                                onChange={handleFileChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-accent5 sm:text-sm"
                                required
                              />
                              {/* Small note below the file input */}
                              <p className="mt-1 text-sm text-gray-500">
                                Note: Only PDF files are allowed.
                              </p>
                              {errors.file && (
                                <p className="mt-2 text-sm text-red-600">
                                  {errors.file}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Position (Read-Only and Unclickable) */}
                          <div className="sm:col-span-6">
                            <label
                              htmlFor="position"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Position
                            </label>
                            <div className="mt-2">
                              <input
                                id="position"
                                name="position"
                                type="text"
                                value={appForm?.name || "Not Available"}
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

export default AppFormModal;
