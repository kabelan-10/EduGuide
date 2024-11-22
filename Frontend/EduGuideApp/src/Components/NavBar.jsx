import React, { useState } from "react";
import { Link } from "react-router-dom"; // For routing to Register and Login pages
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to toggle dropdown visibility
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["email", "name"]); // Use cookies to get email and name

  // Toggle the dropdown visibility
  const handleUser = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Handle logout
  const handleLogout = () => {
    removeCookie("email"); // Remove email cookie
    removeCookie("name"); // Remove name cookie
    setDropdownVisible(false);
    navigate("/login"); // Redirect to login page
  };
  const handleDashBooard = () => {
    setDropdownVisible(false);
    navigate("/stu");
  };

  return (
    <nav className="bg-blue-600 p-7 fixed top-0 z-10 mb-9 w-full flex justify-between items-center text-white">
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-gray-300">
          EduGuide
        </Link>
      </div>
      {cookies.email ? (
        <div className="relative">
          {/* Display name with dropdown when logged in */}
          <p
            onClick={handleUser}
            className="text-white text-xl font-semibold cursor-pointer"
          >
            {cookies.name}
          </p>

          {/* Dropdown menu */}
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md w-48 py-2">
              <button
                onClick={handleDashBooard}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                DashBoard
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* Links to display when the email cookie doesn't exist */}
          <Link to="/register" className="hover:text-gray-300 mr-4">
            Register
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
