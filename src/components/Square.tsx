import React from "react";

export default function Square({value, onSquareClick, winner}) {
    let className = winner ? "square win-square" : "square"
    return <button className={className} onClick={onSquareClick}> {value} </button>;
  }