import { React, useState, useEffect } from 'react';

import Card from '../../components/Card';
import socket from '../../services/socket';

import './styles.css';

function Deck () {
  const [ cards, setCards ] = useState([
    { value: '0', active: 0 },
    { value: '1', active: 0 },
    { value: '2', active: 0 },
    { value: '3', active: 0 },
    { value: '5', active: 0 },
    { value: '8', active: 0 },
    { value: '13', active: 0 },
    { value: '21', active: 0 },
    { value: '34', active: 0 },
    { value: '55', active: 0 },
    { value: '89', active: 0 },
    { value: '?', active: 0 }
  ]);
  const select = value => {
    socket.emit('select-card', value);

    setCards(cards.map(card => {
      card.active = card.value === value;
      return card;
    }));
  };

  useEffect(() => {
    socket.on('reset-game', () => {
      setCards(cards.map(card => {
        card.active = 0;
        return card;
      }));
    })
  }, ['cards']);

  return (
    <div className="Deck">
      {cards.map(card =>
        <Card key={card.value} value={card.value} active={card.active} onActivate={select} />
      )}
    </div>
  );
}

export default Deck;
