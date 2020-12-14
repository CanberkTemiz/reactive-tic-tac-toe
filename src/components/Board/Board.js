import "./Board.css";
import React from "react";
import { array, func, string } from "prop-types";
import Square from "../Square/Square";

const Board = ({ isClicked, winner, squares, onClick }) => {
  const renderedItems = squares.map((square, index) => {
    return (
      <Square
        isClicked={isClicked}
        value={square}
        onClick={() => onClick(index)}
        key={index}
      />
    );
  });

  return (
    <div className={`game-board${winner ? " has-winner" : ""}`}>
      {renderedItems}
    </div>
  );
};

Board.defaultProps = {
  winner: "",
  squares: [],
  onClick: (f) => f,
};

Board.propTypes = {
  winner: string,
  squares: array,
  onClick: func,
};

export default Board;
