import React, { Component } from 'react';

import Player from '../../components/Player';
import Card from '../../components/Card';
import socket from '../../services/socket';

import './styles.css';

export default class Deck extends Component {
  static defaultProps = {
      values: []
  }

  state = {
    player: {},
    cards: []
  };

  importAll = r => r.keys().map(r);

  getAllAvatars = () => this.importAll(require.context('../../avatars/', false, /\.(png|jpe?g|svg)$/));

  createPlayerStructure = () => {
    const avatars = this.getAllAvatars();
    const sortedImage = Math.floor(Math.random() * avatars.length);

    this.setState({ player: {
      id: socket.id,
      avatar: avatars[ sortedImage ].default,
      nome: 'Anonymous',
    }});
  };

  createCardStructure = () => {
    // const { values } = this.props;
    const values = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?', ];

    const cards = values.map(value => {
      return {id: value, value};
    });

    this.setState({ cards });
  };

  componentWillMount() {
    this.createPlayerStructure();
    this.createCardStructure();
  }

  render() {
    // Destructuring the state to get only our important data to us.
    const { player, cards } = this.state;

    return (
      <div className="deck">
        <Player key={player.id} id={player.id} avatar={player.avatar} value={player.value} name={player.name} />
        <div className="hand">
        {cards.map(card =>
          // <Card key={card.value} value={card.value} active={card.active} onActivate={select} />
          <Card key={card.value} id={card.id} value={card.value} />
        )}
        </div>
      </div>
    );
  }
}
