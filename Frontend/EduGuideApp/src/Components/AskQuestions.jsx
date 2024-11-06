import React, { useState, useEffect } from "react";

const educationalOptions = {
  "CS,Physics,Chemistry,Mathematics": {
    HSE: "HSE (PCM)",
    Diploma: "Diploma in Engineering",
    Vocational: "Vocational Course (Networking)",
  },
  "Biology,Physics,Chemistry,Mathematics": {
    HSE: "HSE (PCB)",
    Diploma: "Diploma in Healthcare",
    Vocational: "Vocational (MLT)",
  },
  "Humanities and Social Sciences": {
    HSE: "HSE (Commerce)",
    Diploma: "Diploma in IT",
    Vocational: "Vocational (Entrepreneurship)",
  },
  "Arts and Communication": {
    HSE: "HSE (Arts)",
    Diploma: "Diploma in Fashion Design",
    Vocational: "Vocational (Graphic Design)",
  },
  "Business,Economics,Accountancy": {
    HSE: "HSE (Humanities)",
    Diploma: "Diploma in Social Work",
    Vocational: "Vocational (Child Education)",
  },
};

const AskQuestions = ({ category }) => {
  const [selectedOption, setSelectedOption] = useState(""); // Initialize with an empty string
  const [re, setRe] = useState(null);
  console.log(category);
  // Check if the selected category is valid
  const options = educationalOptions[category];
  console.log(options);
  useEffect(() => {
    // Reset the recommended course whenever category changes
    setRe(null);
    setSelectedOption(""); // Reset the selected option when category changes
  }, [category]);

  if (!options) {
    return <p>Invalid category selected!</p>;
  }

  // Handle the form submission
  const handleSubmitRe = () => {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }
    // Get the corresponding course based on the selected option
    setRe(options[selectedOption]);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Choose Your Path
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Do you want to continue with schooling (HSE), discontinue with schooling
        (Diploma), or pursue it vocationally?
      </p>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="HSE"
            name="path"
            value="HSE"
            checked={selectedOption === "HSE"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="h-5 w-5 text-blue-500"
          />
          <label htmlFor="HSE" className="text-gray-700">
            Continue with schooling (HSE)
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="Diploma"
            name="path"
            value="Diploma"
            checked={selectedOption === "Diploma"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="h-5 w-5 text-blue-500"
          />
          <label htmlFor="Diploma" className="text-gray-700">
            Discontinue with schooling (Diploma)
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="Vocational"
            name="path"
            value="Vocational"
            checked={selectedOption === "Vocational"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="h-5 w-5 text-blue-500"
          />
          <label htmlFor="Vocational" className="text-gray-700">
            Pursue vocationally
          </label>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleSubmitRe}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>

      {re && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold flex flex-col text-gray-800">
            <span> Recommended Course: </span>
            <span className="text-blue-500">{re}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AskQuestions;
