import React, { useState } from "react";
import Button from "@material-ui/core/button";

function Question({ question }) {
  //   console.log(question);

  const [answered, setAnswered] = useState(false);

  const [result, setResult] = useState("");

  const storeChoices = (question) => {
    let answerChoices = [];

    answerChoices.push(question.correct_answer);
    for (var j = 0; j < question.incorrect_answers.length; j++) {
      answerChoices.push(question.incorrect_answers[j]);
    }
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
      <h4>{question.question}</h4>
      <h4>{result}</h4>
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
              color="primary"
              disabled={answered}
              disableElevation
              variant="contained"
              onClick={() => {
                setAnswered(true);
                if (choice === question.correct_answer) {
                  setResult("✅");
                  console.log("correct");
                } else {
                  setResult("🟥");
                }
              }}
            >
              {choice}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
