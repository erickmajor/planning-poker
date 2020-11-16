import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import Page from '../../components/Page';
import Client from '../../Client.js';

export default class MainPage extends Component {
  state = {
    name: '',
    confirmed: false
  };

  submitName = () => {
    // Destructuring the state to get only our important data to us.
    const { name } = this.state;

    if (!!name) {
      Client.emit('set-name', name);
      this.setState({ confirmed: true });
    }
  }

  render () {
    // Destructuring the state to get only our important data to us.
    const { name, confirmed } = this.state;

    if (confirmed) {
      return <Redirect to="/game" />
    } else {
      return (
        <Page id="main" type="modal">
          <form>
            <p>Enter your name</p>
            <input type="text" value={name} onChange={e => this.setState({ name: e.target.value })} />
            <button onClick={this.submitName}>Go</button>
          </form>
        </Page>
      );
    }
  }
}
