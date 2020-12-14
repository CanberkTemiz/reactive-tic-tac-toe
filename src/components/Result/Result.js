import "./Result.css";
import React from "react";
import { func, string } from "prop-types";

const Result = ({ onClick, winner }) => {
  let result = "";

  switch (winner) {
    case "X":
      result = "You Won";
      break;
    case "O":
      result = "Computer Won";
      break;
    case "-":
      result = "Draw Game";
      break;
    default:
      break;
  }

  const renderedItems = (
    <>
      <h1>{result}</h1>
      <button onClick={onClick}>Start Over</button>
    </>
  );

  return (
    <div className={`game-result ${winner ? "is-opened" : ""}`}>
      {renderedItems}
    </div>
  );
};

Result.defaultProps = {
  onClick: (f) => f,
  winner: "",
};

Result.propTypes = {
  onClick: func,
  winner: string,
};

export default Result;
