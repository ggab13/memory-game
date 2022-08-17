import React, { useEffect } from 'react';
import logo from '../logo.svg';

function Card(props) {
  const [card, setCard] = React.useState({
    id: props.id,
    name: props.name,
    src: props.src,
    clicked: props.clicked,
    // Boolean csak úgy látszódik ha  + '' és egy üres stringet teszek mögé, anélkül nem írja ki ? Miért?
    //  Hogy rendereli le mikor updatelem a parenből újra? Console.log-al látom a módosítást DOM-ban nem :()
    // Ilyenkor amikor a parentben használom ezeket a componenseket, effektív ezek duplikálva vannak van egy ami különállóan él a parnetcomponentben lévőtől? Ezért nem frissíti a domban?
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
