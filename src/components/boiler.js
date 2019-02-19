import React, { Component } from 'react';
import { RadialGauge } from '@progress/kendo-react-gauges';

export default class boiler extends Component {
    constructor(props) {
        super(props);
        this.state = {
          values: [],
          isLoading: false,
          gaugeValue: 0
        }
    }

  render() {
    this.fetchData();
    //this.postData("2","30000","true");
    const { values, isLoading } = this.state;
    const radialOptions = {
      pointer: {
          value: this.state.gaugeValue
      },
      scale: {
        labels: {
          format: 'n2'
        },
        minorUnit: 1,
        majorUnit: 5,
        max: 25.2,
        ranges: [
            { from: 0, to: 10, color: '#0066ff' },
            { from: 10, to: 20, color: '#990099' },
            { from: 20, to: 25.2, color: '#ff0000' }
        ]
      }
    };
    return (
    <div>
        <RadialGauge {...radialOptions} />
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
  
  postData(slaveID, register, postdata) {
    fetch("http://172.16.144.101/postModbus.php", {
        method: 'POST',
        crossDomain: true,
        headers: {
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            slaveID,
            register,
            postdata
        })
    })
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
            gaugeValue: result.results.GesThermEnergie,
            isLoading: false
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidMount() {
    //this.postData("2","30000","true");
    this.setState({ 
        values: [],
        isLoading: true 
    });
  }
}
