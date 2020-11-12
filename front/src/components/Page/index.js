import React, { Component } from 'react';

import "./styles.css";

export default class Page extends Component {
  render() {
    return (
      <div className={`page ${this.props.id}-page`}>
        {this.props.children}
      </div>
    );
  }
}
