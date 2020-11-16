import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./styles.css";

import Page from '../../components/Page';
import Client from '../../Client.js';
import Players from '../../Players.js';
import Game from '../../Game.js';
import Deck from '../../Deck.js';

export default class GamePage extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    Client.on("players-update", data => {
      this.setState({ players: data.players });
    });
  }

  render () {
    // Destructuring the state to get only our important data to us.
    const { players } = this.state;

    return (
      <Page id="game">
        <Game players={players} />
        <Players players={players} />
        <Deck/>
      </Page>
    );
  }
}
