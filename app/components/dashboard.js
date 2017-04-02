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
import Chip from 'material-ui/Chip';
import SecondarySaveButton from '../constants/secondarysavebutton';
import Api from '../constants/api';
import ReactTooltip from 'react-tooltip';

import Book from 'material-ui/svg-icons/action/book';
import Assignment from 'material-ui/svg-icons/action/assignment';
import Bug from 'material-ui/svg-icons/action/bug-report';
import AddBox from 'material-ui/svg-icons/content/add-box';

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
            taskLoadbit:true,
            projectLoadBit:true,
        }
        this._getUserStoreChange = this._getUserStoreChange.bind(this);
        this._getDashboardStoreChange = this._getDashboardStoreChange.bind(this);
        this._getProjectView = this._getProjectView.bind(this);
        this._getStatusString = this._getStatusString.bind(this);
        this._getTaskTypeString = this._getTaskTypeString.bind(this);
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
            let allProjects = DashboardStores._getAllOrgProjects()||[];
            this.setState({allProjects:allProjects,projectLoadBit:false});
        }
        if (type == 'my_tasks') {
            let alltasks = DashboardStores._getAllMyTasks()||[];
            this.setState({alltasks:alltasks,taskLoadbit:false});
        }
    }

    _getTaskTypeString(taskType){
        if (taskType == '0') {
            return (<AddBox style={{color:'#4ECC92'}} data-tip="New Requirement"/>);
        }
        else if (taskType == '1') {
            return (<Bug style={{color:'#E63D3D'}} data-tip="Bug"/>);
        }
    }

    _getStatusString(status, type){
        if (type == 'project') {
            if (status == '0') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#568fe4">
                              Open
                            </Chip>
                        </div>);
            }
            else if (status == '1') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#9c72e0">
                              In Progress
                            </Chip>
                        </div>);
            }
            else if (status == '2') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#58deec">
                              Completed
                            </Chip>
                        </div>);
            }
            else if (status == '3') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#ec5858">
                              Blocked
                            </Chip>
                        </div>);
            }
            else if (status == '4') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#4ecc92">
                              In Production
                            </Chip>
                        </div>);
            }
        }
        else{
            if (status == '0') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#568fe4">
                              Open
                            </Chip>
                        </div>);
            }
            else if (status == '1') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#ecaa58">
                              Assigned
                            </Chip>
                        </div>);
            }
            else if (status == '2') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#9c72e0">
                              In Progress
                            </Chip>
                        </div>);
            }
            else if (status == '3') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#ece158">
                              In QA
                            </Chip>
                        </div>);
            }
            else if (status == '4') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#58deec">
                              Testing Done
                            </Chip>
                        </div>);
            }
            else if (status == '5') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#4ecc92">
                              In Production
                            </Chip>
                        </div>);
            }
            else if (status == '6') {
                return (<div>
                            <Chip labelStyle={{lineHeight:'20px', fontSize:'12px', color:'#ffffff', fontFamily:'Roboto-Medium'}} backgroundColor="#ec5858">
                              Blocked
                            </Chip>
                        </div>);
            }
        }
    }

    _getTaskView(){
        let allTasks = this.state.alltasks;
        if (allTasks && allTasks.length) {
            let tempArr = [];
            for(let i=0;i<allTasks.length;i++){
                tempArr.push(<Grid key={'myTasks-'+i} style={{padding:0, margin:0, borderBottom:'1px solid #e0e0e0', cursor:'pointer'}} onClick={this._viewTask.bind(this, allTasks[i].id)}>
                                <Cell col={10}>
                                    <h5 style={{fontFamily:'Roboto-Medium'}}>{this._getTaskTypeString(allTasks[i].task_type)}<ReactTooltip/> {allTasks[i].name}</h5>
                                    <div style={{fontFamily:'Roboto-Light'}}>
                                        <div>Description: {allTasks[i].description || 'No Description'}</div>
                                        <div>Assigned to: {allTasks[i].user.name}</div>
                                        <div>Related Project: {allTasks[i].project.name}</div>
                                    </div>
                                </Cell>
                                <Cell col={2}>
                                    <div style={{fontFamily:'Roboto-Light', marginTop:15}}>
                                        <div>{this._getStatusString(allTasks[i].status,'task')}</div>
                                    </div>
                                </Cell>
                            </Grid>);
            }
            return tempArr;
        }
        else{
            if (this.state.taskLoadbit) {
                return (<div><h5 style={{fontFamily:'Roboto-Medium'}}>Loading Tasks</h5></div>);
            }
            else{
                return (<div style={{textAlign:'center',marginTop:'80px', fontFamily:'Roboto-Light'}}>
                            <i className="material-icons" style={{fontSize:'120px',color:'#a7e1e6'}}>assignment</i>
                            <h4 style={{color:'#49bac3'}}>You have no tasks assigned</h4>
                        </div>);
            }
        }
    }

    _viewTask(tskId){
        hashHistory.push('/tasks/?'+tskId);
    }

    _viewProject(prjtId){
        hashHistory.push('/projects/?'+prjtId);
    }

    _getProjectView(){
        let AllProjectsArr = this.state.allProjects;
        if (AllProjectsArr && AllProjectsArr.length) {
            let temp = [];
            for(let i=0;i<AllProjectsArr.length;i++){
                temp.push(<Grid key={'project-'+i} style={{padding:0, margin:0, borderBottom:'1px solid #e0e0e0'}}>
                            <Cell col={10} style={{cursor:'pointer'}} onClick={this._viewProject.bind(this,AllProjectsArr[i].id)}>
                                <h5 style={{fontFamily:'Roboto-Medium'}}>{AllProjectsArr[i].project_name}</h5>
                                <div style={{fontFamily:'Roboto-Light'}}>Description: {AllProjectsArr[i].project_desc || 'No Description'}</div>
                            </Cell>
                            <Cell col={2}>
                                <div style={{fontFamily:'Roboto-Light',marginTop:15}}>
                                    <div>{this._getStatusString(AllProjectsArr[i].project_status,'project')}</div>
                                </div>
                            </Cell>
                        </Grid>);
            }
            return temp;
        }
        else{
            if (this.state.projectLoadBit) {
                return (<div><h5 style={{fontFamily:'Roboto-Medium'}}>Loading Projects</h5></div>);
            }
            else{
                return (<div style={{textAlign:'center',marginTop:'80px', fontFamily:'Roboto-Light'}}>
                            <i className="material-icons" style={{fontSize:'120px',color:'#a7e1e6'}}>book</i>
                            <h4 style={{color:'#49bac3'}}>Currently no projects added</h4>
                        </div>);
            }
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
                                      title={<div style={{fontFamily:"Roboto-Medium", fontSize:'16px'}}><Book style={{color:'#4EB1BA'}}/> All Projects</div>}
                                      actAsExpander={true}
                                      showExpandableButton={false}
                                    />
                                    <CardText expandable={true} style={{height:'530px', overflow:'scroll'}}>
                                        {this._getProjectView()}
                                    </CardText>
                                </Card>
                            </Cell>
                            <Cell col={6}>
                                <Card expanded={true} >
                                    <CardHeader
                                      title={<div style={{fontFamily:"Roboto-Medium", fontSize:'16px'}}><Assignment style={{color:'#4EB1BA'}}/> My Tasks</div>}
                                      actAsExpander={true}
                                      showExpandableButton={false}
                                    />
                                    <CardText expandable={true} style={{height:'530px', overflow:'scroll'}}>
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