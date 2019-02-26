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
                <Route path="/pagePv" component={PagePv}/>
                <Route path="/pageBoiler" component={PageBoiler}/>
                <Route path="/pageSolar" component={PageSolar}/>
                <Route path="/" component={PageBoiler} exact />
              </Switch>
            </div>
          </BrowserRouter>
      </div>
    )
  }
}
