export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  const drawCheck = squares.every((item) => item !== null);

  return drawCheck ? "-" : null;
  // return null;
}

export const findRandomEmptyCell = (board) => {
  // const check = board.every((item) => item !== null);

  // if (check) return;
  // if (check) {
  //   return "draw";
  // }
  let condition = true;

  while (condition) {
    const number = Math.floor(Math.random() * 10);

    if (board[number] === null) {
      condition = false;
      return number;
    }
  }
};
