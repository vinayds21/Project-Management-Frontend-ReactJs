import dispatcher from "../dispatchers/dispatcher";
import LoginRegisterWebAPIUtils from "../utils/loginRegisterWebAPIUtils";

export function _userLogin(inputData){
	LoginRegisterWebAPIUtils.userLogin(inputData);
}
