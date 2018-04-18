import React from 'react';
import Item from './Item.js';
import WIPItem from './WIPitem.js';
import './Itempanle.css';
import $ from 'jquery';
export default class ItemPanel extends React.Component{
    
	render(){
	    let items = [];
		
		if(this.props.items.length ==0) {
			items.push(<tr><th colSpan="5" className="tempEmpty">No WIP loaded</th></tr>);
		
		}else {
		    this.props.items.forEach(item => {
			    items.push(<Item item={item}/>);
		    });
		}
		
		let wipItems=[];
		if(this.props.wipitems.length>0){
			$('#laHead').removeClass('hideHead');
			this.props.wipitems.forEach(witem=>{
				wipItems.push(<WIPItem witem={witem}/>);
			});
		}
		else
		{
			$('#laHead').addClass('hideHead');
		}

		return (
		  <table className='itemPanel'>
		    <thead>
				<tr>
			    <th className='itemTd'></th>
				<th className='itemTd'></th>
				</tr>
			</thead>
		    <tbody>{items}</tbody>
			<thead id='laHead' className='hideHead'> 
				<tr>
				<th className='Itemno'>NO.</th>
				<th className='ItemPrice'>UnitPrice</th>
				<th className='ItemDisc'>Disc</th>
				<th className='ItemDescription'>Description</th>
				<th className='ItemQty'>Qty</th>
				<th className='ItemAmount'>Amount</th>
				<th className='ItemCode'>Code</th>
				</tr>
			</thead>
			<tbody>{wipItems}</tbody>
		  </table>
		);
	}
}