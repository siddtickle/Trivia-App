import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/button";

import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  // const [buttonColor, setButtonColor] = useState("");
  // setButtonColor("primary");

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

    answerChoices.push(question.correct_answer);
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
    <div style={{ textAlign: "center" }}>
      {questions.map((question) => (
        // each question starts here. (question is a question with all properties)
        <div>
          <h4>{question.question}</h4>
          <h4>{question.correct_answer}</h4>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {shuffle(storeChoices(question)).map((choice) => (
              // each of the shuffled choices are chosen to be created into a button
              // shuffle(storeChoices(question)) is the answer choices for ONE question
              <div style={{ paddingBottom: 10 }}>
                <Button
                  // color={typeof choice === "object" ? "primary" : "secondary"}
                  // color="primary"
                  disableElevation
                  variant="contained"
                  onClick={() => {
                    if (choice === question.correct_answer) {
                      console.log("correct");
                      console.log(questions);
                      console.log(storeChoices(questions[0]));
                      // setButtonColor("primary"); // <- sets all butttons to primary once clicked
                      // If button is the correct answer choice
                      // disable all choices to the question
                      // mark the correct answer
                    }
                  }}
                >
                  {choice}
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
