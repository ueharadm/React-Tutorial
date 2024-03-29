import { useState } from "react";
import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";

export default function Board({ xIsNext, squares, onPlay }) {
    const [isOver, setIsOver] = useState(false);
    const [winnerSquares, setWinnerSquares] = useState(Array(9).fill(false));

    function handleClick(i){
        if(squares[i] || winner) return;
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let nextPlayer = xIsNext ? "X" : "O";
    let status = winner ? ("Winner: "+ winner.player) : ("Next Player: " + nextPlayer);
    if (!isOver && winner){
        let winnerCopy = winnerSquares.slice();
        winner.line.forEach(index => {
            winnerCopy[index] = true;
        })
        alert(winnerCopy)
        setWinnerSquares(winnerCopy);
        setIsOver(true);
    }
  
    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            winner={winnerSquares[0]}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            winner={winnerSquares[1]}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            winner={winnerSquares[2]}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            winner={winnerSquares[3]}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            winner={winnerSquares[4]}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            winner={winnerSquares[5]}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            winner={winnerSquares[6]}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            winner={winnerSquares[7]}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            winner={winnerSquares[8]}
          />
        </div>
      </>
    );
  }