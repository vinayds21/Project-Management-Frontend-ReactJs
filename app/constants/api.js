import React from 'react';
import {Link,hashHistory} from 'react-router';
import dispatcher from "../dispatchers/dispatcher";
import $ from 'jquery';
import BASEURL from '../../config';
import Url from './urls';
import Moment from 'moment';

module.exports ={
	_setKey: function(key,value){
		localStorage.setItem('PT-Management.'+key,value);
	},

	_getKey: function(key){
		return localStorage.getItem('PT-Management.'+key);
	},

	_removeKey: function(key,value){
		localStorage.removeItem(key);
	},

	_clearStorage: function(){
		let len = localStorage.length;
		for (let i = len - 1; i >= 0; i--) {
            let key = localStorage.key(i);
            if (key != null && key != undefined && key.indexOf('PT-Management.') == 0) {
                localStorage.removeItem(key);
            }
        }
	},

	_formatAmount: function(amount)
	{
		if (amount == null || amount == undefined || amount == 0)
	        return '0.00';
	    amount = amount.toString();
	    var isNegative = false;
	    if(parseInt(amount) < 0){
	        isNegative = true;
	        amount = amount.substr(1);
	    }
	    var prefix = amount.split('.')[0];
	    var suffix = amount.split('.')[1]
	    if (suffix == null || suffix == undefined || suffix == 0)
	        suffix = '00';
	    var len = prefix.length;
	    var prefixArrRev = prefix.split('').reverse();
	    var tmp = [];
	    tmp.push(prefixArrRev[0], prefixArrRev[1], prefixArrRev[2]);
	    for (var i = 3; i < len; i++) {
	        if (i % 2 === 1)
	            tmp.push(',');
	        tmp.push(prefixArrRev[i]);
	    }
	    prefix = tmp.reverse().join('');
	    return (isNegative ? '-' : '')+prefix + '.' + suffix;
	},

	_formatName: function(name){
		if(!name)
			return '...';
		return name.split(' ').map((el,i)=>{
			if(i !== 0 && el && el.length)
				return el[0].toUpperCase();
			else
				return el;
		}).join(' ');
	},

	_formatDate: function(date,format)
	{
		let finalDateFormat = moment.utc(date||undefined).local().format(format||'lll');
		return finalDateFormat;
	},

	_sendFormatDate: function(date,format){
		let finalDateFormat = moment.utc(date).format(format||'lll');
		return finalDateFormat;
	},

	_showErrorMsg: function(status,obj){
		let msg = '';
		if(status == 404 || status == 0){
	        if(!navigator.onLine)
	            msg = 'It seems your internet connection is down.Please try to connect to internet first and try again';
	        else
	            msg = 'It seems something wrong with your internet.Please check your internet connection and try again';
	    } else if(status == 400){
	    	msg = (obj && obj.res_str ? obj.res_str : 'Sorry to process your request right now.');
	    } else if(status == 403){
	    	msg = 'You are not permitted for this action';
	    } else if(status == 405){
	    	msg = 'Method Not Allowed';
	    } else if(status == 401){
	        this._clearStorage();
      		hashHistory.push('/');
	    } else if(status == 500){
	        msg = 'Sorry to process your request right now.';
	    } else{
	        msg = 'Sorry! Could not process your request currently, please try after some time.';   
	    }
	    // console.log(status,msg);
	    return msg;
	},

	_callAPI : function(url,method,data,target,cType){
		$.ajax({
			url: BASEURL+url,
			method: method,
			data: data,
			processData: (cType == 'multipart/form-data' ? false :true),
			dataType: (cType == 'multipart/form-data' ? '' :'json'),
			beforeSend: (xhr) => {
				if(this._getKey('uid') && this._getKey('token')){
					xhr.setRequestHeader('REQUEST_TOKEN',this._getKey('uid'));
					xhr.setRequestHeader('UID',this._getKey('token'));
				}
			},
	        contentType: cType ? false : "application/x-www-form-urlencoded",	        
	        success: (data,textStatus, jqXHR) => {
	        	dispatcher.dispatch({ 
                    type: 'LOADER', 
                    loader: false 
                });
	        	target('success',data);        	
	        },
	        error: (jqXhr,textStatus,error) => {
	        	dispatcher.dispatch({ 
                    type: 'LOADER', 
                    loader: false 
                });
                if(jqXhr.status == 401){
                	this._clearStorage();
      				hashHistory.push('/');
                } else{
	        		target('error',jqXhr,textStatus,error);
	        	}
	        }
		});
	},

	_redirectToLogin : function(){
		hashHistory.replace('/');
	},

	_redirectToDashboard : function(){
		hashHistory.replace('/dashboard');
	},
}
