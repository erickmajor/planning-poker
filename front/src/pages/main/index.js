import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./styles.css";

import Page from '../../components/Page';
import Client from '../../Client.js';

export default class Main extends Component {
  state = {
    name: ''
  };

  submitName = name => {
    if (name !== '') {
      Client.emit('set-name', name);
      this.setState({ name });
    }
  }

  render () {
    // Destructuring the state to get only our important data to us.
    const { name } = this.state;

    return (
      <Page id="main">
        <form onSubmit={this.submitName}>
          <p>Enter your name</p>
          <input type="text" value={name} onChange={e => this.setState({ name: e.target.value })} />
          <button onClick={this.submitName}>Go</button>
        </form>
      </Page>
    );
  }
}
