//  Game
//   ->Board
//      ->Square
//   ->History

import { useState } from "react";
export default function Game() {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, SetXIsNext] = useState(true);

  // const [currentMove, setCurrentMove] = useState(0);

  // const currentSquares = history[currentMove];
  const currentSquares = history[history.length - 1];
  function handlePlay(nextSquares) {
    // SetXIsNext(!xIsNext);
    // const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // setHistory(nextHistory);
    // setCurrentMove(nextHistory.length - 1);
    SetXIsNext(!xIsNext)
    setHistory(...history,nextSquares)
  }
  return (
    <div className="">
      <div className="">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        ></Board>
      </div>
      <div className="">
        <ol></ol>
      </div>
    </div>
  );
}

function Board({xIsNext,squares,onPlay}) {
  //  const [squares, setSquares] = useState(Array(9).fill(null));

  //  const [xIsNext, SetXisNext] = useState(true);

  const winner = calculateWinner(squares);
 

  let status;
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

   onPlay(nextSquare)
  }
  return (
    <>
      <div className="">{status}</div>
      <div className="flex">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        ></Square>
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        ></Square>
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        ></Square>
      </div>
      <div className="flex">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        ></Square>
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        ></Square>
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        ></Square>
      </div>
      <div className="flex">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        ></Square>
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        ></Square>
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        ></Square>
      </div>
    </>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className=" bg-white border border-gray-500 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

function calculateWinner(squares) {
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
  return null;
}
