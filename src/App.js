import React, { useState, useEffect } from "react";
import Question from "./components/Question";

import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res.results);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {questions.map((question) => (
        // each question starts here. (question is a question with all properties)
        <Question question={question}></Question>
      ))}
    </div>
  );
}

export default App;
