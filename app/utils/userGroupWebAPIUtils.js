import Api from '../constants/api';
import Url from '../constants/urls';
import dispatcher from "../dispatchers/dispatcher";
import {hashHistory} from 'react-router';
module.exports = {
    _createGroup: function(query) {
        Api._callAPI(Url.CREATE_GROUP,'post',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: dt.res_str,
                })
                hashHistory.goBack();
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
    _editGroup: function(query) {
        Api._callAPI(Url.EDIT_GROUP,'post',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: dt.res_str,
                })
                hashHistory.goBack();
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
    _getAllGroup: function(query) {
        Api._callAPI(Url.GET_GROUPS,'get',query,(type,dt)=> {
            if(type=="success"){
                let data = dt.res_data;
                dispatcher.dispatch({
                        type:'GET_GROUP',
                        groups:data.group_details
                })
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
        });
    },
    _getParticularGroup: function(query) {
        Api._callAPI(Url.EDIT_GROUP,'get',query,(type,dt)=> {
            if(type=="success"){
                let data = dt.res_data;
                dispatcher.dispatch({
                        type:'GET_PARTICULAR_GROUP',
                        roles:data.roles,
                        description:data.description,
                        members:data.members,
                        group_name:data.group_name,
                        default_group:data.default_group,

                })
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
        });
    }
};

