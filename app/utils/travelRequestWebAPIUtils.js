import Api from '../constants/api';
import Url from '../constants/urls';
import {hashHistory} from 'react-router';
import dispatcher from "../dispatchers/dispatcher";
import * as GenericWorkflowAction from '../actions/genericworkflowaction';
import SearchFieldWebAPIUtils from "./searchWebAPIUtils";

module.exports = {    
    createTravelRequestForm: function(query,submit,rType,trfObj) {
        dispatcher.dispatch({
            type: 'LOADER',
            loader: true
        });
        Api._callAPI(Url.CREATE_TRAVEL_REQUEST_FORM,'post',query,(type,dt)=> {
            if(type=="success"){
                let data = dt.res_data;
                if (trfObj) {
                    dispatcher.dispatch({
                        type:'SNACKBAR',
                        str: dt.res_str,
                    });
                    let data = {limit:trfObj.limit, offset:trfObj.offset}
                    SearchFieldWebAPIUtils._getAllPendingItemsAPI({item : 'trf'}, 'trf');
                    SearchFieldWebAPIUtils._get_SavedReports_unsubmittedExpense_savedTrf_FromUSerDashboard('trf', data, trfObj.url);
                }
                if(!submit){
                    if(query.constructor.toString().search('FormData()') !== -1){
                        if(query.get('trf_id')){
                            this.fetchTravelRequest({trf_id: query.get('trf_id')});
                        } else {
                            hashHistory.replace('travel/'+data.trf_id);
                        }
                    } else {
                        if(query.trf_id){
                            this.fetchTravelRequest({trf_id: data.trf_id});
                            /*dispatcher.dispatch({
                                type:'SET_ANY_KEY_TRAVEL',
                                key: 'trf_id',
                                value: data.trf_id
                            });*/
                        }
                    }
                }else{
                    hashHistory.goBack();
                    dispatcher.dispatch({
                        type: 'LOADER',
                        loader: false
                    })
                }                
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: dt.res_str,
                })
                if(!rType && !query.trf_id){
                    hashHistory.replace('travel/'+data.trf_id);
                }
                
            }else{
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: Api._showErrorMsg(dt.status,dt.responseJSON||'')
                });
                let data = dt.res_data;
                if(data && data.policy_json){
                    dispatcher.dispatch({
                        type: 'TRF_POLICY_VIOLATION',
                        response: data.policy_json
                    });
                    dispatcher.dispatch({
                        type: 'LOADER',
                        loader: false
                    });
                    return;
                }
                dispatcher.dispatch({
                    type: 'LOADER',
                    loader: false
                });
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: Api._showErrorMsg(dt.status,dt.responseJSON||'')
                });
            }
        },rType);
    },
    getTravelConfigFields: function(query) {
        // dispatcher.dispatch({
        //     type: 'LOADER',
        //     loader: false
        // });
        Api._callAPI(Url.GET_TRAVEL_CONFIG_FIELDS,'get',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                        type:'SET_ANY_KEY_TRAVEL',
                        key: 'travelConfig',
                        value: dt.res_data
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
    getChildConfigFields: function(query)
    {
        Api._callAPI(Url.GET_TRAVEL_CONFIG_FIELDS,'get',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                        type:'SET_ANY_KEY_TRAVEL',
                        key: 'childTravelConfig',
                        value: dt.res_data
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
    saveTravelRequest: function(query,editType,workflowParams){
        dispatcher.dispatch({
            type: 'LOADER',
            loader: true
        });
        Api._callAPI(Url.CREATE_TRAVEL_REQUEST,'post',query,(type,dt)=> {
            if(type=="success"){    
                let queryObj = {trf_id: query.trf_id}
                if(editType && editType === "workflow"){
                    GenericWorkflowAction.getResourceDetails({
                        container: workflowParams.id,
                        resource_id: workflowParams.resource_id
                    });
                     dispatcher.dispatch({
                        type:'SNACKBAR',
                        str: dt.res_str,
                    })
                }
                else{
                    dispatcher.dispatch({
                        type:'SNACKBAR',
                        str: dt.res_str,
                    });
                    this.fetchTravelRequest(queryObj);
                }
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
    fetchTravelRequest: function(query)
    {
        dispatcher.dispatch({
            type: 'LOADER',
            loader: true
        });
        Api._callAPI(Url.FETCH_TRAVEL_REQUEST,'get',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                        type:'SET_ANY_KEY_TRAVEL',
                        key: 'allTrData',
                        value: dt.res_data
                })
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: dt.res_str,
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
    deleteTravelRequestField : function(query)
    {
        var tr_id = query.tr_id;
        var data = {tr_id : tr_id};
        dispatcher.dispatch({
            type: 'LOADER',
            loader: true
        });
        Api._callAPI(Url.DELETE_TRAVEL_REQUEST,'post',data,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: dt.res_str,
                });
                let queryObj = {trf_id: query.trf_id}
                dispatcher.dispatch({
                    type: 'LOADER',
                    loader: false
                });
                this.fetchTravelRequest(queryObj);
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
    addExpenseToTr: function(query)
    {
        dispatcher.dispatch({
            type: 'LOADER',
            loader: true
        });
        Api._callAPI(Url.SET_TR_EXPENSE,'post',query,(type,dt)=> {
            if(type=="success"){                
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: dt.res_str,
                });
                dispatcher.dispatch({
                    type: 'LOADER',
                    loader: false
                });
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
        });
    },
    deleteExpenseTr: function(query, twf_id)
    {
        dispatcher.dispatch({
            type: 'LOADER',
            loader: true
        });
        Api._callAPI(Url.DELETE_TR_EXPENSE,'post',query,(type,dt)=> {
            if(type=="success"){                
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: dt.res_str,
                });
                dispatcher.dispatch({
                    type: 'LOADER',
                    loader: false
                });
                    GenericWorkflowAction.getDetails(twf_id);
                /*if(resType=="workflow_delete_te"){
                    GenericWorkflowAction.getDetails(twf_id);
                }else{
                    let queryObj = {trf_id: trf_id}
                    this.fetchTravelRequest(queryObj);
                }*/
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
    getTApendingTRFData: function(query){
        dispatcher.dispatch({
            type: 'LOADER',
            loader: true
        });
        Api._callAPI(Url.VIEW_TA_PENDING_TRF,'get',query,(type,dt)=> {
            if(type=="success"){
                dispatcher.dispatch({
                        type:'SET_ANY_KEY_TRAVEL',
                        key: 'taPendingTrf',
                        value: dt.res_data
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
    undoModifiedTRF: function(query,workflowParams){
        Api._callAPI(Url.UNDO_MODIFIED_TRF,'post',query,(type,dt)=> {
            if(type=="success"){
                GenericWorkflowAction.getResourceDetails({
                    container: workflowParams.id,
                    resource_id: workflowParams.resource_id
                });
                dispatcher.dispatch({
                    type:'SNACKBAR',
                    str: dt.res_str,
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
    fetchCAlist: function(query){
      Api._callAPI(Url.FETCH_CA_LIST,'get',query,(type,dt)=> {
           if(type=="success"){
               dispatcher.dispatch({
                       type:'SET_ANY_KEY_TRAVEL',
                       key: 'cityAdminlist',
                       value: dt.res_data
               })                
           }else{
               dispatcher.dispatch({
                   type:'SNACKBAR',
                   str: Api._showErrorMsg(dt.status,dt.responseJSON||'')
               })
           }
       }); 
   },
   setCAlist: function(query){
       dispatcher.dispatch({
           type: 'LOADER',
           loader: true
       });
       Api._callAPI(Url.SET_CA_LIST,'post',query,(type,dt)=> {
           if(type=="success"){
               dispatcher.dispatch({
                   type:'SNACKBAR',
                   str: dt.res_str,
               });              
           }else{
               dispatcher.dispatch({
                   type:'SNACKBAR',
                   str: Api._showErrorMsg(dt.status,dt.responseJSON||'')
               })
           }
       });
       dispatcher.dispatch({
           type: 'LOADER',
           loader: false
       });
   },
};
