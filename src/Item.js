import React from 'react';
import './Item.css';
export default class Item extends React.Component{	
	render(){
		return (
			  <tr
				style={{'cursor': 'pointer'}}
			  >
				<td className='itemName'>{this.props.item.info.name}</td>
				<td className='itemValue' colspan='6'>{this.props.item.info.value}</td>				
			  </tr>
		);
	}
}