import React, { Component } from 'react';
import './style.css';
import logo from '../pictures/HTBLuVA_Salzburg_Logo_mit_Bild.png';

export default class headerTitle extends Component {
  render() {
    return (
      <div id="bodyHeaderTitle">
        <p>Energiemanagement System</p>
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
