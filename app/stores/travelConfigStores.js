import {EventEmitter} from "events";
import dispatcher from "../dispatchers/dispatcher";

class TravelConfigStores extends EventEmitter{
	constructor(){
		super();
		this.initData();
	}

	initData(){
		this.tarvelConfigData=[];
	}

	
	_getTravelConfig(tarvelConfigList){
		this.tarvelConfigData = tarvelConfigList;
		this.emit('change');
	}

	_handleActions(action){
		switch(action.type){
			case 'GET_TRAVEL_CONFIG' : {
				this._getTravelConfig(action.response);
				break;
			}
			case 'CLEAR_ALL':{
				this.initData();
				break;
			}
		}
	}
}
const travelConfigStores = new TravelConfigStores;
dispatcher.register(travelConfigStores._handleActions.bind(travelConfigStores));
export default travelConfigStores;