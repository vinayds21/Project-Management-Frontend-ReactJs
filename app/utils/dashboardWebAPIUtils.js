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
};

