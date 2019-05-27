import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Switch } from '@progress/kendo-react-inputs';

export default class pageSolar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value0: [],
      value1: [],
      value2: [],
      value3: [],
      buttonChecked: false
    }
  }

  render() {
    this.fetchData();
    this.buttonCheck();
    const { value0, value1, value2, value3 } = this.state;
    const options = {
      chart: {
        styledMode: false,
        height: 400,
        width: 800
      },
      title: {
        text: 'Solar Temperaturverlauf' 
      },
      series: [
        {
          name: 'Rücklauftemperatur Solar',
          data: value0
        },
        {
          name: 'Vorlauftemperatur Solar',
          data: value1
        }
      ],
      colors: ['red', 'blue'],
      yAxis: {
        title: {
          text: 'Temperatur °C'
        }
      },
      tooltip: {
        xDateFormat: "%A, %b %e, %H:%M"
      },
      ad: {
        tooltip: {
          dateTimeLabelFormats: {
            millisecond: "%A, %b %e, %H:%M",
            hour: "%A, %b %e, %H:%M"
          }
        }
      },
      time: {
        timezoneOffset: -120
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Zeit'
        },
     },
    };

    const options2 = {
      chart: {
        styledMode: false,
        height: 400,
        width: 800
      },
      title: {
        text: 'Pv Leistungsverlauf' 
      },
      series: [
        {
          name: 'Leistung Pv1',
          data: value2
        },
        {
          name: 'Leistung Pv2',
          data: value3
        }
      ],
      yAxis: {
        title: {
          text: 'Leistung W'
        }
      },
      tooltip: {
        xDateFormat: "%A, %b %e, %H:%M"
      },
      ad: {
        tooltip: {
          dateTimeLabelFormats: {
            millisecond: "%A, %b %e, %H:%M",
            hour: "%A, %b %e, %H:%M"
          }
        }
      },
      time: {
        timezoneOffset: -120
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Zeit'
        },
     },
    };

    return (
      <div>
        <div id="SolarChart">
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
        <div id="PvChart">
        <HighchartsReact
            highcharts={Highcharts}
            options={options2}
          />
        </div>
        <div id="SolarButton">
          <div id="SolarPump"></div>
          <Switch 
            id="SolarSwitch"
            checked={this.state.checked}
            onChange={(event) => { this.setState({checked: event.target.value}) }}
          />
        </div>
      </div>
    )
  }

  buttonCheck() {
    if(this.state.checked)
      this.postData("2","30010",true);
    else
      this.postData("2","30010",false);
  }

  //onClick={() => this.postData("2","30010",true)}
  fetchData() {
    fetch("http://172.16.144.101/solarChart.php", {
      crossDomain: true,
      method: 'GET',
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            value0: result.results[0],
            value1: result.results[1],
            value2: result.results[2],
            value3: result.results[3]
          });
        },
        (error) => {
          
        }
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
      // console.log("Posted: ");
      // console.log(content);
    })();
  }
}
