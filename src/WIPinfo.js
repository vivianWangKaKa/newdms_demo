class staffItem {
    constructor(item){
	    this.info = {};
	    this.info.name = item.name;
		this.info.value = item.value || 0;		
	}
}
staffItem.key = 0;
class wipItem{
	constructor(witem){
		this.info={};
		this.info.number=witem.number;
		this.info.unitprice=witem.unitprice;
		this.info.disc=witem.disc;
		this.info.description=witem.description;
		this.info.qty=witem.qty;
		this.info.amount=witem.amount;
		this.info.code=witem.code;
	}
}
wipItem.key=0;

export default class STAFF {

    constructor(){
	    this.allStaff = [
		    
		];
		this.staff = [];		
	}
	addStaffItem(item){
		let newItem=new staffItem(item);
		this.allStaff.push(newItem);
		return this;
	}
	addwipItem(item){
		let newwipItem=new wipItem(item);
		this.staff.push(newwipItem);
		return this;
	}
	clearItems(){
		
		this.allStaff.splice(0,this.allStaff.length);
		
		this.staff.splice(0,this.staff.length);
	}
}	


//模拟数据库
STAFF.rawData = [{  name: 'WIP NO.', value: '12345'},
                 { name: 'CHASSIS NO.', value: '12345678912345678'},
				 { name: 'MOLD', value: 'xxx'},
				 { name: 'DATE', value: '2018-03-29'},
				 { name: 'MENU', value: 'irl212'},
                 { name: 'WIP OWNER', value: 'jack'},
                 { name: 'MOLD', value: 'xxx'},
				 { name: 'DATE', value: '2018-03-29'},
				 { name: 'MENU', value: 'irl212'},
				 { name: 'WIP OWNER', value: 'jack'}]