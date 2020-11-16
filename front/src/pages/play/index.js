import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "./styles.css";

import Page from '../../components/Page';
import Players from '../../Players.js';
import Client from '../../Client.js';
import Game from '../../Game.js';
import Deck from '../../Deck.js';

function Play() {

  const [ players, setPlayers ] = useState([]);

  useEffect(() => {
    Client.on("players-update", data => {
      setPlayers(data.players);
    });
  }, []);

  return (
    <Page id="play">
      <Game players={players} />
      <Players players={players} />
      <Deck/>
    </Page>
  );
}

export default Play;
