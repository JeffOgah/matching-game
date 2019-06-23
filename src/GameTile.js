import React from "react";

function GameTile(props) {
  return (
    <div
      className={`m-1 border rounded ${props.display === "invisible"? "bg-dark" : "bg-info"} tile`}
      onClick={() => props.onclick()}
    >
      <img src={props.tile} className={`img-thumbnail img-tile ${props.display}`} alt=""/>
    </div>
  );
}

export default GameTile;
