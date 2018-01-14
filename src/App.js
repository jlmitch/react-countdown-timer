import React, { Component } from 'react';
import TimeBox from './components/TimeBox';
import './App.css';

class App extends Component {

  render() {
    // const deadLine = "01/19/2019";

    return (
      <div className="App">
        <TimeBox 
          increment="" 
          incrementDescription="" />
        <TimeBox />
        <TimeBox />
        <TimeBox />
      </div>
    );
  }
}

export default App;
