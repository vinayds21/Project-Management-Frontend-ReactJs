import Api from '../constants/api';
import Url from '../constants/urls';
import dispatcher from "../dispatchers/dispatcher";
import {hashHistory} from 'react-router';

module.exports = {
    userLogin: function(query) {
        Api._callAPI(Url.USER_LOGIN,'post',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: dt.res_str,
                });
                this._storeUserCreds(dt.res_data);
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
    
    _storeUserCreds:function(userCreds) {
        console.log('userCreds', userCreds);
        if (userCreds && Object.keys(userCreds).length) {
            Api._setKey('token', userCreds.token);
            Api._setKey('uid', userCreds.uid);
        }
    }
};

