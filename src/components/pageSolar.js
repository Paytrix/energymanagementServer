import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Button } from '@progress/kendo-react-buttons';

export default class pageSolar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }
  }

  render() {
    this.fetchData();
    const { values } = this.state;
    let floats = values.map( x => parseFloat(x));
    const options = {
      chart: {
        styledMode: true,
        height: 400,
        width: 800
      },
      title: {
        text: 'Solar Temperaturverlauf' 
      },
      series: [{
        name: 'Rücklauftemperatur Solar',
        data: floats
      }],
      yAxis: {
        title: {
          text: 'Temperatur °C'
        }
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Zeit'
        },
        categories: ['0:00','1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
     },
    };

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
        <Button togglable={true} onClick={() => this.postData("2","30010",true)}>Solar Pumpe</Button>
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
            values: result.results[0]
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
      console.log(content);
    })();
  }
}
