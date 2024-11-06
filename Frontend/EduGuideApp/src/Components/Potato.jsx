import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

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
  },
];

const careerFactors = {
  "Science and Engineering": {
    demand: 90,
    stress: 60,
    comfort: 70,
    scope: 85,
    opportunity: 80,
    competition: 65,
  },
  "Biology and Health": {
    demand: 85,
    stress: 65,
    comfort: 75,
    scope: 80,
    opportunity: 70,
    competition: 70,
  },
  "Humanities and Social Sciences": {
    demand: 70,
    stress: 70,
    comfort: 80,
    scope: 75,
    opportunity: 60,
    competition: 75,
  },
  "Arts and Communication": {
    demand: 60,
    stress: 55,
    comfort: 85,
    scope: 70,
    opportunity: 65,
    competition: 80,
  },
  "Business and Economics": {
    demand: 80,
    stress: 75,
    comfort: 70,
    scope: 90,
    opportunity: 75,
    competition: 85,
  },
};

const Potato = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (currentQuestion === questions.length) {
      handleSubmit();
    }
  }, [currentQuestion]);

  const handleOptionChange = (event, index) => {
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

  const handleSubmit = async () => {
    const model = await trainModel();
    const recommendedCareer = await recommendCareer(model);

    setResult(recommendedCareer);
  };

  const trainModel = async () => {
    const model = tf.sequential();
    model.add(
      tf.layers.dense({
        units: 5,
        activation: "relu",
        inputShape: [questions.length],
      })
    );
    model.add(tf.layers.dense({ units: 5, activation: "softmax" }));
    model.compile({ loss: "categoricalCrossentropy", optimizer: "adam" });

    const trainingData = tf.tensor2d([
      [1, 0, 0, 0, 0], // Science and Engineering
      [0, 1, 0, 0, 0], // Biology and Health
      [0, 0, 1, 0, 0], // Humanities and Social Sciences
      [0, 0, 0, 1, 0], // Arts and Communication
      [0, 0, 0, 0, 1], // Business and Economics
    ]);

    const outputData = trainingData;

    await model.fit(trainingData, outputData, { epochs: 50 });
    return model;
  };

  const recommendCareer = async (model) => {
    const inputTensor = tf.tensor2d([
      answers.map((answer) => (answer !== null ? 1 : 0)),
    ]);
    const prediction = model.predict(inputTensor);
    const predictedIndex = prediction.argMax(1).dataSync()[0];

    const careers = Object.keys(careerFactors);
    return careers[predictedIndex];
  };

  const renderOptions = () => {
    return questions[currentQuestion].options.map((option, index) => (
      <div key={index}>
        <input
          type="radio"
          id={`option-${index}`}
          name="option"
          value={index}
          checked={answers[currentQuestion] === index}
          onChange={(e) => handleOptionChange(e, index)}
        />
        <label htmlFor={`option-${index}`}>{option}</label>
      </div>
    ));
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          padding: "20px",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{ fontWeight: "bold", marginBottom: "15px", fontSize: "18px" }}
        >
          {questions[currentQuestion].question}
        </div>
        <div>{renderOptions()}</div>

        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              padding: "10px",
              margin: "5px",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handlePrev}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button
              style={{
                padding: "10px",
                margin: "5px",
                backgroundColor: "#28a745",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              style={{
                padding: "10px",
                margin: "5px",
                backgroundColor: "#dc3545",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>

        {result && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#e9ecef",
            }}
          >
            <strong>Recommended Career: </strong>
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Potato;
