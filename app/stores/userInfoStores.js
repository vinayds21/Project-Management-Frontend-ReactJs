import {EventEmitter} from "events";
import dispatcher from "../dispatchers/dispatcher";

class UserInfoStores extends EventEmitter{
	constructor(){
		super();
		this.initData();
	}

	initData(){
		this.userInfo={};
	}

	showSnackbar(str){
		console.log('stores', str);
		this.snackbarStr = str;
		this.emit('change','snackbar');
	}

	showLoader(loader){
		this.loader = loader;
		this.emit('change','loader');
	}

	setUserData(userData){
		this.userInfo = userData;
		console.log('in emit', this.userInfo);
		this.emit('change', 'userInfo');
	}

	_getUserInfo(){
		return this.userInfo;
	}

	_handleActions(action){
		switch(action.type){
			case 'SNACKBAR' : {
				this.showSnackbar(action.str);
				break;
			}
			case 'LOADER' : {
				this.showLoader(action.loader);
				break;
			}
			case 'USERINFO':{
				this.setUserData(action.response);
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
