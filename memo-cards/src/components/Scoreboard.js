import React from 'react';

function Scoreboard(props) {
  

  return (
    <div className='scoreBoard'>
      <div className="cScore">Current Score: {props.cScore}</div>
      <div className="bScore">Best Score: {props.bScore}</div>
    </div>
  );
}

export default Scoreboard;  