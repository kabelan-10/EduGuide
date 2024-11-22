import React, { useEffect } from "react";
import QuizPage from "./QuizPage";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function QUiz() {
  const [cookies] = useCookies(["email", "name"]);
  const navigate = useNavigate();
  // const history = useHistory();

  useEffect(() => {
    // If there is no email in cookies, redirect to login page
    if (!cookies.email) {
      // history.push("/register");
      navigate("/register", { replace: true });
    }
  }, [cookies.email, navigate]);

  return (
    cookies.email && (
      <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <p className="text-base md:text-xl flex flex-col text-center mt-40 font-bold mx-10 md:mx-32 mb-3">
          <span>Welcome to the Quiz Page!</span>
          <span>
            Here, you'll find a series of questions to find you your course.
          </span>
        </p>

        {/* Ensure QuizPage has space below */}
        <div className="mt-8 flex justify-center items-center">
          <QuizPage />
        </div>
      </div>
    )
  );
}

export default QUiz;
