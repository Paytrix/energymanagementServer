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
    this.postData("2","30000","true");
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
  
  postData(slaveID, register, postdata) {
    fetch('http://172.16.144.101:80/postModbus.php', {
        method: 'POST',
        crossDomain: true,
        body: JSON.stringify({
            slaveID: slaveID,
            register: register,
            data: postdata
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

  componentDidMount() {
    this.postData("2","30000","true");
    this.setState({ 
        values: [],
        isLoading: true 
    });
  }
}
