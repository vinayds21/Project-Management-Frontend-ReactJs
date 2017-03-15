import {EventEmitter} from "events";
import dispatcher from "../dispatchers/dispatcher";

class SettlementStores extends EventEmitter{
	constructor(){
		super();
		this.initData();
	}
	initData(){
		this.allSellementRules=[];
		this.allEmpSettlementData = {};	   
		this.allSettlementMethod = [];
		this.allOrgSettlementData = {};		
	}

	_getSettlementRule(){
		return this.allSellementRules;
	}

	_getSettlementMethod(){
		return this.allSettlementMethod;
	}

	_getAllSettlementMethod(methodList)
	{
		this.allSettlementMethod = methodList;
		this.emit('change');
	}

	_getAllSettlementRules(ruleList){
		this.allSellementRules = ruleList;
		this.emit('change');
	}

	_getAllEmpSettlementData(empSettlementList,type){
		if(type){
			this.allEmpSettlementData = empSettlementList;
		}else{
			this.allEmpSettlementData['current'] = Object.assign(this.allEmpSettlementData.current,empSettlementList.current);
			console.log(this.allEmpSettlementData.current.length,'11',type);
		}		
		this.emit('change', 'empSettlementData');
	}
	
	_getAllEmpSettlement(){
		return this.allEmpSettlementData;
	}

	_handleActions(action){
		switch(action.type){
			case 'GET_SETTLEMENT_RULES' : {
				this._getAllSettlementRules(action.rules);
				break;
			}
			case 'SETTLEMENT_METHOD' : {
				this._getAllSettlementMethod(action.settlementMethod);
				break;
			}
			case 'GET_SETTLEMENT_DATA' : {
				this._getAllEmpSettlementData(action.empSettlementData,action.response);
				break;
			}
			case 'GET_ORG_SETTLEMENT' : {
				this._getAllOrgSettlementData(action.orgSettlementData);
				break;
			}
			case 'CLEAR_ALL':{
				this.initData();
				break;
			}
		}
	}
	
}
const settlementStores = new SettlementStores;
dispatcher.register(settlementStores._handleActions.bind(settlementStores));
export default settlementStores;