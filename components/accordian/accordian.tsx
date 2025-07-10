"use client";

import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [answer, setAnswer] = useState(1);
  const handleClick = (id: number) => {
    setAnswer(id);
  };
  return (
    <div>
      {data.map((question) => (
        <div key={question.id}>
          <li onClick={() => handleClick(question.id)}>{question.question}</li>
          {answer === question.id && <div>{question.answer}</div>}
        </div>
      ))}
    </div>
  );
}
