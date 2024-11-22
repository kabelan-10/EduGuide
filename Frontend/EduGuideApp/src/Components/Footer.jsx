import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 p-6 static bottom-0 w-full text-white">
      <div className="flex justify-between items-center">
        {/* Left side - branding or message */}
        <p className="text-sm flex flex-col flex-wrap text-wrap">
          &copy; {new Date().getFullYear()} EduGuide. All rights reserved.
          <span
            className="cursor-pointer hover:text-gray-200"
            onClick={() =>
              window.open("https://www.linkedin.com/in/kabelan2005/", "_blank")
            }
          >
            @ Kabelan E
          </span>
        </p>

        {/* Right side - Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/Quiz" className="hover:text-gray-300">
            Try MCQs
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
