import React from 'react';
import Items from './sppsItem.js';
//import WIPItem from './sppsItem.js';
//import sppstable from './sppsItem.js';
import './sppsTable.css';
import $ from 'jquery';
export default class SppsPanel extends React.Component{
    
	render(){
	    let items = [];
		
		if(this.props.items.length ==0) {
			items.push(<tr><th colSpan="5" className="tempEmpty">No WIP loaded</th></tr>);
		}
		else {
			let nullStr="null";
			if(this.props.items[0].info.number==nullStr){
					$('#sppsTable').addClass('hideHead');
					$('#Message').removeClass('hideHead');
			}
			else
			{
					$('#sppsTable').removeClass('hideHead');
					$('#Message').addClass('hideHead');
			}
				this.props.items.forEach(sppsItem=>{
					items.push(<Items sppsitem={sppsItem}/>);
				});
		}
		
		return (
			<div>
				<div id="sppsTable" className='hideHead'>{items}</div>
				<p id='Message'  className='hideHead'>No SPPS found!</p>
			</div>
		);
	}
}