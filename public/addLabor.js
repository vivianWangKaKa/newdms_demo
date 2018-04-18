import React, { Component } from 'react'; 
import './search.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class LaborAdd extends Component {   
  constructor(){
   super();
  this.state = {
      message:"" 
    };
  }
    handleClick = (e) => {
        let that=this;
        let wipno=ReactDOM.findDOMNode(this.refs.wipNo).value;
        let laborCode=ReactDOM.findDOMNode(this.refs.laborCode).value;
        let condvalue="";
        if(wipno.length<=0)
        {
            condvalue="Please input WIP number!";
            that.props.setMessage(condvalue);
        }
        else if(laborCode.length<=0)
        {
            condvalue='Please input labor code!';
            that.props.setMessage(condvalue);
        }
        else
        {
          that.props.setMessage('');
          $.ajax({
            url:`/invokerpa?wip=${wipno}&workHours=${laborCode}`,
           type: "get", 
            xhrFields: {
              withCredentials: true
            },
           headers: {
            Accept: "text/html,application/x-javascript,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",

        },
           success: function(response,status,xhr){
            //alert(response);
           condvalue=response;
           that.props.setMessage(condvalue);
        },  
        error: function(XMLHttpRequest, textStatus, errorThrown){  
         
         
          condvalue='Add failed: connect lost.';  
          alert(condvalue);
          
        }  
      })
    }

    } 
    
    render() {
      return (
        <div className="SearchHead">
          <label>wip number*:</label>
          <input type="text" ref='wipNo' className="WIPNO" id="WIPNO"/>
          <label >Labor Code:</label>
          <input type="text" className="LaborCode" ref='laborCode' id="LaborCode"/>
          <button className="Add" onClick={this.handleClick}>Add</button>
          <div className='condition' ref='condition'></div>
        </div>
      );
    }
  }
  
  export default LaborAdd;