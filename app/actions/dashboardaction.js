import dispatcher from "../dispatchers/dispatcher";
import DashboardWebAPIUtils from "../utils/dashboardWebAPIUtils";

export function getProjects(inputData){
    DashboardWebAPIUtils._getProjects(inputData);
}

export function getTasks(inputData){
    DashboardWebAPIUtils._getTasks(inputData);
}

export function getParticularProjectDetails(inputData) {
    DashboardWebAPIUtils._getParticularProjectDetails(inputData);
}

export function submitProject(inputData, methodType) {
    DashboardWebAPIUtils._submitProject(inputData,methodType);
}

export function submitTask(inputData, methodType) {
    DashboardWebAPIUtils._submitTask(inputData,methodType);
}

export function getParticularTaskDetails(inputData) {
    DashboardWebAPIUtils._getParticularTaskDetails(inputData);
}
