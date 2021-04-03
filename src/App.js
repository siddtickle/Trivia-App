import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setQuestions(res.results);
      });
  }, []);

  return (
    <div>
      {questions.map((question) => (
        <div>
          <h1>{question.question}</h1>
          <h2>{question.correct_answer}</h2>
          {question.incorrect_answers.map((incorrectAnswer) => (
            <h2>{incorrectAnswer}</h2>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
