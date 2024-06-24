import React from "react";

const Square = ({value,onSquareClick}) => {
  
  return (
    <button
     onClick={onSquareClick}
      className=" bg-white border border-gray-500 h-12 w-12 m-1 leading-9 text-2xl font-semibold"
    >
     {value}
    </button>
  );
};

export default Square;
