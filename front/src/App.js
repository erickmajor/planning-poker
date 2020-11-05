import React, { useEffect, useState } from 'react';

import Deck from './components/Deck';
import Players from './components/Players';
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
      <Game players={players} />
      <Players players={players} />
      <Deck/>
    </div>
  );
}

export default App;
