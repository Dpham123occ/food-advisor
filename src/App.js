import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: "What kind of mood are you in?",
    options: [
      "Cozy",
      "Adventurous",
      "Satisfied",
      "Curious",
      "Playful",
      "Indulgent",
    ],
  },
  {
    question: "What do you want to feel after your meal?",
    options: ["Full", "Refreshed", "Warm", "Satisfied", "Energized", "Content"],
  },
  {
    question: "how broke are you?",
    options: [
      "got 1 buck",
      "10-15, no more",
      "bOUGIE af",
      "cheap af",
      "mid mid mid",
      "normal. just normal",
    ],
  },
  {
    question: "now, what aligns with your imagination",
    options: [
      "frolicking around grassy plains in the middle of nowhere",
      "in my penthouse about to host a singles-only party",
      "culture shocked",
      "by the waterfalls while it thunderstorms",
      "bathing in the sunlight about to take the biggest nap ever",
      "at the beach about to take those polaroids",
    ],
  },
  {
    question: "what time of day?",
    options: [
      "too early for this shi-",
      "meh, lunch, hungry but not hungry",
      "snackity snacking",
      "go heavy or go home",
      "midnight feasting",
      "dinner. good dinner, no stress",
    ],
  },
  {
    question: "atmosphere?",
    options: [
      "Let’s keep it laid-back and chill",
      "I love sharing and bonding over food!",
      "Let’s indulge in a luxury",
      "Fresh air and good food, yes please",
      "midnight feasting",
      "dinner. good dinner, no stress",
    ],
  },
];

const results = {
  "Cozy, Full, Comfort mac and cheese, Too early for this shi-, Let’s keep it laid-back and chill":
    "American Comfort Food",
  "Adventurous, Energized, Flavor central, Midnight feasting, Go heavy or go home":
    "Fusion Cuisine",
  "Satisfied, Warm, Warm soup and noodles, Dinner. Good dinner, no stress, Fresh air and good food, yes please":
    "Asian Noodle Dish",
  "Curious, Content, Can you add more cheese?, Meh, lunch, hungry but not hungry, Let’s indulge in a luxury":
    "Italian Pasta",
  "bOUGIE af, Full, In my penthouse about to host a singles-only party, Midnight feasting, Family-style Fine Dining":
    "Gourmet Dishes",
  "Got 1 buck, Cheap af, Snackity snacking, Midnight feasting, Fast Food":
    "Fast Food",
  "10-15, no more, Mid mid mid, Dinner. Good dinner, no stress, Casual Dining":
    "Casual Dining",
  "Too early for this shi-, Cozy, Let’s keep it laid-back and chill, Light Brunch":
    "Breakfast Brunch",
  "Go heavy or go home, Carnivorous steak, Midnight feasting, Steakhouse Meal":
    "Steakhouse Meal",
  "Bathing in the sunlight about to take the biggest nap ever, Dinner. Good dinner, no stress, Relaxed Summer Dinner":
    "Relaxed Summer Dinner",
  "Frolicking around grassy plains in the middle of nowhere, Casual Dining":
    "Picnic Food",
  "Culture shocked, At the beach about to take those Polaroids, Mexican Street Food":
    "Global Street Food",
  "Satisfied, Warm, Indian Butter Chicken, Go heavy or go home, Full, Rich Indian Comfort Food":
    "Indian Butter Chicken",
};

function Question({ question, options, onSelect }) {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option) => (
        <button key={option} onClick={() => onSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const selectAnswer = (option) => {
    setAnswers([...answers, option]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      showResult();
    }
  };

  const showResult = () => {
    const key = answers.join(", ");
    const result = results[key] || "a mix of flavors!";
    document.getElementById("result").innerText = `You are feeling like: ${result}`;
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onSelect={selectAnswer}
        />
      ) : (
        <div id="result"></div>
      )}
      <button id="nextButton" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
        Next
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>What Type of Food Are You Feeling?</h1>
        <Quiz />
        <div id="result" className="result"></div>
      </div>
    </div>
  );
}

export default App;
