import React, { Component } from 'react';
import './style.css';
import logo from '../pictures/HTBLuVA_Salzburg_Logo_mit_Bild.png';

export default class headerLogo extends Component {
  render() {
    return (
      <div id="topPanel">
        {/*
        <nav className="TopPanelNav">
            <a href="#">Control Panel</a>
            <a href="#">Impressum</a>
        </nav>
        */}
        <div id="topPanelLogo">
            <a href="http://www.htl-salzburg.ac.at">
            <picture>
                <img src={logo} alt="HTL_logo"/>
            </picture>
            </a>
        </div>
      </div>
    )
  }
}
