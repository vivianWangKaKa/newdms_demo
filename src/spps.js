

class detail {
    constructor(detail){
        this.info = {};
	    this.info.prodno = detail.prodno;
		this.info.untiprice = detail.unitprice || 0;	
		this.info.qty=detail.qty||0;
        this.info.type=detail.type;	
        this.info.no=detail.no;
	}
}
detail.key = 0;
class sppsItem{
	constructor(sppsItem){
        this.info={};
        this.info.dt=[];
		this.info.number=sppsItem.number;
		this.info.desc1=sppsItem.desc1;
		this.info.menuno=sppsItem.menuno;
        this.info.headprce=sppsItem.headprce;
        
	}
}
sppsItem.key=0;

export default class SPPS {

    constructor(){
	    this.sppsItems = [    
        ];
        /*this.addStaffItem({number:'1',desc1:'description1',menuno:'menu1',headprce:'headprce1'});
        this.addStaffItem({number:'2',desc1:'description2',menuno:'menu2',headprce:'headprce2'});
        this.addStaffItem({number:'3',desc1:'description3',menuno:'menu3',headprce:'headprce3'});
        this.addDetails(1,{menuno:'m0',no:'0',prodno:'prodo0',unitprice:'00',qty:'10',type:'l'});*/
			
	}
	addStaffItem(item){
        let newItem=new sppsItem(item);
      	this.sppsItems.push(newItem);
		return this;
    }
    
    addDetails(sppsindex,item)
    {
        let newDetail=new detail(item);
        this.sppsItems[sppsindex].info.dt.push(newDetail);
        return this;
    }

	clearItems(){
		
		this.sppsItems.splice(0,this.allStaff.length);
		
	}
}	


//模拟数据库
//模拟数据库
SPPS.rawData = [{ name: 'WIP NO.', value: '12345'},
                 { name: 'CHASSIS NO.', value: '12345678912345678'},
				 { name: 'MOLD', value: 'xxx'},
				 { name: 'DATE', value: '2018-03-29'},
				 { name: 'MENU', value: 'irl212'},
                 { name: 'WIP OWNER', value: 'jack'},
                 { name: 'MOLD', value: 'xxx'},
				 { name: 'DATE', value: '2018-03-29'},
				 { name: 'MENU', value: 'irl212'},
				 { name: 'WIP OWNER', value: 'jack'}]