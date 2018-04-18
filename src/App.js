import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WipInfoS from './wipInfoS.js';
//import header from './header.jpg';
import header from './headerjpgcarbk.jpg';
import TabComponent from './tabpage.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />  
          </div>
          <img src={header} className="App-header-img" alt="header"/>       
        </header> 
        <div className="App-body">
          <TabComponent/>
        </div>
      </div>
    );
  }
}

export default App;
