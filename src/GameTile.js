import React from "react";

function GameTile(props) {
  return (
    <div
      className="border rounded bg-info tile"
      onClick={() => props.onclick()}
    >
      {props.display ? <img src={props.tile} className="img-thumbnail img-tile" alt="" /> : ""}
    </div>
  );
}

export default GameTile;
