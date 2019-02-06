import React, { Component } from 'react';
import './style.css';

export default class leftIconPanel extends Component {
  render() {
    return (
      <div id="bodyleftIconPanel">
        <div id="leftPanelBoiler" className="leftPanelIcon"></div>
        <div id="leftPanelSolar" className="leftPanelIcon" onClick={this.changePage}></div>
        <div id="leftPanelPumpe" className="leftPanelIcon"></div>
        <div id="leftPanelHeizung" className="leftPanelIcon"></div>