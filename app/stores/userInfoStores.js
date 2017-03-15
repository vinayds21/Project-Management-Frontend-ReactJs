import {EventEmitter} from "events";
import dispatcher from "../dispatchers/dispatcher";

class UserInfoStores extends EventEmitter{
	constructor(){
		super();
		this.initData();
	}
	initData(){
		this.userInfo={};
		this.userGroupInfo={};
		this.userPendingItems={};
		this.userHistoryItems={};
		this.userAdhocItems={};
		this.userRoleList={};
		this.orgBal = '';
		this.snackbarStr = '';
		this.snackbarComponentStr = '';
		this.controlledUserInfo = '';
		this.defaultCurrency = 'INR';
		this.defaultOrgCurrency= '';
		this.successRoleChageBit = false;
		this.myRolesAndSuperiors = {};
	}

	_getMyRoleAndSuperior(data)
	{
		this.myRolesAndSuperiors = data;
		this.emit('change', 'getRolesAndSuperiors');
	}

	userGetRoleAndSuperior()
	{
		return this.myRolesAndSuperiors;
	}

	_getUserInfo(userInfoList){
		this.userInfo = userInfoList;
		this.defaultCurrency = userInfoList.default_currency||'INR';
		this.emit('change','userinfo');
	}
	getDefaultCurrency(){
		return this.defaultCurrency;
	}
	_getUserPermission(key,type){
		//type - if true then it will do OR condition
		let list = this.userInfo && this.userInfo.permission_list ? this.userInfo.permission_list : [];
		if(typeof(key) === 'string'){
			return (list.indexOf(key) !== -1 ? true: false);
		}
		else{
			let perm = type ? false : true;
			for(let i in key){
				if(!type && list.indexOf(key[i]) === -1)
					return false;
				if(type && list.indexOf(key[i]) !== -1)
					perm = true;
			}
			return perm;

		}
	}
	getOrgDefaultCurrency(){
		return this.defaultOrgCurrency;
	}
	_getEmployeeGroupInfo(employeeGroupInfo,id){
		this.userRoleList.groups.filter((el) => {
			if(el.group_id == id){
				el.info = employeeGroupInfo;
			}
			return el;
		});
		this.emit('change','userinfo');
	}
	_getUserPendingItems(pending){
		this.userPendingItems = pending;
		this.emit('change','pendingitems');
	}
	_getUserHistoryItems(history){
		this.userHistoryItems = history;
		this.emit('change','historyitems');
	}
	_getUserAdhocItems(adhoc,cnt){
		let tempval = adhoc ? adhoc.adhoc_items : {};
			if(cnt && tempval && tempval.length>0){
	 			let count = 0;
		 		tempval.filter((el) => {
		 			count += el.count;
		 		})
		 		if(count && count !== 0){
		 			this.emit('change','adhoclength');		 			
		 		}
	 		}else{
	 			this.userAdhocItems = adhoc;
	 			this.emit('change','adhocitems');
	 		}
	}
	_getUserRolesGroups(userList){
		this.userRoleList = userList;
		this.emit('change','userrolegroups');
	}
	isUserInfoAPIDone(){
		return Boolean(Object.keys(this.userInfo).length);
	}
	getAllUserInfoStores(){
		return this.userInfo;
	}
	getUserGroupInfoStores(key){
		return this.userGroupInfo;
	}
	getAllUserPendingItems(){
		return this.userPendingItems;
	}
	getAllUserHistoryItems(){
		return this.userHistoryItems;
	}
	getAllUserAdhocItems(){
		return this.userAdhocItems;
	}
	getAllUserRoleGroupsStores(key){
		return this.userRoleList;
	}
	_getUserWallets(){
		return this.userInfo.wallets||[];
	}
	getSnackbarStr(){
		return this.snackbarStr;
	}
	getLoader(){
		return this.loader;
	}
	getOrgBalance(){
		return this.orgBal;
	}
	_getWalletName(wallet_id){
		if(this.userInfo.wallets){
			let wallets = this.userInfo.wallets;
			for(let i in wallets){
				if(wallets[i].wallet_id == wallet_id)
					return wallets[i].wallet_name;
			}
		}
		return '';
	}
	_getTotalWalletBalance(type){
		if(type === 'Employee'){
			if(this.userInfo && this.userInfo.wallets){
				let sum = 0;
				this.userInfo.wallets.filter((el)=>{
					sum += parseFloat(el.trans_limit);
				});
				return sum.toFixed(2);
			}
			return '';
		} else {
			return this.orgBal;
		}
	}
	showSnackbar(str){
		this.snackbarStr = str;
		this.emit('change','snackbar');
	}
	showLoader(loader){
		this.loader = loader;
		this.emit('change','loader');
	}
	_showBalance(val,currency){
		this.orgBal = val;
		this.defaultOrgCurrency = currency;
		this.emit('change','orgBalance');
	}
	showMessageComponent(message){
		this.snackbarComponentStr = message;
		this.emit('change','componentmessage');
	}

