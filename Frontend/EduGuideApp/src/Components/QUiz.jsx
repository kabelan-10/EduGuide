import React from "react";
import QuizPage from "./QuizPage";
function QUiz() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <p className="text-xl flex flex-col text-center mt-40 font-bold mx-32 mb-3">
        <span>Welcome to the Quiz Page!</span>
        <span>
          Here, you'll find a series of questions to find you your course.
        </span>
      </p>

      {/* Ensure QuizPage has space below */}
      <div className="mt-8">
        <QuizPage />
      </div>
    </div>
  );
}

export default QUiz;
