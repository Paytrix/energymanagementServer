import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export default class boilerChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value0: [],
        value1: [],
        value2: [],
        value3: [],
        value4: []
    }
  }

  render() {
    this.fetchData();
    const { value0, value1, value2, value3, value4 } = this.state;
    const options = {
        chart: {
          styledMode: false,
          height: 400,
          width: 800,
          left: 700
        },
        title: {
          text: 'Boiler Temperaturverlauf' 
        },
        series: [
            {
                name: 'Boiler Oben',
                data: value0
            },
            {
                name: 'Boiler Mitte Oben',
                data: value1
            },
            {
                name: 'Boiler Mitte',
                data: value2
            },
            {
                name: 'Boiler Mitte Unten',
                data: value3
            },
            {
                name: 'Boiler Unten',
                data: value4
            }
        ],
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        colors: ['red', '#ff6600', '#ff33cc', '#993399', 'blue'],
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
    return (
      <div id="boilerChartBody">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    )
  }

  fetchData() {
    fetch("http://172.16.144.101/boilerChart.php", {
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
            value3: result.results[3],
            value4: result.results[4],
          });
        },
        (error) => {
          
        }
      )
  }
}
