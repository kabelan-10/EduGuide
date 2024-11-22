import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const LoginPage = () => {
  const [cookies, setCookie] = useCookies(["email"]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    navigate("/Register");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    try {
      const response = await axios.post(
        "http://localhost:3000/Login",
        formData
      );
      console.log("Login successful:", response.data);

      setCookie("name", response.data.user.username, {
        path: "/",
        maxAge: 3600,
      });
      setCookie("email", response.data.user.email, { path: "/", maxAge: 3600 });
      // Log or process the received data

      // Redirect to dashboard or desired page after successful login
      navigate("/");
    } catch (error) {
      // If user doesn't exist, set an error message prompting registration
      if (error.response && error.response.status === 404) {
        setErrorMessage("User not found. Please register.");
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 w-full flex justify-center items-center">
          Welcome Back !
        </h2>
        {/* <h2 className="text-xl font-bold mb-4 w-full flex justify-center items-center">
          LOGIN
        </h2> */}

        {errorMessage && (
          <div className="mb-4 text-red-600 font-medium">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
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
            Login
          </button>
          <button
            type="button"
            className="pt-3 text-sm font-semibold w-full flex justify-center items-center "
          >
            Not a member?{" "}
            <span onClick={handleLogin} className="underline p-2 text-blue-600">
              Register
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
