import React from "react";
import GameTile from "./GameTile.js";

function GameBoard(props) {
  let row = [];
  for (let i = 0; i < props.board.length; i++) {
    row.push(
      <GameTile
        key={i}
        tile={props.board[i]}
        onclick={() => props.onclick(props.board[i])}
        display={props.display}
      />
    );
  }
  return <div className="row">{row}</div>;
}

export default GameBoard;
