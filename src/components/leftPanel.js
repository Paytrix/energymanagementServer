import React, { Component } from 'react';
import './style.css';
import LeftHRPanel from './leftHRPanel';
import LeftIconPanel from './leftIconPanel';

export default class leftPanel extends Component {
  render() {
    return (
      <div id="bodyleftPanel">
        <LeftHRPanel/>
        <LeftIconPanel/>
      </div>
    )
  }
}
