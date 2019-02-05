import React, { Component } from 'react';

export default class boiler extends Component {
    constructor(props) {
        super(props);
        this.state = {
          values: []
        }
    }

  render() {
    this.fetchData();
    const { values } = this.state;
    return (
    <div>
        <div className="BoxBoiler">
            <div id="BoilerTop"></div>
                <div id="BoilerBody">
                    <div className="sensorBoiler" id="sensorBoiler1"></div>
                    <div className="sensorBoiler" id="sensorBoiler2"></div>
                    <div className="sensorBoiler" id="sensorBoiler3"></div>
                    <div className="sensorBoiler" id="sensorBoiler4"></div>
                    <div className="sensorBoiler" id="sensorBoiler5"></div>
                    <div className="sensorValueBoiler" id="sensorValueBoiler1">
                        45°C
                        {  
                            // JSON.stringify(values.PuffertemperaturOben)
                        }
                    </div>
                    <div className="sensorValueBoiler" id="sensorValueBoiler2">
                        44°C
                        {  
                            // values["PuffertemperaturMitteOben"]
                        }
                    </div>
                    <div className="sensorValueBoiler" id="sensorValueBoiler3">
                        43°C
                        { 
                           // values["PuffertemperaturMitte"]
                        }
                    </div>
                    <div className="sensorValueBoiler" id="sensorValueBoiler4">
                        42°C
                        {  
                           // values["PuffertemperaturMitteUnten"]
                        }
                    </div>
                    <div className="sensorValueBoiler" id="sensorValueBoiler5">
                        41°C
                        {
                           // values["PuffertemperaturUnten"]
                        }   
                    </div>
                </div>
                <div id="BoilerBottom"></div>
        </div>
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
          /*
          this.setState({
            error
          });
          */
        }
      )
  }

  componentWillMount() {
    this.fetchData();
  }
}
