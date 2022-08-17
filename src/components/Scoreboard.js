import React from 'react';

function Scoreboard({ score, highScore }) {
  return (
    <div className="score">
      <div class="lines"></div>
      <h2 className="highscore">
        <span>High Score:{highScore}</span>
      </h2>
      <h3 className="currentscore">
        <span>Current Score:{score}</span>
      </h3>
    </div>
  );
}

export default Scoreboard;
