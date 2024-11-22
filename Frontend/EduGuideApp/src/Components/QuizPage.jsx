import React, { useState } from "react";
import AskQuestions from "./AskQuestions";
import questions from "./Questions";
const CareerQuiz = () => {
  //   const questions = [
  //     {
  //       question: "Which subject do you enjoy studying the most?",
  //       options: [
  //         "Mathematics",
  //         "Biology",
  //         "History",
  //         "English",
  //         "Business Studies",
  //       ],
  //       relatedCareers: [0, 1, 2, 3, 4],
  //     },
  //     {
  //       question: "What kind of activities do you find most engaging?",
  //       options: [
  //         "Solving complex math problems",
  //         "Doing science experiments",
  //         "Debating social and political issues",
  //         "Writing stories or creating art",
  //         "Planning business ventures",
  //       ],
  //       relatedCareers: [0, 1, 2, 3, 4],
  //     },
  //     {
  //       question: "Which of the following do you excel in academically?",
  //       options: [
  //         "Logical reasoning",
  //         "Understanding living organisms and life sciences",
  //         "Memorizing dates, events, and historical facts",
  //         "Writing essays and interpreting literature",
  //         "Understanding market trends and business principles",
  //       ],
  //       relatedCareers: [0, 1, 2, 3, 4],
  //     },
  //     {
  //       question: "How do you prefer to spend your free time?",
  //       options: [
  //         "Solving puzzles or playing brain games",
  //         "Watching science documentaries",
  //         "Reading about historical events",
  //         "Writing poetry or designing graphics",
  //         "Reading business news or economic reports",
  //       ],
  //       relatedCareers: [0, 1, 2, 3, 4],
  //     },
  //     {
  //       question:
  //         "Which of these subjects do you think will help you in the future?",
  //       options: [
  //         "Advanced mathematics",
  //         "Medicine and health science",
  //         "Political science or law",
  //         "Creative writing or mass communication",
  //         "Economics or entrepreneurship",
  //       ],
  //       relatedCareers: [0, 1, 2, 3, 4],
  //     },
  //   ];

  const careerFactors = {
    "CS,Physics,Chemistry,Mathematics": {
      demand: 90,
      stress: 60,
      comfort: 70,
      scope: 85,
      opportunity: 80,
      competition: 65,
      score: 0,
    },
    "Biology,Physics,Chemistry,Mathematics": {
      demand: 85,
      stress: 65,
      comfort: 75,
      scope: 80,
      opportunity: 70,
      competition: 70,
      score: 0,
    },
    "Humanities and Social Sciences": {
      demand: 70,
      stress: 70,
      comfort: 80,
      scope: 75,
      opportunity: 60,
      competition: 75,
      score: 0,
    },
    "Arts and Communication": {
      demand: 60,
      stress: 55,
      comfort: 85,
      scope: 70,
      opportunity: 65,
      competition: 80,
      score: 0,
    },
    "Business,Economics,Accountancy": {
      demand: 80,
      stress: 75,
      comfort: 70,
      scope: 90,
      opportunity: 75,
      competition: 85,
      score: 0,
    },
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [result, setResult] = useState(null);
  const [countdown, setCountdown] = useState(questions.length);

  const handleOptionSelect = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] !== null) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    if (answers[currentQuestion] !== null) {
      const recommendation = generateRecommendation();
      setResult(recommendation);
    } else {
      alert("Please select an option to submit.");
    }
  };

  const generateRecommendation = () => {
    // First, reset the career scores based on user answers
    answers.forEach((answer, index) => {
      const relatedCareers = questions[index].relatedCareers;
      const career = Object.keys(careerFactors)[relatedCareers[answer]];

      // Increase the career's score based on the answer
      careerFactors[career].score += 10;
    });

    // Now, factor in other aspects like demand, stress, comfort, etc.
    const modifiedCareers = Object.entries(careerFactors).map(
      ([careerName, factors]) => {
        const { demand, stress, comfort, scope, opportunity, competition } =
          factors;

        // Calculate the weighted score based on the career factors
        const userPreferences = {
          lowStress: true,
          highDemand: true,
          highComfort: true,
        };

        let modifiedScore = factors.score;

        if (userPreferences.lowStress && stress < 50) {
          modifiedScore += 5; // Add score if stress is low and user prefers it
        } else if (!userPreferences.lowStress && stress > 50) {
          modifiedScore += 3; // Add score if stress is high and user prefers it
        }

        if (userPreferences.highDemand && demand > 70) {
          modifiedScore += 5; // Add score if demand is high and user prefers it
        }

        if (userPreferences.highComfort && comfort > 70) {
          modifiedScore += 4; // Add score if comfort is high and user prefers it
        }

        return { careerName, modifiedScore }; // Return career with modified score
      }
    );

    // Sort careers by modified score
    const sortedCareers = modifiedCareers.sort(
      (a, b) => b.modifiedScore - a.modifiedScore
    );

    // Return top 2 recommended careers along with their scores
    return sortedCareers.slice(0, 2);
  };

  return (
    <div
      className="quiz-container  md:mx-20 w-full ml-10
       md:p-6  mb-20 flex flex-col justify-between items-center"
      style={{ minHeight: "500px" }}
    >
      {result ? (
        <>
          <div
            id="result"
            className="bg-white p-8 my-8 md:w-auto mx-20 rounded-lg shadow-lg mt-6"
          >
            <strong className="text-2xl font-semibold text-gray-800">
              Recommended Careers:
            </strong>
            <div className="mt-4 flex flex-col gap-6 text-gray-700">
              <p className="flex items-center">
                <span className="text-lg font-semibold text-blue-500">
                  {result[0].careerName}
                </span>{" "}
                <span className="ml-2 text-sm text-green-500">
                  (Score: {result[0].modifiedScore})
                </span>
              </p>
              <p className="flex items-center">
                <span className="text-lg font-semibold text-blue-500">
                  {result[1].careerName}
                </span>{" "}
                <span className="ml-2 text-sm text-green-500">
                  (Score: {result[1].modifiedScore})
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {result && <AskQuestions category={result[0].careerName} />}
          </div>
        </>
      ) : (
        <>
          <div className="text-lg text-gray-700 mb-4">
            Question {currentQuestion + 1} of {questions.length} -{" "}
            <strong>{countdown} questions remaining</strong>
          </div>
          <div
            id="question"
            className="text-2xl font-semibold text-center text-gray-800 my-6"
          >
            {questions[currentQuestion].question}
          </div>
          <ul id="options" className="space-y-4 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className="p-3 rounded-md hover:bg-gray-100 cursor-pointer transition-all"
              >
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="option"
                    checked={answers[currentQuestion] === index}
                    onChange={() => handleOptionSelect(index)}
                    className="h-5 w-5 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-lg text-gray-700">{option}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-all disabled:opacity-50"
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
              >
                Submit
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  quizContainer: {
    maxWidth: "600px",
    margin: "auto",
    marginTop: "2rem",
    marginBottom: "10rem",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Arial', sans-serif",
    animation: "fadeIn 1s ease-in-out",
  },
  question: {
    fontWeight: "bold",
    marginBottom: "15px",
    fontSize: "18px",
    color: "#333",
  },
  options: {
    listStyleType: "none",
    padding: 0,
  },
  option: {
    margin: "10px 0",
    fontSize: "16px",
    color: "#555",
  },
  radio: {
    marginRight: "10px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
    backgroundColor: "#28a745",
    border: "none",
    transition: "background-color 0.3s ease",
  },
  prevButton: {
    backgroundColor: "#17a2b8",
  },
  result: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#e9ecef",
    fontSize: "18px",
    textAlign: "center",
  },
};

export default CareerQuiz;
