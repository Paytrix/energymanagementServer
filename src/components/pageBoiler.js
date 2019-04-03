import React, { Component } from 'react';
import Boiler from './boiler';
import BoilerChart from './boilerChart';

export default class pageBoiler extends Component {
  render() {
    return (
      <div id="bodypageBoiler">
        <Boiler/>
        <BoilerChart/>
      </div>
    )
  }
}
