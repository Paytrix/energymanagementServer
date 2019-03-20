import React, { Component } from 'react';
import './App.css';
//import '@progress/kendo-theme-default/dist/all.css';
import HeaderLogo from './components/headerLogo';
import HeaderTitle from './components/headerTitle';
import LeftPanel from './components/leftPanel';
import MainPage from './components/mainPage';

class App extends Component {
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
      <div className="App">
          <HeaderLogo/>
          <HeaderTitle/>
          <LeftPanel/>
          <MainPage/>
      </div>
    );
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
    document.body.style.overflow = "hidden";
    document.title = "EmS";
  }

  componentDidMount() {
    this.fetchData();
  }
}

export default App;
