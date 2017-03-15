import dispatcher from "../dispatchers/dispatcher";
import TravelRequestWebAPIUtils from "../utils/travelRequestWebAPIUtils";


export function _createTravelRequestForm(inputValue,type,rType,trfObj){
	TravelRequestWebAPIUtils.createTravelRequestForm(inputValue,type,rType,trfObj);
}

export function _getTravelConfigFields(inputValue){
	TravelRequestWebAPIUtils.getTravelConfigFields(inputValue);
}

export function _getChildConfigFields(inputValue){
	TravelRequestWebAPIUtils.getChildConfigFields(inputValue);
}

export function _saveTravelRequest(inputValue,type,workflowParams){
	TravelRequestWebAPIUtils.saveTravelRequest(inputValue,type,workflowParams);
}

export function _getTravelRequestData(inputValue){
	TravelRequestWebAPIUtils.fetchTravelRequest(inputValue);
}

export function _deleteTravelRequestField(inputValue){
	TravelRequestWebAPIUtils.deleteTravelRequestField(inputValue);
}

export function _addExpenseToTr(inputValue){
	TravelRequestWebAPIUtils.addExpenseToTr(inputValue);
}

export function _deleteExpenseTr(inputValue, twf_id){
	TravelRequestWebAPIUtils.deleteExpenseTr(inputValue, twf_id);
}

export function _getTApendingTRFData(inputValue){
	TravelRequestWebAPIUtils.getTApendingTRFData(inputValue);
}
export function _undoModifiedTRF(inputValue,workflowParams){
	TravelRequestWebAPIUtils.undoModifiedTRF(inputValue,workflowParams);
}
export function _fetchCAlist(inputValue){
	TravelRequestWebAPIUtils.fetchCAlist(inputValue);
}
export function _setCAlist(inputValue){
	TravelRequestWebAPIUtils.setCAlist(inputValue);
}
