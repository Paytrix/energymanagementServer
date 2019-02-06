import React, { Component } from 'react';
import './style.css';
import LeftHRPanel from './leftHRPanel';
import LeftIconPanel from './leftIconPanel';

export default class leftPanel extends Component {
constructor (props){
  super(props);
  this.state = {
    activePage: "pageBoiler"
  }
}

  render() {
    return (
      <div id="bodyleftPanel">
        <LeftHRPanel/>
        <LeftIconPanel onChange={this.updatePage.bind(this)} changepage={this.changeActivePage.bind(this)}/>
      </div>
    )
  }

  updatePage () {
    this.props.changepage(this.state.activePage);
  }

  changeActivePage (newPage) {
    this.setState ({
      activePage: newPage
    });
  }
}
