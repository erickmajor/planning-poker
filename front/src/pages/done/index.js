import React, { Component } from 'react';

import Page from '../../components/Page';
import socket from '../../services/socket';

export default class DonePage extends Component {
  resetGame = () => {
    socket.emit('reset-game');
    this.props.history.push('/');
  }

  render () {
    return (
      <Page id="done" type="modal">
        <form onSubmit={this.resetGame}>
          <p>Game done!</p>
          <button onClick={this.resetGame}>Play again</button>
      </form>
      </Page>
    );
  }
}
