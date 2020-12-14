import "./Square.css";
import React from "react";
import { bool, string, func } from "prop-types";

const Square = ({ isClicked, value, onClick }) => {
  return (
    <div className="game-board-square">
      <button disabled={isClicked ? "disabed" : ""} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

Square.defaultProps = {
  isClicked: "false",
  value: "",
  onClick: (f) => f,
};

Square.propTypes = {
  isClicked: bool,
  value: string,
  onClick: func,
};

export default Square;
