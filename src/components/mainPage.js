import React, { Component } from 'react';
import PagePv from './pagePv';
import PageSolar from './pageSolar';
import PageBoiler from './pageBoiler';

export default class mainPage extends Component {
  render() {
    const components = {
      pagePv: PagePv,
      pageSolar: PageSolar,
      pageBoiler: PageBoiler
    };
    var ActiveComponent = components[this.props.page]; //this.props.activePage
    return (
      <div id="bodymainPage">
          <ActiveComponent/>
      </div>
    )
  }
}
