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
  return <div className="row h-100 justify-content-center align-items-center">{row}</div>;
}

export default GameBoard;
