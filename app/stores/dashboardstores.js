import {EventEmitter} from "events";
import dispatcher from "../dispatchers/dispatcher";

class DashboardStores extends EventEmitter{
    constructor(){
        super();
        this.projects = [];
        this.tasks = [];
        this.ind_project = {};
        this.ind_task = {};
    }

    _setAllProjects(projectArr){
        this.projects = projectArr;
        this.emit('change', 'org_projects');
    }

    _getAllOrgProjects(){
        return this.projects;
    }

    _getAllMyTasks(){
        return this.tasks;
    }

    _setAllTasks(allTasks){
        this.tasks = allTasks;
        this.emit('change', 'my_tasks');
    }

    _setProjectDetails(project_data){
        this.ind_project = project_data;
        this.emit('change', 'particular_project');
    }

    _getIndProjectDetails(){
        return this.ind_project;
    }

    _setTaskDetails(dataObj){
        this.ind_task = dataObj;
        this.emit('change', 'ind_task');
    }

    _getIndTaskDetails(){
        return this.ind_task;
    }

    _handleActions(action){
        switch(action.type){
            case 'ALL_PROJECTS':{
                this._setAllProjects(action.response);
                break;
            }
            case 'ALL_TASKS':{
                this._setAllTasks(action.response);
                break;
            }
            case 'GET_PROJECT_DETAIL':{
                this._setProjectDetails(action.response);
                break;
            }
            case 'GET_TASK_DETAIL':{
                this._setTaskDetails(action.response);
                break;
            }
        }
    }
}
const dashboardStores = new DashboardStores;
dispatcher.register(dashboardStores._handleActions.bind(dashboardStores));
export default dashboardStores;
