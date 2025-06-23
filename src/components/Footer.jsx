import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-6 text-center text-xs sm:text-sm">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/signin">SIGN IN</Link>
        </div>
        <div>
          &copy; 2025.{" "}
          <span className="text-yellow-400">
            Burmese Rohingya Welfare Organization New Zealand
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
