import React, { Component } from 'react';
import './App.css';
import Search from './search.js';
import ItemPanel from './Itempanle.js';
import Staff from './WIPinfo.js';

class WipInfoS extends Component {

  constructor(){
    super();
  this.state = {
      staff : new Staff,
      staffDetail: null
    };
  }
  addStaffItem(item){
    this.setState({
      staff:this.state.staff.addStaffItem(item)
    });
  }
  addWIPItem(item){
    this.setState({
      staff:this.state.staff.addwipItem(item)
    });
  }
  clearItems(){
   // this.setState({
      staff:this.state.staff.allStaff=[];
      staff:this.state.staff.staff=[];
      //staff:this.state.staff.clearItems()
   //});
  }
  render() {
    return (    
        <div className="Search-body">
        <Search addStaffItem={this.addStaffItem.bind(this)} addWIPItem={this.addWIPItem.bind(this)} clearItems={this.clearItems.bind(this)}/>        
        <ItemPanel items={this.state.staff.allStaff} wipitems={this.state.staff.staff}/>
        </div>
    );
  }
}

export default WipInfoS;
