import React from "react";
import { Link } from "react-router-dom";
import img2 from "/src/rb_2148571733.png";
import imgSrc from "/src/rb_2150314523.png";
const HomePage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-12 items-center text-center md:text-left">
          {/* Text Section */}
          <div className="flex flex-col justify-around gap-6 md:pl-20 col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-widest leading-tight ">
              EduGuide
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight ">
              Choose the Perfect Course for Your Future!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Explore a wide range of courses to kick-start your career.
            </p>
            <Link to="/Quiz">
              <button className="bg-blue-600 hover:drop-shadow-xl  text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-center">
            <img
              src={img2}
              alt="logo"
              className="w-40 h-40 md:w-60 md:h-60 object-cover drop-shadow-[10px_5px_5px_rgba(0,0,0,0.3)] hover:drop-shadow-[15px_10px_5px_rgba(0,0,0,0.3)] hover:scale-105 transition-drop-shadow duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-10 px-6 md:px-16 lg:px-32 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed pt-4 pb-10 mx-auto">
          Explore your interests and future career paths with tailored course
          options based on your unique interests and strengths. Whether you’re
          drawn to science, humanities, creative arts, or business, we’ve got
          pathways that align with your goals.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-white py-12 px-6 md:px-16 lg:px-32 space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src={imgSrc}
            alt="Descriptive Image"
            className="w-full h-auto max-w-xs rounded-lg drop-shadow-[5px_5px_5px_rgba(0,0,0,0.3)] hover:drop-shadow-[15px_10px_5px_rgba(0,0,0,0.3)] hover:scale-105 transition-drop-shadow duration-300 ease-in-out"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 bg-white py-12 px-6 text-center md:text-left space-y-8 text-gray-800">
          <h2 className="text-3xl font-bold text-gray-900">
            How to Choose the Right Path ?
          </h2>

          {/* HSE (10+2) as a Foundation */}
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-blue-600">
              HSE (10+2) as a Foundation
            </h3>
            <p className="text-lg">
              Ideal for students planning further academic studies, keeping
              options open for university degrees in related fields.
            </p>
          </div>

          {/* Diploma Courses for Practical Skills */}
          <div className="bg-white p-6 rounded-lg  shadow-lg space-y-4 hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-green-600">
              Diploma Courses for Practical Skills
            </h3>
            <p className="text-lg">
              Diplomas are technical and hands-on, ideal for early workforce
              entry or specialization. They also provide a path to degree
              programs through lateral entry.
            </p>
          </div>

          {/* Vocational Courses for Short-Term Skills */}
          <div className="bg-white p-6 rounded-lg  shadow-lg space-y-4 hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-purple-600">
              Vocational Courses for Short-Term Skills
            </h3>
            <p className="text-lg">
              Job-oriented and skill-specific, vocational courses suit students
              looking for quick entry into fields like healthcare, IT, and
              creative design.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mb-20 mt-3">
        <Link to="/Quiz">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
