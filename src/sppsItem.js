import React from 'react';
import ReactDOM from 'react-dom';
import './Item.css';
import ItemDetail from './sppsIt.js';
import $ from 'jquery';
import jquery from 'jquery';
export default class sppsTable extends React.Component{	
    
    constructor(){
        super();
      this.state = {
          status:false,
        };
      }
      handleClick = (e) => {
        if(this.state.status==true)
        {
            this.setState({
                status:false,
            })
        }
        else
        {
            this.setState(
                {
                    status:true,
                }
            )
        }
      }
	render(){
        let items = [];
        
		if(this.props.sppsitem.info.dt.length==0) {
		}else {

            this.props.sppsitem.info.dt.forEach(detail => {
                {
                    items.push(<ItemDetail detail={detail}/>)
            }
            });
        }
        if(this.state.status==true)
        {
            $(`#${this.props.sppsitem.info.number}`).removeClass('hidden');
           
        }
        else
        {
            $(`#${this.props.sppsitem.info.number}`).addClass('hidden');
         }
            
        return (
            <div>
            <h3 onClick={this.handleClick}>* {this.props.sppsitem.info.menuno}  {this.props.sppsitem.info.desc1}</h3>
            <table className='hidden' id={this.props.sppsitem.info.number}> 
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tr>
                <td className='itemName'>Menu number</td>
                <td className='itemDisc' colspan='4'>{this.props.sppsitem.info.menuno}</td>
                </tr>
                <tr>
                <td className='itemName'>Description</td>
				<td className='itemprice'colspan='4'>{this.props.sppsitem.info.desc1}</td>	
                </tr>
                <tr>
                <td className='itemName'>Head price</td>
				<td className='itemDescription'colspan='4'>{this.props.sppsitem.info.headprce}</td>	
                </tr>
                <thead>
                    <tr>
                        <th className='tablehead'>Line no</th>
                        <th className='tablehead'>Product no</th>
                        <th className='tablehead'>Unitprice</th>
                        <th className='tablehead'>Qty</th>
                        <th className='tablehead'>Type</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
           </div> 
        );
	}
}