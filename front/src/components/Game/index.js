import React, { useEffect, useState } from 'react';
import socket from '../../services/socket';

import './styles.css';

function Game(props) {

  const [ name, setName ] = useState('');
  const [ state, setState ] = useState('init');

  const resetGame = e => {
    socket.emit('reset-game');
    setState('playing');
    e.preventDefault();
  }

  const submitName = e => {
    if (name !== '') {
      socket.emit('set-name', name);
      setState('playing');
    }
    e.preventDefault();
  }

  if (state === 'playing' && name === '') {
    setState('init');
  }
  if (state === 'playing' && !props.players.filter(player => player.value < 0 ).length) {
    setState('done');
  }

  useEffect(() => {
    socket.on('reset-game', () => {
      setState('playing');
    })
  }, []);

  const screens = {
    'init':
      <form onSubmit={submitName}>
        <p>Enter your name</p>
        <input value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={submitName}>Go</button>
      </form>,
    'done':
      <form>
        <p>Game done!</p>
        <button onClick={resetGame}>Play again</button>
      </form>
  }
  return (
    <div className={`Game playing`}>
      {screens[state]}
    </div>
    /*
    <div className={`Game ${state}`}>
      {screens[state]}
    </div>
    */
  );
}

export default Game;
