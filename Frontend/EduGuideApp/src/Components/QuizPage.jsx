// // CareerQuiz.js
// import React, { useState } from "react";

// const CareerQuiz = () => {
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

//   const careerFactors = {
//     "Science and Engineering": {
//       demand: 90,
//       stress: 60,
//       comfort: 70,
//       scope: 85,
//       opportunity: 80,
//       competition: 65,
//       score: 0,
//     },
//     "Biology and Health": {
//       demand: 85,
//       stress: 65,
//       comfort: 75,
//       scope: 80,
//       opportunity: 70,
//       competition: 70,
//       score: 0,
//     },
//     "Humanities and Social Sciences": {
//       demand: 70,
//       stress: 70,
//       comfort: 80,
//       scope: 75,
//       opportunity: 60,
//       competition: 75,
//       score: 0,
//     },
//     "Arts and Communication": {
//       demand: 60,
//       stress: 55,
//       comfort: 85,
//       scope: 70,
//       opportunity: 65,
//       competition: 80,
//       score: 0,
//     },
//     "Business and Economics": {
//       demand: 80,
//       stress: 75,
//       comfort: 70,
//       scope: 90,
//       opportunity: 75,
//       competition: 85,
//       score: 0,
//     },
//   };

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [result, setResult] = useState(null);

//   const handleOptionSelect = (index) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = index;
//     setAnswers(newAnswers);
//   };

//   const handleNext = () => {
//     if (answers[currentQuestion] !== null) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       alert("Please select an option before proceeding.");
//     }
//   };

//   const handlePrev = () => {
//     setCurrentQuestion(currentQuestion - 1);
//   };

//   const handleSubmit = () => {
//     if (answers[currentQuestion] !== null) {
//       const recommendation = generateRecommendation();
//       setResult(recommendation);
//     } else {
//       alert("Please select an option to submit.");
//     }
//   };

//   const generateRecommendation = () => {
//     answers.forEach((answer, index) => {
//       const relatedCareers = questions[index].relatedCareers;
//       const career = Object.keys(careerFactors)[relatedCareers[answer]];
//       careerFactors[career].score += 10;
//     });

//     const sortedCareers = Object.entries(careerFactors).sort(
//       (a, b) => b[1].score - a[1].score
//     );

//     return sortedCareers.slice(0, 2);
//   };

//   return (
//     <div className="quiz-container" style={styles.quizContainer}>
//       {result ? (
//         <div id="result" style={styles.result}>
//           <strong>Recommended Careers:</strong>
//           <br />
//           1. {result[0][0]} (Score: {result[0][1].score})<br />
//           2. {result[1][0]} (Score: {result[1][1].score})
//         </div>
//       ) : (
//         <>
//           <div id="question" style={styles.question}>
//             {questions[currentQuestion].question}
//           </div>
//           <ul id="options" style={styles.options}>
//             {questions[currentQuestion].options.map((option, index) => (
//               <li key={index} style={styles.option}>
//                 <label>
//                   <input
//                     type="radio"
//                     name="option"
//                     checked={answers[currentQuestion] === index}
//                     onChange={() => handleOptionSelect(index)}
//                   />
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ul>
//           <button
//             onClick={handlePrev}
//             style={styles.button}
//             disabled={currentQuestion === 0}
//           >
//             Previous
//           </button>
//           {currentQuestion < questions.length - 1 ? (
//             <button onClick={handleNext} style={styles.button}>
//               Next
//             </button>
//           ) : (
//             <button onClick={handleSubmit} style={styles.button}>
//               Submit
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// const styles = {
//   quizContainer: {
//     maxWidth: "600px",
//     margin: "auto",
//     padding: "20px",
//     backgroundColor: "white",
//     borderRadius: "8px",
//     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//   },
//   question: {
//     fontWeight: "bold",
//     marginBottom: "15px",
//     fontSize: "18px",
//   },
//   options: {
//     listStyleType: "none",
//     padding: 0,
//   },
//   option: {
//     margin: "10px 0",
//   },
//   button: {
//     margin: "5px",
//     padding: "10px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     color: "white",
//     backgroundColor: "#28a745",
//   },
//   result: {
//     marginTop: "20px",
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     backgroundColor: "#e9ecef",
//   },
// };

