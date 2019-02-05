import React, { Component } from 'react';

export default class boiler extends Component {
    constructor(props) {
        super(props);
        this.state = {
          values: [],
          isLoading: false
        }
    }

  render() {
    this.fetchData();
    const { values, isLoading } = this.state;
    return (
    <div>
        <div className="BoxBoiler">
            <div id="BoilerTop"></div>
                <div id="BoilerBody">
                    <div className="sensorBoiler" id="sensorBoiler1">
                        <div className="sensorValueBoiler" id="sensorValueBoiler1">
                            {  values.PuffertemperaturOben + "°C" }
                        </div>
                    </div>
                    <div className="sensorBoiler" id="sensorBoiler2">
                        <div className="sensorValueBoiler" id="sensorValueBoiler2">
                            {  values.PuffertemperaturMitteOben + "°C" }
                        </div>
                    </div>
                    <div className="sensorBoiler" id="sensorBoiler3">
                        <div className="sensorValueBoiler" id="sensorValueBoiler3">
                            {  values.PuffertemperaturMitte + "°C" }
                        </div>
                    </div>
                    <div className="sensorBoiler" id="sensorBoiler4">
                        <div className="sensorValueBoiler" id="sensorValueBoiler4">
                            {  values.PuffertemperaturMitteUnten + "°C" }
                        </div>
                    </div>
                    <div className="sensorBoiler" id="sensorBoiler5">
                        <div className="sensorValueBoiler" id="sensorValueBoiler5">
                            {  values.PuffertemperaturUnten + "°C" }    
                        </div>
                    </div>
                </div>
                <div id="BoilerBottom"></div>
        </div>
    </div>
    )
  }

  componentDidMount() {
    this.setState({ 
        values: [],
        isLoading: true 
    });
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
            values: result.results,
            isLoading: false
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
