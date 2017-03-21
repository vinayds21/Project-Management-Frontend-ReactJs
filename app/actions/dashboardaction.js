import dispatcher from "../dispatchers/dispatcher";
import DashboardWebAPIUtils from "../utils/dashboardWebAPIUtils";

export function getProjects(inputData){
    DashboardWebAPIUtils._getProjects(inputData);
}

export function getTasks(inputData){
    DashboardWebAPIUtils._getTasks(inputData);
}