// export default CareerQuiz;

// // import React, { useState } from "react";

// // const CareerPredictionQuiz = () => {
// //   // Factor weightage questions (6)
// //   const factorQuestions = [
// //     { question: "How important is job demand to you?", factor: "demand" },
// //     {
// //       question: "How important is stress level in your career?",
// //       factor: "stress",
// //     },
// //     { question: "How important is comfort at work?", factor: "comfort" },
// //     {
// //       question: "How important is scope of growth in your career?",
// //       factor: "scope",
// //     },
// //     {
// //       question: "How important are opportunities for advancement?",
// //       factor: "opportunity",
// //     },
// //     {
// //       question: "How important is the level of competition in your field?",
// //       factor: "competition",
// //     },
// //   ];

// //   // External preference questions
// //   const externalQuestions = [
// //     {
// //       question: "Which subject do you enjoy studying the most?",
// //       options: [
// //         "Mathematics",
// //         "Biology",
// //         "History",
// //         "English",
// //         "Business Studies",
// //       ],
// //     },
// //     {
// //       question: "What kind of activities do you find most engaging?",
// //       options: [
// //         "Solving complex math problems",
// //         "Doing science experiments",
// //         "Debating social and political issues",
// //         "Writing stories or creating art",
// //         "Planning business ventures",
// //       ],
// //     },
// //     {
// //       question: "Which of the following do you excel in academically?",
// //       options: [
// //         "Logical reasoning",
// //         "Understanding living organisms and life sciences",
// //         "Memorizing dates, events, and historical facts",
// //         "Writing essays and interpreting literature",
// //         "Understanding market trends and business principles",
// //       ],
// //     },
// //   ];

// //   // Career factors (with scores to be used for prediction)
// //   const careerFactors = {
// //     "Science and Engineering": {
// //       demand: 90,
// //       stress: 60,
// //       comfort: 70,
// //       scope: 85,
// //       opportunity: 80,
// //       competition: 65,
// //       score: 0,
// //     },
// //     "Biology and Health": {
// //       demand: 85,
// //       stress: 65,
// //       comfort: 75,
// //       scope: 80,
// //       opportunity: 70,
// //       competition: 70,
// //       score: 0,
// //     },
// //     "Humanities and Social Sciences": {
// //       demand: 70,
// //       stress: 70,
// //       comfort: 80,
// //       scope: 75,
// //       opportunity: 60,
// //       competition: 75,
// //       score: 0,
// //     },
// //     "Arts and Communication": {
// //       demand: 60,
// //       stress: 55,
// //       comfort: 85,
// //       scope: 70,
// //       opportunity: 65,
// //       competition: 80,
// //       score: 0,
// //     },
// //     "Business and Economics": {
// //       demand: 80,
// //       stress: 75,
// //       comfort: 70,
// //       scope: 90,
// //       opportunity: 75,
// //       competition: 85,
// //       score: 0,
// //     },
// //   };

// //   // State hooks
// //   const [userFactorAnswers, setUserFactorAnswers] = useState({});
// //   const [externalAnswers, setExternalAnswers] = useState([]);
// //   const [currentFactorQuestionIndex, setCurrentFactorQuestionIndex] =
// //     useState(0);
// //   const [currentExternalQuestionIndex, setCurrentExternalQuestionIndex] =
// //     useState(0);
// //   const [quizStep, setQuizStep] = useState(1); // 1: Factor questions, 2: External questions, 3: Result

// //   // Handle factor questions answers
// //   const handleFactorChange = (e, factor) => {
// //     setUserFactorAnswers({
// //       ...userFactorAnswers,
// //       [factor]: parseInt(e.target.value),
// //     });
// //   };

