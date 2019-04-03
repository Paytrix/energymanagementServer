import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import './style.css';

export default class leftIconPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div id="bodyleftIconPanel">
          <div id="leftPanelBoiler" className="leftPanelIcon">
            <NavLink to="/pageBoiler" className="leftPanelLinks"></NavLink>
          </div>
          <div id="leftPanelSolar" className="leftPanelIcon">
            <NavLink to="/pageSolar" className="leftPanelLinks"></NavLink>
          </div>
          <div id="leftPanelPumpe" className="leftPanelIcon">
            <NavLink to="/pagePumpe" className="leftPanelLinks"></NavLink>
          </div>
          <div id="leftPanelHeizung" className="leftPanelIcon">
            <NavLink to="/pageHeizung" className="leftPanelLinks"></NavLink>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
