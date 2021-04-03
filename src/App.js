import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/button";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res);
        setQuestions(res.results);
      });
  }, []);

  const storeChoices = (question) => {
    let answerChoices = [];

    answerChoices.push(new Array(question.correct_answer));
    for (var j = 0; j < question.incorrect_answers.length; j++) {
      answerChoices.push(question.incorrect_answers[j]);
    }
    //console.log(answerChoices);
    return answerChoices;
  };

  //Credit for shuffle(): https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return (
    <div>
      {questions.map((question) => (
        <div>
          <h4>{question.question}</h4>
          {shuffle(storeChoices(question)).map((choice) => (
            <div>
              <Button>{choice}</Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
