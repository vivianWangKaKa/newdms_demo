import React, { Component } from 'react';
import './App.css';
import SPPSSearch from './SppsSearch.js';
import SppsPanel from './SppsPanel.js';
import SPPS from './spps.js';

class SppsS extends Component {

  constructor(){
    super();
  this.state = {
      spps : new SPPS,
      staffDetail: null
    };
  }
    addStaffItem(item){
      this.setState({
        staff:this.state.spps.addStaffItem(item)
      });
    }

    addDetail(sppsIndex,item){
      this.setState({
        staff:this.state.spps.addDetails(sppsIndex,item)
      });
    }
    clearItems(){
      // this.setState({
         staff:this.state.spps.sppsItems=[];
         //staff:this.state.staff.clearItems()
      //});
     }
  

  render() {
    return (    
        <div className="Search-body">
        <SPPSSearch addStaffItem={this.addStaffItem.bind(this)} addDetail={this.addDetail.bind(this)} clearItems={this.clearItems.bind(this)}/>  
        <SppsPanel items={this.state.spps.sppsItems}/>      
        </div>
    );
  }
}

export default SppsS;
