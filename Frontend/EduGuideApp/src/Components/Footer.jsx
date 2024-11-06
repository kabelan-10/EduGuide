import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 p-6  w-full text-white">
      <div className="flex justify-between items-center">
        {/* Left side - branding or message */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} EduGuide. All rights reserved.
        </p>

        {/* Right side - Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            Try MCQs
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
