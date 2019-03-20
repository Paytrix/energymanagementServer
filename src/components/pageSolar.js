import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export default class pageSolar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }
  }

  render() {
    this.fetchData();
    console.log(this.state.values.Ruecklauftemperatur);
    const options = {
      title: {
        text: 'Solar Temperaturverlauf'
      },
      series: [{
        data: [ this.state.values.Ruecklauftemperatur ]
      }],
      xAxis: {
        type: 'datetime',
        title: {
          text: 'time'
        },
        categories: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
     },
    };

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    )
  }

  fetchData() {
    fetch("http://172.16.144.101/solarChart.php", {
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
}
