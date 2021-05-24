import React, { useState } from "react";
import { create } from "../../services/questions";
import "./FormQuestion.css";

const FormQuestion = ({ callback }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === "") {
      return;
    }
    create(question).then((newQuestion) => {
      callback(newQuestion);
    });
    setQuestion("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuestion(e.target.value);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          name="question"
          value={question}
          placeholder="Hace una pregunta!"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormQuestion;
