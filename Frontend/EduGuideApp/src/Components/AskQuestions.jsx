import React, { useState, useEffect } from "react";

const educationalOptions = {
  "CS,Physics,Chemistry,Mathematics": {
    HSE: "HSE (PCM) - High School Education (HSE) with a focus on Physics, Chemistry, and Mathematics is a popular choice for students interested in engineering, technology, or sciences. This track prepares students for further studies in fields like engineering, computer science, or physical sciences.",
    Diploma:
      "Diploma in Engineering - A practical, hands-on program that prepares students for technical roles in engineering fields such as mechanical, electrical, civil, or computer engineering. This diploma usually focuses on practical skills and knowledge required for entry-level engineering jobs or as a foundation for further study.",
    Vocational:
      "Vocational Course (Networking) - A specialized course that covers networking concepts, configurations, and troubleshooting. Students learn about network infrastructure, security, and protocols, preparing them for roles in IT networking, technical support, or as network administrators.",
  },
  "Biology,Physics,Chemistry,Mathematics": {
    HSE: "HSE (PCB) - High School Education with a focus on Physics, Chemistry, and Biology is geared toward students interested in medicine, life sciences, and healthcare-related fields. This curriculum prepares students for courses in biology, biotechnology, pharmacy, or medical fields.",
    Diploma:
      "Diploma in Healthcare - A vocational course designed for those interested in working in healthcare. It covers subjects like patient care, medical terminology, and basic healthcare practices. This diploma is suitable for entry-level healthcare roles and can be a stepping stone to further medical training.",
    Vocational:
      "Vocational (MLT) - This vocational program focuses on laboratory skills required in medical diagnostics. Students learn about specimen collection, lab techniques, and equipment handling, preparing them for roles as medical laboratory technicians or assistants in clinical labs.",
  },
  "Humanities and Social Sciences": {
    HSE: "HSE (Commerce) - High School Education in Commerce focuses on subjects like economics, business studies, and accountancy. It prepares students for careers in business, finance, and social sciences and is a foundation for studying accounting, business management, or law.",
    Diploma:
      "Diploma in IT - A diploma in Information Technology provides foundational knowledge in software development, data handling, and networking. This track is ideal for students interested in entry-level IT roles or who want to pursue advanced studies in computer science or IT.",
    Vocational:
      "Vocational (Entrepreneurship) - This course introduces students to the basics of entrepreneurship, including business planning, marketing, and management. It is designed for those interested in starting or managing a small business or working in entrepreneurial roles.",
  },
  "Arts and Communication": {
    HSE: "HSE (Arts) - High School Education in Arts typically includes subjects like literature, history, sociology, and fine arts. This curriculum is ideal for students interested in careers in media, arts, design, and social sciences and can lead to further study in liberal arts or humanities.",
    Diploma:
      "Diploma in Fashion Design - A practical program that teaches the basics of fashion design, pattern-making, and garment construction. This diploma is suited for students interested in careers in fashion, apparel design, or the textile industry.",
    Vocational:
      "Vocational (Graphic Design) - This vocational course focuses on design principles, digital illustration, and media design. Students learn about software like Adobe Photoshop, Illustrator, and InDesign, preparing them for careers in graphic design, digital media, and content creation.",
  },
  "Business,Economics,Accountancy": {
    HSE: "HSE (Humanities) - High School Education in Humanities covers a range of social science subjects, including economics, political science, and history. It’s suitable for students interested in law, business, public administration, or social work and sets the foundation for further study in social sciences.",
    Diploma:
      "Diploma in Social Work - This diploma provides foundational knowledge in social work practices, community engagement, and counseling. It’s geared toward students interested in helping professions and prepares them for entry-level roles in social services or as a base for further studies.",
    Vocational:
      "Vocational (Child Education) - This course introduces concepts in early childhood education, including child psychology, lesson planning, and classroom management. It prepares students for roles in childcare, early childhood education, or preschool teaching.",
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
    <div className=" max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
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

      {re &&
        (() => {
          const arr = re.split("-");
          return (
            <div className="mt-6 text-center">
              <p className="text-xl font-semibold gap-3 flex flex-col text-gray-800">
                <span>Recommended Course:</span>
                <span className="text-blue-500">{arr[0]}</span>
                <span className="text-gray-500">{arr[1]}</span>
              </p>
            </div>
          );
        })()}
    </div>
  );
};

export default AskQuestions;
