import { div } from "@tensorflow/tfjs";
import React, { useState } from "react";

const StudentDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    hobbies: "",
    preference: "",
    nationality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Student details submitted successfully!");
    setFormData({
      name: "",
      age: "",
      hobbies: "",
      preference: "",
      nationality: "",
    });
    // You can replace this with any API call or further processing
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-lg mx-auto p-6  mb-20 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mt-32 text-gray-800 mb-4">
          Enter Student Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-gray-700 mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="hobbies" className="block text-gray-700 mb-2">
                Hobbies
              </label>
              <input
                type="text"
                id="hobbies"
                name="hobbies"
                value={formData.hobbies}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* <div>
              <label htmlFor="preference" className="block text-gray-700 mb-2">
                Preference
              </label>
              <input
                type="text"
                id="preference"
                name="preference"
                value={formData.preference}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div> */}

            <div>
              <label htmlFor="nationality" className="block text-gray-700 mb-2">
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentDetailsForm;
