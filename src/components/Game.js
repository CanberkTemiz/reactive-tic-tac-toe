import React, { useEffect, useState } from "react";
import { calculateWinner, findRandomEmptyCell } from "../helpers";
import Board from "./Board/Board";
import Result from "../components/Result";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isClicked, setIsClicked] = useState(false);
  const [winner, setWinner] = useState("");

  const generateComputerClick = () => {
    setTimeout(() => {
      setIsClicked(false);
      const randomIndex = findRandomEmptyCell(board);

      const tempBoard = [...board];
      tempBoard[randomIndex] = "O";

      setBoard(tempBoard);
    }, 1000);
  };

  const handleClick = (index) => {
    const tempBoard = [...board];

    if (tempBoard[index] || winner) {
      return;
    }

    setIsClicked(true);
    tempBoard[index] = "X";
    setBoard(tempBoard);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner("");
    setIsClicked(false);
  };

  useEffect(() => {
    const result = calculateWinner(board);

    if (result === null && isClicked) {
      return generateComputerClick();
    }

    setWinner(result);
  }, [board]);

  return (
    <div className="game">
      <Board
        winner={winner}
        squares={board}
        onClick={handleClick}
        isClicked={isClicked}
      />
      <Result winner={winner} onClick={handleResetGame} />
    </div>
  );
};

export default Game;
