import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./styles.css";

import Page from '../../components/Page';
import Game from '../../components/Game';
import Deck from '../../components/Deck';
import socket from '../../services/socket';

export default class GamePage extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    socket.on("players-update", data => {
      this.setState({ players: data.players });
    });
  }

  render () {
    // Destructuring the state to get only our important data to us.
    const { players } = this.state;

    return (
      <Page id="game">
        <Game players={players} />
        <Deck/>
      </Page>
    );
  }
}
