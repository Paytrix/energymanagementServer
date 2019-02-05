import React, { Component } from 'react';
import './style.css';

export default class leftIconPanel extends Component {
  render() {
    var handler = this.props.handler;
    return (
      <div id="bodyleftIconPanel">
        <div id="leftPanelBoiler" className="leftPanelIcon" onClick={() => handler("pageBoiler")}></div>
        <div id="leftPanelSolar" className="leftPanelIcon" onClick={() => handler("pageSolar")}></div>
        <div id="leftPanelPumpe" className="leftPanelIcon" onClick={() => handler("pagePv")}></div>
        <div id="leftPanelHeizung" className="leftPanelIcon" onClick={() => handler("")}></div>
      </div>
    )
  }
}
