import React from "react";
import { useLocation, Link } from "react-router-dom";
import validPaths from "../data/url";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const Breadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("Current Path:", currentPath);
  console.log("Valid Paths:", validPaths);
  const isValidPage = validPaths.includes(currentPath);
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Page title is the last segment, or 'Home' if at root
  const pageTitle =
    pathnames.length > 0
      ? capitalize(
          pathnames[pathnames.length - 1]
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        )
      : "Home";

  console.log("pageTitled Paths:", pageTitle);

  // Build breadcrumb links for right side
  const breadcrumbs = [
    <Link key="home" to="/" className="text-gray-600 hover:underline">
      Home
    </Link>,
  ];

  pathnames.forEach((value, index) => {
    const to = "/" + pathnames.slice(0, index + 1).join("/");
    breadcrumbs.push(
      <span key={`sep-${to}`} className="mx-1 text-gray-400">
        /
      </span>
    );
    breadcrumbs.push(
      index === pathnames.length - 1 ? (
        <span key={to} className="text-gray-700 font-semibold">
          {capitalize(
            value
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          )}
        </span>
      ) : (
        <Link key={to} to={to} className="text-gray-600 hover:underline">
          {capitalize(
            value
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          )}
        </Link>
      )
    );
  });

  if (!isValidPage) {
    return (
      <>
        <br></br> <br></br>
        <div className="text-red-600 text-center mt-10 text-lg font-semibold">
          Invalid page.
        </div>
      </>
    );
  }

  return pageTitle === "Home" ? null : (
    <div>
      <br></br> <br></br>
      <div className="w-full flex items-center justify-between px-2 md:px-35 pt-4 py-3  mb-2">
        {/* Left: Page Title */}
        <h2 className="text-2xl px-5 font-bold text-gray-900 ">{pageTitle}</h2>
        {/* Right: Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol className="flex  text-sm">{breadcrumbs}</ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
