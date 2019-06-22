import React from "react";
import GameTile from "./GameTile.js";
import camera from "./images/photo-camera.png";

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
    <div className="row h-100">
      {row}
      <img src={camera} className="img-thumbnail" alt="camera"/>
    </div>
  );
}

export default GameBoard;
