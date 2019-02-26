import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default class leftIconPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="bodyleftIconPanel">
        <div id="leftPanelBoiler" className="leftPanelIcon">
          <NavLink exact={true} to="/pageBoiler" className="leftPanelLinks"></NavLink>
        </div>
        <div id="leftPanelSolar" className="leftPanelIcon">
          <NavLink exact={true} to="/pageSolar" className="leftPanelLinks"></NavLink>
        </div>
        <div id="leftPanelPumpe" className="leftPanelIcon">
          <NavLink exact={true} to="/pagePumpe" className="leftPanelLinks"></NavLink>
        </div>
        <div id="leftPanelHeizung" className="leftPanelIcon">
          <NavLink exact={true} to="/pageHeizung" className="leftPanelLinks"></NavLink>
        </div>
      </div>
    )
  }
}
