import React from "react";
import "./card.css";

const Card = ({ number, suite }) => {
  return (
    <div
      className={`${
        suite === "♥️" || suite === "♦️" ? "text-danger" : ""
      } card d-flex flex-row justify-content-between border rounded p-2 m-4`}
    >
      <div>{number}</div>
      <div>{suite}</div>
    </div>
  );
};

export default Card;
