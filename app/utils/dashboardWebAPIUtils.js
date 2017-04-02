import Api from '../constants/api';
import Url from '../constants/urls';
import dispatcher from "../dispatchers/dispatcher";
import {hashHistory} from 'react-router';

module.exports = {
    _getProjects: function(query) {
        Api._callAPI(Url.ORG_PROJECTS,'get',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                    type:'ALL_PROJECTS',
                    response: dt.res_data,
                });
            }else{
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: Api._showErrorMsg(dt.status,dt.responseJSON||'')
                })
            }
            dispatcher.dispatch({
                type: 'LOADER',
                loader: false
            });
        })
    },
    _submitProject: function(query,methodType) {
        Api._callAPI(Url.SUBMIT_PROJECTS,methodType,query,(type,dt)=> {
            if(type=="success"){
                hashHistory.push('/dashboard');
            }else{
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: Api._showErrorMsg(dt.status,dt.responseJSON||'')
                })
            }
            dispatcher.dispatch({
                type: 'LOADER',
                loader: false
            });
        })
    },
    _submitTask: function(query,methodType) {
        Api._callAPI(Url.SUBMIT_TASK,methodType,query,(type,dt)=> {
            if(type=="success"){
                hashHistory.push('/dashboard');
            }else{
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: Api._showErrorMsg(dt.status,dt.responseJSON||'')
                })
            }
            dispatcher.dispatch({
                type: 'LOADER',
                loader: false
            });
        })
    },
    _getParticularProjectDetails: function(query) {
        Api._callAPI(Url.GET_PROJECT_DETAIL,'get',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                    type:'GET_PROJECT_DETAIL',
                    response: dt,
                });
            }else{
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: Api._showErrorMsg(dt.status,dt.responseJSON||'')
                });
            }
            dispatcher.dispatch({
                type: 'LOADER',
                loader: false
            });
        })
    },
    _getParticularTaskDetails: function(query) {
        Api._callAPI(Url.GET_TASK_DETAIL,'get',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                    type:'GET_TASK_DETAIL',
                    response: dt,
                });
            }else{
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: Api._showErrorMsg(dt.status,dt.responseJSON||'')
                });
            }
            dispatcher.dispatch({
                type: 'LOADER',
                loader: false
            });
        })
    },
    _getTasks: function(query) {
        Api._callAPI(Url.USER_TASKS,'get',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                    type:'ALL_TASKS',
                    response: dt.data,
                });
            }else{
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: Api._showErrorMsg(dt.status,dt.responseJSON||'')
                });
            }
            dispatcher.dispatch({
                type: 'LOADER',
                loader: false
            });
        })
    },
};

