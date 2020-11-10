/* */
import React, { Component } from 'react';

import './styles.css';
import baseAvatar from './images/user.png';

export default class Player extends Component {
  static defaultProps = {
    name: 'Anonymous',
    avatar: baseAvatar
  }

  state = {
    id: '',
    name: '',
    avatar: ''
  };

  componentDidMount() {
    const { avatar, name } = this.props;

    this.setState({ avatar, name });
  }

  render() {
    // Destructuring the state to get only our important data to us.
    const { id, name, avatar } = this.state;

    return (
      <div className="player">
        <span className="avatar">
          <img src={avatar} alt={id} />
        </span>
        <p className="name">
          {name}
          <small>{id}</small>
        </p>
      </div>
    );
  }
}
