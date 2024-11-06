import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Choose the Perfect Course for Your Future!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore a wide range of courses to kick-start your career.
        </p>
        <button
          onClick={() => alert("Redirect to Course Selection")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
