import React from "react";
import "./Question.css";
import dayjs from "dayjs";

const Question = ({ body, date, response }) => {
  return (
    <div className="questionContainer">
      <div className="question">
        <div className="questionName">
          Anonimo -{" "}
          <span>
            {dayjs(date).format("DD-MM-YYYY HH:mm")}
          </span>
        </div>

        <div className="bodyQuestion">{body}</div>
        <div className="responseQuestion">{response}</div>
      </div>
    </div>
  );
};

export default Question;
