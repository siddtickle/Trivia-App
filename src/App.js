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
        <h1>{question.question}</h1>
      ))}
    </div>
  );
}

export default App;
