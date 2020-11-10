import React, { useEffect, useState } from 'react';

import Score from './components/Score';
import Deck from './components/Deck';
import Game from './components/Game';
import socket from './services/socket';

import './styles.css';

function App() {

  const [ players, setPlayers ] = useState([]);

  useEffect(() => {
    socket.on("players-update", data => {
      setPlayers(data.players);
    });
  }, []);

  return (
    <div className="App">
      <Score />
      <Game players={players} />
      <Deck/>
    </div>
  );
}

export default App;
