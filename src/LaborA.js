import React, { Component } from 'react';
import './App.css';
import LaborAdd from './addLabor.js';
import ItemPanel from './Itempanle.js';
import Staff from './WIPinfo.js';

class LaborA extends Component {

  constructor(){
    super();
  this.state = {
      message:""
    };
  }
  setMessage(item){
    this.setState({
      message:item
    });
  }
  render() {
    return (    
        <div className="Search-body">
        <LaborAdd setMessage={this.setMessage.bind(this)}/>  
        <div className='condition'>{this.state.message} </div>  
        </div>
    );
  }
}

export default LaborA;
