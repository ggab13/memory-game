import React from 'react';
import Card from './Card';
import data from './data.json';
import Scoreboard from './Scoreboard';

function MemoryGame() {
  const [cards, setCards] = React.useState(data);
  const [score, setScore] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);

  const cardClicked = (id) => {
    const newCards = [...cards];
    newCards.find((element) => {
      if (element.id === id) {
        if (element.clicked == false) {
          const newScore = score + 1;
          setScore(newScore);
          element.clicked = true;
          if (newScore > highScore) {
            setHighScore(newScore);
          }
        } else {
          const newScore = 0;
          setScore(newScore);
          if (score > highScore) {
            setHighScore(highScore);
          }
          const newCards = [...cards];
          newCards.map((item) => {
            item.clicked = false;
          });
          setCards(newCards);
          return;
        }
      }
    });
    newCards.unshift(newCards.pop());
    newCards.unshift(newCards.pop());
    newCards.unshift(newCards.pop());

    setCards(newCards);
  };

  return (
    <div className="memory-game">
      <div className="scoreboard">
        <Scoreboard score={score} highScore={highScore} />
      </div>
      <div className="card-grid">
        {console.log(cards)}
        {cards.map((item) => {
          return (
            <div className="card-grid--item">
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                src={process.env.PUBLIC_URL + item.src}
                clicked={item.clicked}
                cardClicked={cardClicked}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemoryGame;
