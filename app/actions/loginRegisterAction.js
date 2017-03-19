import dispatcher from "../dispatchers/dispatcher";
import LoginRegisterWebAPIUtils from "../utils/loginRegisterWebAPIUtils";

export function _userLogin(inputData){
	LoginRegisterWebAPIUtils.userLogin(inputData);
}

export function _companyRegister(inputData){
    LoginRegisterWebAPIUtils.companyRegister(inputData);
}

export function _firstUserRegister(inputData){
    LoginRegisterWebAPIUtils.firstUserRegister(inputData);
}
