import React from "react";
import GameTile from "./GameTile.js";

function GameBoard(props) {
  let row = [];
  for (let i = 0; i < props.board.length; i++) {
    row.push(
      <GameTile
        key={i}
        tile={props.board[i]}
        onclick={() => props.onclick(props.board[i], i)}
        display={props.display[i]}
      />
    );
  }
  
  return (
    <div className="board">
      <div className="d-flex m-auto">
      {row.slice(0,4)}
      </div>
      <div className="d-flex m-auto">
      {row.slice(4,8)}
      </div>
      <div className="d-flex m-auto">
      {row.slice(8,12)}
      </div>
      <div className="d-flex m-auto">
      {row.slice(12,16)}
      </div>
    </div>
  );
}

export default GameBoard;

