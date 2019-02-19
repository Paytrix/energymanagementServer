import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PagePv from './pagePv';
import PageSolar from './pageSolar';
import PageBoiler from './pageBoiler';

export default class mainPage extends Component {
  render() {
    return (
      <div id="bodymainPage">
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/pagePv" component={PagePv} exact />
                <Route path="/pageBoiler" component={PageBoiler} exact />
                <Route path="/pageSolar" component={PageSolar} exact />
                <Route patch="/" component={PageBoiler} exact />
              </Switch>
            </div>
          </BrowserRouter>
      </div>
    )
  }
}
