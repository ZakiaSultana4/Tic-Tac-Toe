import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "./utils/calculateWinner";
import logo from "./assets/logo.png";
import c from "./assets/cross.png";
import c2 from "./assets/circle.png";
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
let cross=c
let circle=c2


  let status;
  const winner = calculateWinner(squares);
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = "Next Player:" + (xIsNext ? "X" : "O");
  }
  const handleSquareClick = (i) => {
    const nextSquare = squares.slice();

    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    setSquares(nextSquare);
    setXisNext(!xIsNext);
  };
  const handleReset = () => {
    setSquares(" ");
  };
  return (
    <div className=" pt-2  ">
      <div className="pr-[200px] ml-[400px]">
        <img src={logo} className="" />
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div className=" flex gap-5 mb-3">
          <p
            className={` font-semibold text-xl ${
              winner ? "text-green-500 " : "text-white"
            }`}
          >
            {status}
          </p>
          {winner && (
            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-4 rounded-md"
            >
              Reset
            </button>
          )}
        </div>
        <div className="flex">
          <Square
            value={squares[0]}
            onSquareClick={() => handleSquareClick(0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleSquareClick(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleSquareClick(2)}
          />
        </div>
        <div className="flex">
          <Square
            value={squares[3]}
            onSquareClick={() => handleSquareClick(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleSquareClick(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleSquareClick(5)}
          />
        </div>
        <div className="flex">
          <Square
            value={squares[6]}
            onSquareClick={() => handleSquareClick(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleSquareClick(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleSquareClick(8)}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
