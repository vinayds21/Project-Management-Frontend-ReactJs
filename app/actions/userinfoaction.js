import dispatcher from "../dispatchers/dispatcher";
import UserInfoWebAPIUtils from "../utils/userinfoWebAPIUtils";

export function getUserInfo(inputData){
    UserInfoWebAPIUtils._getUserInfo(inputData);
}