// //   // Handle external questions answers
// //   const handleExternalChange = (e, idx) => {
// //     const updatedAnswers = [...externalAnswers];
// //     updatedAnswers[idx] = e.target.value;
// //     setExternalAnswers(updatedAnswers);
// //   };

// //   // Handle next button click for factor questions
// //   const handleNextFactorQuestion = () => {
// //     if (currentFactorQuestionIndex < factorQuestions.length - 1) {
// //       setCurrentFactorQuestionIndex(currentFactorQuestionIndex + 1);
// //     } else {
// //       setQuizStep(2); // Move to external questions after factor questions
// //     }
// //   };

// //   // Handle next button click for external questions
// //   const handleNextExternalQuestion = () => {
// //     if (currentExternalQuestionIndex < externalQuestions.length - 1) {
// //       setCurrentExternalQuestionIndex(currentExternalQuestionIndex + 1);
// //     } else {
// //       handleSubmitQuiz(); // Submit the quiz if it's the last external question
// //     }
// //   };

// //   // Handle submit of quiz and predict career
// //   const handleSubmitQuiz = () => {
// //     if (externalAnswers.length === externalQuestions.length) {
// //       const predictedCareer = calculateCareerScore();
// //       setQuizStep(3); // Show result after calculation
// //     }
// //   };

// //   // Calculate career score based on factor answers and external answers
// //   const calculateCareerScore = () => {
// //     const weightages = userFactorAnswers;
// //     const externalScore = externalAnswers.reduce(
// //       (acc, answer, idx) => {
// //         // Here you can map the external answers to specific careers
// //         if (answer.includes("Mathematics")) acc[0] += 10; // Example: increase score for "Science and Engineering"
// //         return acc;
// //       },
// //       [0, 0, 0, 0, 0]
// //     );

// //     Object.keys(careerFactors).forEach((career) => {
// //       let score = 0;
// //       Object.keys(careerFactors[career]).forEach((factor) => {
// //         if (factor !== "score") {
// //           score +=
// //             (careerFactors[career][factor] * (weightages[factor] || 1)) / 3; // Example weight logic
// //         }
// //       });
// //       careerFactors[career].score += score;
// //     });

// //     // Return the career with the highest score
// //     return Object.keys(careerFactors).reduce((bestCareer, career) => {
// //       return careerFactors[career].score > careerFactors[bestCareer].score
// //         ? career
// //         : bestCareer;
// //     });
// //   };

// //   // Render factor questions
// //   const renderFactorQuestions = () => {
// //     const factorQuestion = factorQuestions[currentFactorQuestionIndex];
// //     return (
// //       <div className="question p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-8">
// //         <p className="text-xl font-semibold text-gray-700 mb-4">
// //           {factorQuestion.question}
// //         </p>

// //         <div className="space-y-4">
// //           <label className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
// //             <input
// //               type="radio"
// //               name={factorQuestion.factor}
// //               value="1"
// //               onChange={(e) => handleFactorChange(e, factorQuestion.factor)}
// //               checked={userFactorAnswers[factorQuestion.factor] === 1}
// //               className="form-radio h-5 w-5 text-blue-500"
// //             />
// //             <span className="text-lg text-gray-600">Not important</span>
// //           </label>

// //           <label className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
// //             <input
// //               type="radio"
// //               name={factorQuestion.factor}
// //               value="2"
// //               onChange={(e) => handleFactorChange(e, factorQuestion.factor)}
// //               checked={userFactorAnswers[factorQuestion.factor] === 2}
// //               className="form-radio h-5 w-5 text-blue-500"
// //             />
// //             <span className="text-lg text-gray-600">Somewhat important</span>
// //           </label>

