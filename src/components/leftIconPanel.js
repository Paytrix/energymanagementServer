import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default class leftIconPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageBoiler: "pageBoiler",
      pageSolar: "pageSolar"
    }
  }

  changeToBoiler () {
    this.props.changepage(this.state.pageBoiler);
  }
  
  changeToSolar () {
    this.props.changepage(this.state.pageSolar);
  }

  render() {
    return (
      <div id="bodyleftIconPanel">
        <div id="leftPanelBoiler" className="leftPanelIcon">
          {//<NavLink to="/pageBoiler"></NavLink>
          }
        </div>
        <div id="leftPanelSolar" className="leftPanelIcon">
          {//<NavLink to="/pageSolar"></NavLink>
          }
        </div>
        <div id="leftPanelPumpe" className="leftPanelIcon">
          {//<NavLink to="/pagePumpe"></NavLink>
          }
        </div>
        <div id="leftPanelHeizung" className="leftPanelIcon">
          {//<NavLink to="/pagePumpe"></NavLink>
          }
        </div>
      </div>
    )
  }
}
