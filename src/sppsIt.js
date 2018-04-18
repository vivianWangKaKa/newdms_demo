import React from 'react';
import './Item.css';
export default class ItemDetail extends React.Component{	
	render(){
		return (
			  <tr
				style={{'cursor': 'pointer'}}
			  >
                <td>{this.props.detail.info.no}</td>
                <td>{this.props.detail.info.prodno}</td>
                <td>{this.props.detail.info.unitprice}</td>
                <td>{this.props.detail.info.qty}</td>
                <td>{this.props.detail.info.type}</td>   
			  </tr>
		);
	}
}