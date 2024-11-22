import axios from "axios";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { redirect, useNavigate } from "react-router-dom";
const StudentDetailsForm = () => {
  // Dependency on email in cookies to refetch if it changes // Effect depends on the email state
  const navigate = useNavigate();
  // const [cookies] = useCookies(["email"]);
  const [cookies, removeCookie] = useCookies(["email", "name"]);
  const [edit, setEdit] = useState(true);
  const [fect, setFect] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: `${cookies.email}`,
    hobbies: "",
    // preference: "",
    nationality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleEdit = async () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const handleLogout = () => {
    removeCookie("email"); // Remove email cookie
    removeCookie("name"); // Remove name cookie
    navigate("/login"); // Redirect to login page
  };
  useEffect(() => {
    // Fetch user details from the server if the email is available in cookies
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/GetUserDetails",
          {
            params: { Email: cookies.email },
          }
        );

        if (response.data && response.data.length > 0) {
          // Assuming the response contains the user data
          const userData = response.data[0]; // Access the first user object
          setFormData({
            name: userData.name || "",
            age: userData.age || "",
            email: userData.email || cookies.email,
            hobbies: userData.hobbies || "",
            nationality: userData.Nationality || "",
          });
          setEdit(false);
          setFect(true);
        } else {
          console.log("No user data found for this email.");
        }
      } catch (err) {
        console.error("Failed to fetch user data", err);
        // You can optionally set an error state here to display to the user
      }
    };

    if (cookies.email) {
      fetchUserDetails(); // Fetch data if email is available in cookies
    }
  }, [cookies.email]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (cookies.email == null) {
      alert("Please login first or register first");
      navigate("/Register");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/stuDetails",
          formData
        );
        console.log(response.data);
        alert("Student details submitted successfully!");
      } catch (error) {
        console.log(response.data);
        alert("Unsuccessfully!");
      }
    }
    window.location.reload();
    // setFormData({
    //   name: "",
    //   age: "",
    //   hobbies: "",
    //   nationality: "",
    // });
    // You can replace this with any API call or further processing
    console.log(formData);
  };

  return (
    <div className="min-h-screen ">
      <div
        className={`${
          edit ? "bg-gray-100 shadow-2xl" : ""
        } max-w-lg mx-auto p-6 mt-32 mb-20 bg-white rounded-lg shadow-md`}
      >
        <button
          type="submit"
          onClick={handleLogout}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Logout
        </button>
        <h2 className="text-2xl font-semibold text-center  text-gray-800 mb-4">
          Student Details
        </h2>
        <form onSubmit={handleSubmit}>
          {fect ? (
            <button
              type="button"
              onClick={handleEdit}
              className=" p-1 text-blue-600 font-semibold rounded-md hover:text-blue-500"
            >
              Edit
            </button>
          ) : (
            <></>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                readOnly={!edit && fect}
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="preference" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="text"
                id="preference"
                name="preference"
                value={cookies.email}
                readOnly
                className="w-full p-2 border text-gray-400 border-gray-700 rounded-md"
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
                readOnly={!edit && fect}
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
                readOnly={!edit && fect}
                name="hobbies"
                value={formData.hobbies}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="nationality" className="block text-gray-700 mb-2">
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                readOnly={!edit && fect}
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
                {edit && fect ? "Save" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentDetailsForm;