// //           <label className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
// //             <input
// //               type="radio"
// //               name={factorQuestion.factor}
// //               value="3"
// //               onChange={(e) => handleFactorChange(e, factorQuestion.factor)}
// //               checked={userFactorAnswers[factorQuestion.factor] === 3}
// //               className="form-radio h-5 w-5 text-blue-500"
// //             />
// //             <span className="text-lg text-gray-600">Very important</span>
// //           </label>
// //         </div>

// //         <div className="mt-6 flex justify-center">
// //           <button
// //             onClick={handleNextFactorQuestion}
// //             className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Render external questions
// //   const renderExternalQuestions = () => {
// //     const externalQuestion = externalQuestions[currentExternalQuestionIndex];
// //     return (
// //       <div className="question p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-8">
// //         <p className="text-xl font-semibold text-gray-700 mb-4">
// //           {externalQuestion.question}
// //         </p>

// //         <div className="space-y-4">
// //           {externalQuestion.options.map((option, i) => (
// //             <label
// //               key={i}
// //               className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100"
// //             >
// //               <input
// //                 type="radio"
// //                 name={`external-${currentExternalQuestionIndex}`}
// //                 value={option}
// //                 onChange={(e) =>
// //                   handleExternalChange(e, currentExternalQuestionIndex)
// //                 }
// //                 checked={
// //                   externalAnswers[currentExternalQuestionIndex] === option
// //                 }
// //                 className="form-radio h-5 w-5 text-blue-500"
// //               />
// //               <span className="text-lg text-gray-600">{option}</span>
// //             </label>
// //           ))}
// //         </div>

// //         <div className="mt-6 flex justify-center">
// //           <button
// //             onClick={handleNextExternalQuestion}
// //             className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Render career result
// //   const renderResult = (career) => {
// //     return (
// //       <div>
// //         Your predicted career is: <strong>{career}</strong>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="quiz-container">
// //       <h2>Career Prediction Quiz</h2>
// //       {quizStep === 1 && renderFactorQuestions()}
// //       {quizStep === 2 && renderExternalQuestions()}
// //       {quizStep === 3 && renderResult(calculateCareerScore())}
// //     </div>
// //   );
// // };

// // export default CareerPredictionQuiz;

// // import React, { useState } from "react";

// // const CareerPredictionQuiz = () => {
// //   // Factor weightage questions (6)
// //   const factorQuestions = [
// //     { question: "How important is job demand to you?", factor: "demand" },
// //     {
// //       question: "How important is stress level in your career?",
// //       factor: "stress",
// //     },
// //     { question: "How important is comfort at work?", factor: "comfort" },
// //     {
// //       question: "How important is scope of growth in your career?",
// //       factor: "scope",
// //     },
// //     {
// //       question: "How important are opportunities for advancement?",
// //       factor: "opportunity",
// //     },
// //     {
// //       question: "How important is the level of competition in your field?",
// //       factor: "competition",
// //     },
// //   ];

// //   // External preference questions
// //   const externalQuestions = [
// //     {
// //       question: "Which subject do you enjoy studying the most?",
// //       options: [
// //         "Mathematics",
// //         "Biology",
// //         "History",
// //         "English",
// //         "Business Studies",
// //       ],
// //     },
// //     {
// //       question: "What kind of activities do you find most engaging?",
// //       options: [
// //         "Solving complex math problems",
// //         "Doing science experiments",
// //         "Debating social and political issues",
// //         "Writing stories or creating art",
// //         "Planning business ventures",
// //       ],
// //     },
// //     {
// //       question: "Which of the following do you excel in academically?",
// //       options: [
// //         "Logical reasoning",
// //         "Understanding living organisms and life sciences",
// //         "Memorizing dates, events, and historical facts",
// //         "Writing essays and interpreting literature",
// //         "Understanding market trends and business principles",
// //       ],
// //     },
// //   ];

