import Api from '../constants/api';
import Url from '../constants/urls';
import dispatcher from "../dispatchers/dispatcher";
import {hashHistory} from 'react-router';

module.exports = {
    _getUserInfo: function(query) {
        Api._callAPI(Url.USER_INFO,'get',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                    type:'USERINFO',
                    response: dt,
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

