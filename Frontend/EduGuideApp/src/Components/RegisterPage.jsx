import React, { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const RegisterPage = () => {
  // State to hold form input values
  const [cookies, setCookie] = useCookies(["email"]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State to hold error messages
  const [errorMessage, setErrorMessage] = useState("");
  const [Message, setMessage] = useState("");
  const navigate = useNavigate();
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    navigate("/Login");
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    try {
      const response = await axios.post(
        "http://localhost:3000/Register",
        formData
      );
      // Handle successful response
      console.log("Registration successful:", response.data);
      setMessage(response.data.message);

      setCookie("email", formData.email, { path: "/", maxAge: 3600 });
      setCookie("name", formData.username, { path: "/", maxAge: 3600 });
      navigate("/Quiz");
    } catch (error) {
      // Display the error message from the server
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* <div className="m-4 p-8">
        <p className="text-gray-700 text-xl font-semibold  flex justify-center items-center">
          Create your account and join us on an exciting journey. Fill out the
          form below to get started!
        </p>
      </div> */}
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 w-full flex justify-center items-center">
          Join Us!
        </h2>

        {errorMessage && (
          <div className="mb-4 text-red-600 font-medium">{errorMessage}</div>
        )}
        {Message && (
          <div className="mb-4 text-green-600 font-medium">{Message}</div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mb-6 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
          <button
            type="button"
            className="pt-3 text-sm font-semibold w-full flex justify-center items-center "
          >
            Already Registered?{" "}
            <span onClick={handleLogin} className="underline p-2 text-blue-600">
              Login
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
