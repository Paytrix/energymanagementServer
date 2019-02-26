import React, { Component } from 'react';
import './style.css';
import LeftHRPanel from './leftHRPanel';
import LeftIconPanel from './leftIconPanel';
import withRouter from 'react-router-dom/withRouter';
import BrowserRouter from 'react-router-dom/BrowserRouter';
export default class leftPanel extends Component {
constructor (props){
  super(props);
}
  render() {
    return (
      <BrowserRouter>
        <div id="bodyleftPanel">
          <LeftHRPanel/>
          <LeftIconPanel/>
        </div>
      </BrowserRouter>
    )
  }
}
