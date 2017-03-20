import {EventEmitter} from "events";
import dispatcher from "../dispatchers/dispatcher";

class DashboardStores extends EventEmitter{
    constructor(){
        super();
        this.projects = [];
    }

    _setAllProjects(projectArr){
        this.projects = projectArr;
        this.emit('change', 'org_projects')
    }

    _getAllOrgProjects(){
        return this.projects;
    }

    _handleActions(action){
        switch(action.type){
            case 'ALL_PROJECTS':{
                this._setAllProjects(action.response);
                break;
            }
        }
    }
}
const dashboardStores = new DashboardStores;
dispatcher.register(dashboardStores._handleActions.bind(dashboardStores));
export default dashboardStores;
