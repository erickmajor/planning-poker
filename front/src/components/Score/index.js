import React, { Component } from 'react';
import socket from '../../services/socket';

import './styles.css';

export default class Score extends Component {
  state = {
    points: []
  };

  getScoreValue = () => {
    // Destructuring the state to get only our important data to us.
    const { points } = this.state;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return points.reduce(reducer, 0);
  };

  render() {
    const value = this.getScoreValue();

    return (
      <div className="score">
        <p className="score-value">{value}</p>
      </div>
    );
  }
}
