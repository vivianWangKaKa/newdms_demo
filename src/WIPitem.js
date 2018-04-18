import React from 'react';
import './Item.css';
export default class WIPItem extends React.Component{	
	render(){
		return (
			  <tr
				style={{'cursor': 'pointer'}}
			  >
				<td className='itemno'>{this.props.witem.info.number}</td>
				<td className='itemprice'>{this.props.witem.info.unitprice}</td>		
                <td className='itemDisc'>{this.props.witem.info.disc}</td>
				<td className='itemDescription'>{this.props.witem.info.description}</td>	
                <td className='itemQty'>{this.props.witem.info.qty}</td>
				<td className='itemAmount'>{this.props.witem.info.amount}</td>	
				<td className='itemCode'>{this.props.witem.info.code}</td>			
			  </tr>
		);
	}
}