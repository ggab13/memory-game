import React, { useEffect } from 'react';
import logo from '../logo.svg';

function Card(props) {
  const [card, setCard] = React.useState({
    id: props.id,
    name: props.name,
    src: props.src,
    clicked: props.clicked,    
  });

  React.useEffect(() => {
    const newCard = { ...card, clicked: props.clicked };
    // Update local value when identity someProp changes (identity).
    setCard(newCard);
    // card - ra nézem a callbacket akkor infinit loopba fut, propsra viszont mukodik?
  }, [props]);
  return (
    <div className="card" onClick={() => props.cardClicked(card.id)}>
      <img src={card.src} />
      <p className="card--name">{card.name}</p>
      {/*<p className="card--clicked">{card.clicked ? 'True' : 'False'}</p>*/}
    </div>
  );
}

export default Card;
