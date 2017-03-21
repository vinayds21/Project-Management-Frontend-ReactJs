/*
Author: Vinay D S
Page Desc: Main dashboard page
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {Grid, Cell} from 'react-mdl';
import Style from '../constants/style';
import Header from '../constants/header';
import {hashHistory, Link} from 'react-router';
import SaveButton from '../constants/savebutton';
import SecondarySaveButton from '../constants/secondarysavebutton';
import Api from '../constants/api';

import UserInfoStores from '../stores/UserInfoStores';
import * as UserInfoAction from '../actions/userinfoaction';

import DashboardStores from '../stores/dashboardStores';
import * as DashboardAction from '../actions/dashboardaction';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo:{},
            allProjects:[],
            alltasks:[],
        }
        this._getUserStoreChange = this._getUserStoreChange.bind(this);
        this._getDashboardStoreChange = this._getDashboardStoreChange.bind(this);
        this._getProjectView = this._getProjectView.bind(this);
    }

    componentWillMount(){
        Api._checkAuth();
        UserInfoAction.getUserInfo({user_id:Api._getKey('user_id')});
        DashboardAction.getProjects({org_id:Api._getKey('org_id')});
        DashboardAction.getTasks({user_id:Api._getKey('user_id')});

        UserInfoStores.on('change', this._getUserStoreChange);
        DashboardStores.on('change', this._getDashboardStoreChange);
    }

    componentWillUnmount(){
        UserInfoStores.removeListener('change', this._getUserStoreChange);
        DashboardStores.removeListener('change', this._getDashboardStoreChange);
    }

    _getUserStoreChange(type){
        if (type == 'userInfo') {
            let userInfo = UserInfoStores._getUserInfo();
            if (userInfo && Object.keys(userInfo).length) {
                console.log('userinfo', userInfo);
                this.setState({userInfo:userInfo});
            }
        }
    }

    _getDashboardStoreChange(type){
        if (type == 'org_projects') {
            let allProjects = DashboardStores._getAllOrgProjects();
            if (allProjects && allProjects.length) {
                console.log('allProjects',allProjects);
                this.setState({allProjects:allProjects});
            }
        }
        if (type == 'my_tasks') {
            let alltasks = DashboardStores._getAllMyTasks();
            if (alltasks && alltasks.length) {
                console.log('alltasks',alltasks);
                this.setState({alltasks:alltasks});
            }
        }
    }

    _getTaskView(){
        let allTasks = this.state.alltasks;
        if (allTasks && allTasks.length) {
            let tempArr = [];
            for(let i=0;i<allTasks.length;i++){
                tempArr.push(<Grid key={'myTasks-'+i} style={{padding:0, margin:0, borderBottom:'1px solid #e0e0e0'}}>
                                <Cell col={8}>
                                    <h5 style={{fontFamily:'Roboto-Medium'}}>{allTasks[i].name}</h5>
                                    <div style={{fontFamily:'Roboto-Light'}}>
                                        <div>Description: {allTasks[i].description || 'No Description'}</div>
                                        <div>Related Project: {allTasks[i].project.name}</div>
                                    </div>
                                </Cell>
                                <Cell col={4}>
                                    <div style={{fontFamily:'Roboto-Light', marginTop:5}}>
                                        <div>Status: {allTasks[i].status}</div>
                                        <div>Type: {allTasks[i].task_type}</div>
                                    </div>
                                </Cell>
                            </Grid>);
            }
            return tempArr;
        }
        else{
            return (<div><h5 style={{fontFamily:'Roboto-Medium'}}>No Tasks Found</h5></div>);
        }
    }

    _getProjectView(){
        let AllProjectsArr = this.state.allProjects;
        if (AllProjectsArr && AllProjectsArr.length) {
            let temp = [];
            for(let i=0;i<AllProjectsArr.length;i++){
                temp.push(<div key={'project-'+i}>
                            <h5 style={{fontFamily:'Roboto-Medium'}}>{AllProjectsArr[i].project_name}</h5>
                            <div style={{fontFamily:'Roboto-Light'}}>
                                <div>Description: {AllProjectsArr[i].project_desc || 'No Description'}</div>
                                <div>Status: {AllProjectsArr[i].project_status}</div>
                            </div>
                            <Divider style={{marginTop:10}}/>
                        </div>);
            }
            return temp;
        }
        else{
            return (<div><h5 style={{fontFamily:'Roboto-Medium'}}>No Projects Found</h5></div>);
        }
    }

    _getView(){
        return (<div>
                    <Header userName={this.state.userInfo.first_name+' '+this.state.userInfo.last_name}/>
                    <div>
                        <Grid>
                            <Cell col={6}>
                                <Card expanded={true}>
                                    <CardHeader
                                      title="All Projects"
                                      subtitle="All project list"
                                      actAsExpander={true}
                                      showExpandableButton={false}
                                    />
                                    <CardText expandable={true}>
                                        {this._getProjectView()}
                                    </CardText>
                                </Card>
                            </Cell>
                            <Cell col={6}>
                                <Card expanded={true}>
                                    <CardHeader
                                      title="My Tasks"
                                      subtitle="All tasks assigned to you"
                                      actAsExpander={true}
                                      showExpandableButton={false}
                                    />
                                    <CardText expandable={true}>
                                        {this._getTaskView()}
                                    </CardText>
                                </Card>
                            </Cell>
                        </Grid>
                    </div>
                </div>);
    }

    render() {  
        return(<div>{this._getView()}</div>)
    }
}