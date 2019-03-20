import React, { Component } from 'react';
import { ArcGauge } from '@progress/kendo-react-gauges';

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
    this.postData("2","30000","true");
    const { values, isLoading } = this.state;

    const colors = [
      { from: 0, to: 25, color: 'blue' },
      { from: 25, to: 100, color: 'lime' }
    ];

    const arcOptions = {
        value: this.state.gaugeValue.toFixed(1),
        colors
    };

    const arcCenterRenderer = (value, color) => {
        return (<h3 style={{ color: color }}>{value}%</h3>);
    };

    return (
    <div>
        <ArcGauge 
          {...arcOptions}
          arcCenterRender={arcCenterRenderer} 
          style={{
            top: '390px',
            left: '-200px'
          }}
        />
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
    (async () => {
      const rawResponse = await fetch('http://172.16.144.101/postModbus.php', {
        method: 'POST',
        crossDomain: true,
        body: JSON.stringify({
          slaveID,
          register,
          postdata
        }),
      });
      const content = await rawResponse;
      //console.log(content);
    })();
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
            gaugeValue: result.results.GesThermEnergie / 25.14,
            isLoading: false
          });
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      )
  }

  componentDidMount() {
    this.postData(2,30000,"true");
    //this.postData("2","30000","true");
    this.setState({ 
        values: [],
        isLoading: true 
    });
  }
}
