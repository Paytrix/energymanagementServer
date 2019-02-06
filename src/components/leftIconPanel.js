import React, { Component } from 'react';
import './style.css';

export default class leftIconPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageBoiler: "pageBoiler",
      pageSolar: "pageSolar"
    }
  }

  changeToBoiler () {
    this.props.changepage(this.state.pageBoiler);
  }
  
  changeToSolar () {
    this.props.changepage(this.state.pageSolar);
  }

  render() {
    return (
      <div id="bodyleftIconPanel">
        <div id="leftPanelBoiler" className="leftPanelIcon" onClick={this.changeToBoiler.bind(this)}></div>
        <div id="leftPanelSolar" className="leftPanelIcon" onClick={this.changeToSolar.bind(this)}></div>
        <div id="leftPanelPumpe" className="leftPanelIcon"></div>
        <div id="leftPanelHeizung" className="leftPanelIcon"></div>
      </div>
    )
  }
}