// //   // Career factors (with scores to be used for prediction)
// //   const careerFactors = {
// //     "Science and Engineering": {
// //       demand: 90,
// //       stress: 60,
// //       comfort: 70,
// //       scope: 85,
// //       opportunity: 80,
// //       competition: 65,
// //       score: 0,
// //     },
// //     "Biology and Health": {
// //       demand: 85,
// //       stress: 65,
// //       comfort: 75,
// //       scope: 80,
// //       opportunity: 70,
// //       competition: 70,
// //       score: 0,
// //     },
// //     "Humanities and Social Sciences": {
// //       demand: 70,
// //       stress: 70,
// //       comfort: 80,
// //       scope: 75,
// //       opportunity: 60,
// //       competition: 75,
// //       score: 0,
// //     },
// //     "Arts and Communication": {
// //       demand: 60,
// //       stress: 55,
// //       comfort: 85,
// //       scope: 70,
// //       opportunity: 65,
// //       competition: 80,
// //       score: 0,
// //     },
// //     "Business and Economics": {
// //       demand: 80,
// //       stress: 75,
// //       comfort: 70,
// //       scope: 90,
// //       opportunity: 75,
// //       competition: 85,
// //       score: 0,
// //     },
// //   };

// //   // State hooks
// //   const [userFactorAnswers, setUserFactorAnswers] = useState({});
// //   const [externalAnswers, setExternalAnswers] = useState([]);
// //   const [currentFactorQuestionIndex, setCurrentFactorQuestionIndex] =
// //     useState(0);
// //   const [currentExternalQuestionIndex, setCurrentExternalQuestionIndex] =
// //     useState(0);
// //   const [quizStep, setQuizStep] = useState(1); // 1: Factor questions, 2: External questions, 3: Result

// //   // Handle factor questions answers
// //   const handleFactorChange = (e, factor) => {
// //     setUserFactorAnswers({
// //       ...userFactorAnswers,
// //       [factor]: parseInt(e.target.value),
// //     });
// //   };

// //   // Handle external questions answers
// //   const handleExternalChange = (e, idx) => {
// //     const updatedAnswers = [...externalAnswers];
// //     updatedAnswers[idx] = e.target.value;
// //     setExternalAnswers(updatedAnswers);
// //   };

// //   // Handle next button click for factor questions
// //   const handleNextFactorQuestion = () => {
// //     if (currentFactorQuestionIndex < factorQuestions.length - 1) {
// //       setCurrentFactorQuestionIndex(currentFactorQuestionIndex + 1);
// //     } else {
// //       setQuizStep(2); // Move to external questions after factor questions
// //     }
// //   };

// //   // Handle next button click for external questions
// //   const handleNextExternalQuestion = () => {
// //     if (currentExternalQuestionIndex < externalQuestions.length - 1) {
// //       setCurrentExternalQuestionIndex(currentExternalQuestionIndex + 1);
// //     } else {
// //       handleSubmitQuiz(); // Submit the quiz if it's the last external question
// //     }
// //   };

// //   // Handle submit of quiz and predict career
// //   const handleSubmitQuiz = () => {
// //     if (externalAnswers.length === externalQuestions.length) {
// //       const predictedCareer = calculateCareerScore();
// //       setQuizStep(3); // Show result after calculation
// //     }
// //   };

// //   // Calculate career score based on factor answers and external answers
// //   const calculateCareerScore = () => {
// //     const weightages = userFactorAnswers;
// //     const externalScore = externalAnswers.reduce(
// //       (acc, answer) => {
// //         if (answer.includes("Mathematics")) acc[0] += 10; // Example: increase score for "Science and Engineering"
// //         if (answer.includes("Biology")) acc[1] += 10; // Example: increase score for "Biology and Health"
// //         if (answer.includes("History")) acc[2] += 10; // Example: increase score for "Humanities and Social Sciences"
// //         if (answer.includes("English")) acc[3] += 10; // Example: increase score for "Arts and Communication"
// //         if (answer.includes("Business Studies")) acc[4] += 10; // Example: increase score for "Business and Economics"
// //         return acc;
// //       },
// //       [0, 0, 0, 0, 0]
// //     );

