import React from "react";
import { Link } from "react-router-dom"; // For routing to Register and Login pages

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <div className="text-xl font-bold">CourseChooser</div>
      <div className="space-x-4">
        <Link to="/register" className="hover:text-gray-300">
          Register
        </Link>
        <Link to="/login" className="hover:text-gray-300">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
