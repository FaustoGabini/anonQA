import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import FormQuestion from "./components/FormQuestion";
import Question from "./components/Question";
import { getAll } from "./services/questions";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getAll().then((questions) => {
      setQuestions(questions);
    });
  }, []);

  const handleCallback = (newQuestion) => {
    setQuestions([newQuestion, ...questions]);
  };

  return (
    <>
      <Header />
      <FormQuestion callback={handleCallback} />

      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            id={question.id}
            body={question.body}
            date={question.date}
            response={question.response}
          />
        );
      })}
    </>
  );
}

export default App;