// //     // Combine external score with factor weightages for each career
// //     Object.keys(careerFactors).forEach((career, index) => {
// //       let score = 0;
// //       Object.keys(careerFactors[career]).forEach((factor) => {
// //         if (factor !== "score") {
// //           score +=
// //             (careerFactors[career][factor] * (weightages[factor] || 1)) / 3; // Example weight logic
// //         }
// //       });
// //       // Add the external score to the career's total score
// //       score += externalScore[index];
// //       careerFactors[career].score = score;
// //     });

// //     // Return the career with the highest score
// //     return Object.keys(careerFactors).reduce((bestCareer, career) => {
// //       return careerFactors[career].score > careerFactors[bestCareer].score
// //         ? career
// //         : bestCareer;
// //     });
// //   };

// //   // Render factor questions
// //   const renderFactorQuestions = () => {
// //     const factorQuestion = factorQuestions[currentFactorQuestionIndex];
// //     return (
// //       <div className="question p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-8">
// //         <p className="text-xl font-semibold text-gray-700 mb-4">
// //           {factorQuestion.question}
// //         </p>

// //         <div className="space-y-4">
// //           <label className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
// //             <input
// //               type="radio"
// //               name={factorQuestion.factor}
// //               value="1"
// //               onChange={(e) => handleFactorChange(e, factorQuestion.factor)}
// //               checked={userFactorAnswers[factorQuestion.factor] === 1}
// //               className="form-radio h-5 w-5 text-blue-500"
// //             />
// //             <span className="text-lg text-gray-600">Not important</span>
// //           </label>

// //           <label className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
// //             <input
// //               type="radio"
// //               name={factorQuestion.factor}
// //               value="2"
// //               onChange={(e) => handleFactorChange(e, factorQuestion.factor)}
// //               checked={userFactorAnswers[factorQuestion.factor] === 2}
// //               className="form-radio h-5 w-5 text-blue-500"
// //             />
// //             <span className="text-lg text-gray-600">Somewhat important</span>
// //           </label>

// //           <label className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100">
// //             <input
// //               type="radio"
// //               name={factorQuestion.factor}
// //               value="3"
// //               onChange={(e) => handleFactorChange(e, factorQuestion.factor)}
// //               checked={userFactorAnswers[factorQuestion.factor] === 3}
// //               className="form-radio h-5 w-5 text-blue-500"
// //             />
// //             <span className="text-lg text-gray-600">Very important</span>
// //           </label>
// //         </div>

// //         <div className="mt-6 flex justify-center">
// //           <button
// //             onClick={handleNextFactorQuestion}
// //             className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Render external questions
// //   const renderExternalQuestions = () => {
// //     const externalQuestion = externalQuestions[currentExternalQuestionIndex];
// //     return (
// //       <div className="question p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-8">
// //         <p className="text-xl font-semibold text-gray-700 mb-4">
// //           {externalQuestion.question}
// //         </p>

// //         <div className="space-y-4">
// //           {externalQuestion.options.map((option, idx) => (
// //             <label
// //               key={idx}
// //               className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100"
// //             >
// //               <input
// //                 type="radio"
// //                 value={option}
// //                 onChange={(e) => handleExternalChange(e, currentExternalQuestionIndex)}
// //                 checked={externalAnswers[currentExternalQuestionIndex] === option}
// //                 className="form-radio h-5 w-5 text-blue-500"
// //               />
// //               <span className="text-lg text-gray-600">{option}</span>
// //             </label>
// //           ))}
// //         </div>

// //         <div className="mt-6 flex justify-center">
// //           <button
// //             onClick={handleNextExternalQuestion}
// //             className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Render result after quiz submission
// //   const renderResult = () => {
// //     const predictedCareer = calculateCareerScore();
// //     return (
// //       <div className="result p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-8">
// //         <p className="text-xl font-semibold text-gray-700 mb-4">
// //           Your predicted career is:{" "}
// //           <span className="text-2xl font-bold text-blue-600">{predictedCareer}</span>
// //         </p>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="quiz-container">
// //       <h1 className="text-3xl font-semibold text-center my-8">
// //         Career Prediction Quiz
// //       </h1>

