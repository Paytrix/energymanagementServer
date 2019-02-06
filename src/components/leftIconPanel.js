import React, { Component } from 'react';
import './style.css';

export default class leftIconPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "pageBoiler"
    }
  }

  render() {
    return (
      <div id="bodyleftIconPanel">
        <div id="leftPanelBoiler" className="leftPanelIcon"></div>
        <div id="leftPanelSolar" className="leftPanelIcon" onClick={this.changePage}></div>
        <div id="leftPanelPumpe" className="leftPanelIcon"></div>
        <div id="leftPanelHeizung" className="leftPanelIcon"></div>
      </div>
    )
  }

  changePage () {
    this.setState({
      page: "pageSolar"
    });
  }
}