	showMessage(){
		return this.snackbarComponentStr;
	}
	_updateCardStatus(status, msg,id){
		this.userInfo.cards = this.userInfo.cards.filter((el)=>{
			if(el.card_kit_id == id){
				el.is_active=(status.cur_status == "Active") ? true: false;
			}
			return true;
		})
		this.emit('change', 'is_model');
	}

	_updateControlledUserInfo(newValue){
		this.controlledUserInfo = newValue;
		this.emit('change', 'CONTROLLED_USER_INFO');
	}

	_getControlledUserInfo(){
		return this.controlledUserInfo;
	}

	_getControlledUserRoles(employeeGroupInfo, id){
		this.controlledUserInfo.groups.filter((el) => {
			if(el.group_id == id){
				el.info = employeeGroupInfo;
			}
			return el;
		});
		this.emit('change','CONTROLLED_USER_INFO');
	}

	_walletInfo(wallet_id){
		let wallets = this.userInfo.wallets || [];
		let info = {};
		for(let i = 0; i < wallets.length; i++){
			if(wallets[i].wallet_id == wallet_id){
				info = {
					"walletName": wallets[i].wallet_name,
					"walletBalance": wallets[i].trans_limit,
				}
			}
		}
		return info;
	}

	_getImprestWalletId(){
		let wallets = this.userInfo.wallets || [];
		let wallet_id = "";
		for(let i = 0; i < wallets.length; i++){
			if(wallets[i].wallet_type == "Imprest"){
				wallet_id = wallets[i].wallet_id;
				break;
			}
		}
		return wallet_id || '';
	}

	_getDefaultWalletId(){
		let wallets = this.userInfo.wallets || [];
		let wallet_id = "";
		for(let i = 0; i < wallets.length; i++){
			if(wallets[i].is_default == "True"){
				wallet_id = wallets[i].wallet_id;
				break;
			}
		}
		return wallet_id || '';
	}

	_setApproverRoleSuccess(str)
	{
		if (str == 'success') {
			this.successRoleChageBit = true;
			this.emit('change','editSuccess');
		}
	}

	_getApproveSuccessBit()
	{
		return this.successRoleChageBit;
	}

	_setDefaultWallet(id) {
		this.userInfo.wallets = this.userInfo.wallets.map((el)=>{
			if(el.wallet_id === id)
				el.is_default = 'True';
			else
				el.is_default = 'False';
			return el;
		});
		this.emit('change','userinfo');
	}

	_handleActions(action){
		switch(action.type){
			case 'GET_USER_INFO' : {
				this._getUserInfo(action.response);
				break;
			}
			case 'EMPLOYEE_GROUPINFO' : {
				this._getEmployeeGroupInfo(action.response,action.group_id);
				break;
			}
			case 'PENDING_ITEM' : {
				this._getUserPendingItems(action.response);
				break;
			}
			case 'HISTORY_ITEM' : {
				this._getUserHistoryItems(action.response);
				break;
			}
			case 'ADHOC_ITEM' : {
				this._getUserAdhocItems(action.response,action.adhocCnt);
				break;
			}
			case 'ROLES_GROUPS' : {
				this._getUserRolesGroups(action.response);
				break;
			}
			case 'SNACKBAR' : {
				this.showSnackbar(action.str);
				break;
			}
			case 'LOADER' : {
				this.showLoader(action.loader);
				break;
			}
			case 'BALANCE': {
				this._showBalance(action.balance,action.currency);
				break;
			}
			case 'SNACKBAR_COMPONENT' : {
				this.showMessageComponent(action.errormessage);
				break;
			}
			case 'UPDATE_CARD_STATUS_PARTICULAR': {
				this._updateCardStatus(action.response, action.str,action.cardId);
				break;
			}
			case 'CHANGEVIEW': {
				this.emit('change','changeview');
				break;
			}
			case 'INFOUPDATED': {
				this.emit('change', 'infosaved');
				break;
			}
			case 'CONTROLLED_USER_INFO': {
				this._updateControlledUserInfo(action.response);
				break;
			}
			case 'CONTROLLED_USER_GROUP_INFO': {
				this._getControlledUserRoles(action.response, action.group_id);
				break;
			}
			case 'DEFAULT_WALLET': {
				this._setDefaultWallet(action.response);
				break;
			}
			case 'APPROVER_ROLE_CHANGE': {
				this._setApproverRoleSuccess(action.response);
				break;
			}
			case 'GET_USER_ROLES_SUPERIORS':{
				this._getMyRoleAndSuperior(action.response);
				break;
			}
			case 'ONBOARD_ERROR': {
				this.emit('change','oboarderror');
				break;
			}
			case 'CLEAR_ALL':{
				this.initData();
				break;
			}
		}
	}
}
const userInfoStores = new UserInfoStores;
dispatcher.register(userInfoStores._handleActions.bind(userInfoStores));
export default userInfoStores;