// //       {quizStep === 1 && renderFactorQuestions()}
// //       {quizStep === 2 && renderExternalQuestions()}
// //       {quizStep === 3 && renderResult()}
// //     </div>
// //   );
// // };

// // export default CareerPredictionQuiz;

import React, { useState } from "react";
import AskQuestions from "./AskQuestions";
const CareerQuiz = () => {
  const questions = [
    {
      question: "Which subject do you enjoy studying the most?",
      options: [
        "Mathematics",
        "Biology",
        "History",
        "English",
        "Business Studies",
      ],
      relatedCareers: [0, 1, 2, 3, 4],
    },
    {
      question: "What kind of activities do you find most engaging?",
      options: [
        "Solving complex math problems",
        "Doing science experiments",
        "Debating social and political issues",
        "Writing stories or creating art",
        "Planning business ventures",
      ],
      relatedCareers: [0, 1, 2, 3, 4],
    },
    {
      question: "Which of the following do you excel in academically?",
      options: [
        "Logical reasoning",
        "Understanding living organisms and life sciences",
        "Memorizing dates, events, and historical facts",
        "Writing essays and interpreting literature",
        "Understanding market trends and business principles",
      ],
      relatedCareers: [0, 1, 2, 3, 4],
    },
    {
      question: "How do you prefer to spend your free time?",
      options: [
        "Solving puzzles or playing brain games",
        "Watching science documentaries",
        "Reading about historical events",
        "Writing poetry or designing graphics",
        "Reading business news or economic reports",
      ],
      relatedCareers: [0, 1, 2, 3, 4],
    },
    {
      question:
        "Which of these subjects do you think will help you in the future?",
      options: [
        "Advanced mathematics",
        "Medicine and health science",
        "Political science or law",
        "Creative writing or mass communication",
        "Economics or entrepreneurship",
      ],
      relatedCareers: [0, 1, 2, 3, 4],
    },
  ];

  const careerFactors = {
    "CS,physics,Chemistry,Mathematics": {
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
  const [category, setCategory] = useState("");

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
    <div className="quiz-container" style={styles.quizContainer}>
      {result ? (
        <>
          {" "}
          <div
            id="result"
            className="bg-white p-6 my-8 rounded-lg shadow-md mt-6"
          >
            <strong className="text-xl font-semibold text-gray-800">
              Recommended Careers:
            </strong>
            <div className="mt-4 text-gray-700">
              <p>
                1.{" "}
                <span className="font-semibold text-blue-500">
                  {result[0].careerName}
                </span>{" "}
                (Score:{" "}
                <span className="font-bold text-green-500">
                  {result[0].modifiedScore}
                </span>
                )
              </p>
              <p>
                2.{" "}
                <span className="font-semibold text-blue-500">
                  {result[1].careerName}
                </span>{" "}
                (Score:{" "}
                <span className="font-bold text-green-500">
                  {result[1].modifiedScore}
                </span>
                )
              </p>
            </div>
          </div>
          {result ? <AskQuestions category={result[0].careerName} /> : "ASD"}
        </>
      ) : (
        <>
          <div id="question" style={styles.question}>
            {questions[currentQuestion].question}
          </div>
          <ul id="options" style={styles.options}>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} style={styles.option}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    checked={answers[currentQuestion] === index}
                    onChange={() => handleOptionSelect(index)}
                    style={styles.radio}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <div style={styles.buttonGroup}>
            <button
              onClick={handlePrev}
              style={{ ...styles.button, ...styles.prevButton }}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            {currentQuestion < questions.length - 1 ? (
              <button onClick={handleNext} style={styles.button}>
                Next
              </button>
            ) : (
              <button onClick={handleSubmit} style={styles.button}>
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
