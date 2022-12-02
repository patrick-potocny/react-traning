import React from "react";

function GameBoard(props) {
  return (
    <div className="gameboard">
      {
      props.imgLinks.map((image, index) => (
        <img key={index} src={image} alt="card" onClick={props.handleClick}></img>
      ))
      }
    </div>
  );
}

export default GameBoard;
