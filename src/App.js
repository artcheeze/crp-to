import React, { Component } from 'react';
import Tickers from './Tickers.js';
import './App.css';

class App extends Component {  
  render() {
    return (
      <div className="App">
                    <div className="App-header">
                        <h2>เฝ้าระวังดอย</h2>
                    </div>
                    <Tickers />
                </div>
    );
  }
}

export default App;
