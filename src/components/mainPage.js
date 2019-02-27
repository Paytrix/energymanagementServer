import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PagePv from './pagePv';
import PageSolar from './pageSolar';
import PageBoiler from './pageBoiler';

export default class mainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }
  }
  render() {
    const { values } = this.state;
    this.fetchData();
    return (
      <div id="bodymainPage">
          <BrowserRouter>
            <div>
              <div>
                { values.Raumtemperatur + "°C" }
              </div>
              <Switch>
                <Route path="/pagePv" component={PagePv}/>
                <Route path="/pageBoiler" component={PageBoiler}/>
                <Route path="/pageSolar" component={PageSolar}/>
                <Route exact path="/" component={PageBoiler}/>
              </Switch>
              </div>
          </BrowserRouter>
      </div>
    )
  }

  fetchData() {
    fetch("http://172.16.144.101:80", {
      crossDomain: true,
      method: 'GET',
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            values: result.results
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  componentDidMount() {
    this.setState({ 
      values: []
    });
  }
}
