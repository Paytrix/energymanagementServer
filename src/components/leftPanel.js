import React, { Component } from 'react';
import './style.css';
import LeftHRPanel from './leftHRPanel';
import LeftIconPanel from './leftIconPanel';
import withRouter from 'react-router-dom/withRouter';
export default class leftPanel extends Component {
constructor (props){
  super(props);
}
  render() {
    return (
      <div id="bodyleftPanel">
        <LeftHRPanel/>
        <LeftIconPanel/>
      </div>
    )
  }
}
