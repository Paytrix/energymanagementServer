import React, { Component } from 'react';
import './style.css';

export default class leftIconPanel extends Component {
  render() {
    return (
      <div id="bodyleftIconPanel">
        <div id="leftPanelBoiler" className="leftPanelIcon" onClick={this.props.page = "pageBoiler"}></div>
        <div id="leftPanelSolar" className="leftPanelIcon" onClick={this.props.page = "pageSolar"}></div>
        <div id="leftPanelPumpe" className="leftPanelIcon" onClick={this.props.page = "pagePv"}></div>
        <div id="leftPanelHeizung" className="leftPanelIcon" onClick={this.props.page = "pagePv"}></div>
      </div>
    )
  }
}
