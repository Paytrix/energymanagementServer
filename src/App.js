import React, { Component } from 'react';
import './App.css';
import HeaderLogo from './components/headerLogo';
import HeaderTitle from './components/headerTitle';
import LeftPanel from './components/leftPanel';
import MainPage from './components/mainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderLogo/>
          <HeaderTitle/>
          <LeftPanel/>
          <MainPage/>
      </div>
    );
  }

  componentWillMount() {
    document.body.style.overflow = "hidden";
    document.title = "EmS";
  }
}

export default App;
