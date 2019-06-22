import React from "react";

function GameTile(props) {
  return (
    <div
      className="col-3 border rounded bg-info"
      onClick={() => props.onclick()}
    >
      {props.display ? props.tile : ""}
    </div>
  );
}

export default GameTile;
