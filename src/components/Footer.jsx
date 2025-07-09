import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-6 text-center text-xs sm:text-sm">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <Link to="/">HOME</Link>
          <Link to="/about_us">ABOUT US</Link>
          <Link to="/upcoming_event">UPCOMING EVENTS</Link>
          <Link to="/past_event">PAST EVENTS</Link>
          <Link to="/news">NEWS</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/login">SIGN IN</Link>
        </div>
        <div>
          &copy; 2025.{" "}
          <span className="text-yellow-400">
            Rohingya Association New Zealand
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
