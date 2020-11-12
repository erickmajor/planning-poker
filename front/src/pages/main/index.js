import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "./styles.css";

import Page from '../../components/Page';
import Client from '../../Client.js';

export default class Main extends COmponent {

  const submitName = e => {
    if (name !== '') {
      Client.emit('set-name', name);
      // setState('playing');
    }
    e.preventDefault();
  }

  render () {
    return (
      <Page id="main">
        <form onSubmit={submitName}>
          <p>Enter your name</p>
          <input value={name} onChange={e => setName(e.target.value)} />
          <button onClick={submitName}>Go</button>
        </form>
      </Page>
    );
  }
}
