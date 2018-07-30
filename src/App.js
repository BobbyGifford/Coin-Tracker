import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Coinlist from './components/coinlist/Coinlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Coinlist />
      </div>
    );
  }
}

export default App;
