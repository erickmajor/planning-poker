import React, { Component } from 'react';
import socket from '../../services/socket';

import './styles.css';

export default class Card extends Component {
  state = {
    id: '',
    value: '',
    active: false
  };

  select = () => {
    // Destructuring the state to get only our important data to us.
    const { id } = this.state;
    socket.emit('select-card', id);
    this.setState({ active: true });
  }

  deselect = () => {
    // Destructuring the state to get only our important data to us.
    const { id } = this.state;
    socket.emit('deselect-card', id);
    this.setState({ active: false });
  }

  reset = () => {
    this.deselect();
  }

  componentDidMount() {
    const { id, value } = this.props;

    this.setState({ id, value, active: false });
  }

  render() {
    // Destructuring the state to get only our important data to us.
    const { value, active } = this.state;
    const selected = active === true ? 'card selected' : 'card';

    return (
      <div className={selected} onClick={active === false ? this.select : this.deselect} >
        <p className="card-value">{value}</p>
      </div>
    );
  }
}
