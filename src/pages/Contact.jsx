import React, { useState, useEffect } from "react";

const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// Phone Icon SVG
const PhoneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
export function Contact() {
  const email = "info@rohingyanz.org";
  const phone = "0064224162376";
  // State to trigger animations on mount
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true after a short delay to allow the component to render first
    const timer = setTimeout(() => setIsMounted(true), 100);
    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="flex items-center justify-between px-10 py-3  mb-2">
        <div
          className={`container mx-auto px-4 py-3 sm:py-2 lg:px-8 transition-opacity duration-1000 ease-out ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Page Header with slide-up animation */}
          <div
            className={`text-center mb-3 transform transition-all duration-700 ease-out ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-base font-semibold text-indigo-600">
              Get in Touch
            </p>

            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
              We are here to help and answer any question you might have. We
              look forward to hearing from you.
            </p>
          </div>

          {/* Contact Cards Section */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white shadow-xl shadow-gray-900/10">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Email Card with slide-up animation and hover effect */}
                <div
                  className={`p-8 md:p-12 text-center border-b md:border-b-0 md:border-r border-gray-200 transform transition-all duration-500 ease-out delay-300 hover:-translate-y-2 hover:shadow-2xl rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none ${
                    isMounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="flex justify-center items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                      <MailIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Email Us
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Send us an email and we'll get back to you as soon as
                    possible.
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-6 inline-block rounded-lg bg-indigo-50 px-5 py-3 text-base font-medium text-indigo-700 transition hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {email}
                  </a>
                </div>

                {/* Phone Card with slide-up animation and hover effect */}
                <div
                  className={`p-8 md:p-12 text-center transform transition-all duration-500 ease-out delay-500 hover:-translate-y-2 hover:shadow-2xl rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none ${
                    isMounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="flex justify-center items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                      <PhoneIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Call Us
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Give us a call during business hours for immediate
                    assistance.
                  </p>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="mt-6 inline-block rounded-lg bg-indigo-50 px-5 py-3 text-base font-medium text-indigo-700 transition hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {phone}
                  </a>
                  <br />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="mt-6 inline-block rounded-lg bg-indigo-50 px-5 py-3 text-base font-medium text-indigo-700 transition hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    0272102797647
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
