import React, { Component } from 'react';

import "./styles.css";

export default class Page extends Component {
  static defaultProps = {
    type: ''
  }

  render() {
    return (
      <div className="page">
        <div className={`${this.props.id}-page ${this.props.type}`}>
        {this.props.children}
        </div>
      </div>
    );
  }
}
