/*
Author: Vinay D S
Page Desc: taks creation and edit page
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Style from '../constants/style';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import SaveButton from '../constants/savebutton';
import SecondarySaveButton from '../constants/secondarysavebutton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Book from 'material-ui/svg-icons/action/book';
import Api from '../constants/api';
import {Grid, Cell} from 'react-mdl';
import Header from '../constants/header';
import Bug from 'material-ui/svg-icons/action/bug-report';
import AddBox from 'material-ui/svg-icons/content/add-box';
import Assignment from 'material-ui/svg-icons/action/assignment';
import ReactTooltip from 'react-tooltip';
import Chip from 'material-ui/Chip';

import UserInfoStores from '../stores/UserInfoStores';
import * as UserInfoAction from '../actions/userinfoaction';

import DashboardStores from '../stores/dashboardStores';
import * as DashboardAction from '../actions/dashboardaction';

export default class Tasks extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo:{},
            taskObj:{},
            projectList:[],
            org_users:[],

            taskName:'',
            taskDescription:'',
            taskType:'',
            taskStatus:'',
            taskAssignUser:'',
            projectSelect:'',

            errNameStr:'',
            errDescStr:'',
            typeErrStr:'',
            statusErrStr:'',
            userAssignErrStr:'',
            projectErrStr:'',
        }

        this._getUserStoreChange = this._getUserStoreChange.bind(this);
        this._getDashboardStoreChange = this._getDashboardStoreChange.bind(this);
        this._getOrgUserList = this._getOrgUserList.bind(this);
        this._getOrgProjectList= this._getOrgProjectList.bind(this);
    }

    componentWillMount(){
        Api._checkAuth();
        UserInfoStores.on('change', this._getUserStoreChange);
        DashboardStores.on('change', this._getDashboardStoreChange);
        UserInfoAction.getUserInfo({user_id:Api._getKey('user_id')});
        UserInfoAction.getAllOrgUsers({org_id:Api._getKey('org_id')});
        DashboardAction.getProjects({org_id:Api._getKey('org_id')});

        if (this.props.task_id) {
            DashboardAction.getParticularTaskDetails({task_id:this.props.task_id});
        }
    }

    componentWillUnmount(){
        UserInfoStores.removeListener('change', this._getUserStoreChange);
        DashboardStores.removeListener('change', this._getDashboardStoreChange);
    }

    _getDashboardStoreChange(type){
        if (type == 'org_projects') {
            let allProjects = DashboardStores._getAllOrgProjects()||[];
            this.setState({projectList:allProjects});
        }
        if (type == 'ind_task') {
            let taskObj = DashboardStores._getIndTaskDetails()||{};
            this.setState({ taskObj:taskObj,
                            taskName:taskObj.name,
                            taskDescription:taskObj.description,
                            taskType:JSON.stringify(taskObj.task_type),
                            taskStatus:JSON.stringify(taskObj.status),
                            taskAssignUser:taskObj.user.user_id,
                            projectSelect:taskObj.project.id,
                        });
        }
    }

    _getUserStoreChange(type){
        if (type == 'userInfo') {
            let userInfo = UserInfoStores._getUserInfo();
            if (userInfo && Object.keys(userInfo).length) {
                this.setState({userInfo:userInfo});
            }
        }
        if (type == 'org_users') {
            let orgUsers = UserInfoStores._getOrgUsers() || [];
            this.setState({org_users:orgUsers});
        }
    }

    _fieldOnChange(type, event, value){
        if (type == 'taskName') {
            this.setState({taskName:value, errNameStr:''});
        }
        if (type == 'taskDescription') {
            this.setState({taskDescription:value,errDescStr:''});
        }
    }

    _handleSubmit(event){
        event.preventDefault();
        let taskName = this.state.taskName;
        let description = this.state.taskDescription;
        let taskStatus = this.state.taskStatus;
        let taskType = this.state.taskType;
        let userAssign = this.state.taskAssignUser;
        let project = this.state.projectSelect;

        if (!taskName) {
            this.setState({errNameStr:'Fill this field'});
            return false;
        }
        if (!description) {
            this.setState({errDescStr:'Fill this field'});
            return false;
        }

        if (!taskType) {
            this.setState({typeErrStr:'Fill this field'});
            return false;
        }

        if (!taskStatus) {
            this.setState({statusErrStr:'Fill this field'});
            return false;
        }

        if (!userAssign) {
            this.setState({userAssignErrStr:'Fill this field'});
            return false;
        }

        if (!project) {
            this.setState({projectErrStr:'Fill this field'});
            return false;
        }

        let data = {name:taskName,description:description, status:taskStatus, project_id:project, task_type:taskType, user_id:userAssign};
        let method = 'POST';
        if (this.props.task_id) {
            data.task_id = this.props.task_id;
            method = 'PUT'
        }
        DashboardAction.submitTask(data, method);
    }

    _getOrgProjectList(){
        let org_project_list = this.state.projectList;
        if (org_project_list && org_project_list.length) {
            let tempArr = org_project_list.map((el) => {
                return (<MenuItem key={'project_list-'+el.id} value={el.id} primaryText={el.project_name}/>)
            })
            if (org_project_list.length) {
                return (<SelectField
                            key={5}
                            floatingLabelText="Select Project"
                            value={this.state.projectSelect}
                            style={{width: '100%'}}
                            errorText={this.state.projectErrStr}
                            floatingLabelStyle={Style.floatingLabelStyle}
                            onChange={(event,index,value)=>{this.setState({projectSelect: value, projectErrStr:''})
                            }}>
                        {tempArr}
                        </SelectField>)
            }
        }
        else{
            return null;
        }
    }

    _getOrgUserList(){
        let orgUsers = this.state.org_users;
        if (orgUsers && orgUsers.length) {
            let tempArr = [];
            for(let i=0;i<orgUsers.length;i++){
                tempArr.push(<MenuItem key={'org_user_liet_item-'+i} value={orgUsers[i].user_id} primaryText={orgUsers[i].first_name+' '+orgUsers[i].last_name}/>);
            }
            return tempArr;
        }
        else{
            return null;  
        }
    }

    _getTaskFormDetailView(){
        return (<form onSubmit={this._handleSubmit.bind(this)}>
                    <TextField
                        id="taskName"
                        key={1}
                        style={{width: '100%'}}
                        hintText="Enter Task Name"
                        onChange={this._fieldOnChange.bind(this,'taskName')}
                        value={this.state.taskName}
                        label="Task Name"
                        errorText={this.state.errNameStr}
                        underlineFocusStyle={Style.floatingUnderLineStyle}
                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                        floatingLabelText="Task Name"
                    />
                    <TextField
                        id="description"
                        key={2}
                        style={{width: '100%'}}
                        hintText="Enter Task Description"
                        onChange={this._fieldOnChange.bind(this,'taskDescription')}
                        value={this.state.taskDescription}
                        errorText={this.state.errDescStr}
                        label="Task Description"
                        underlineFocusStyle={Style.floatingUnderLineStyle}
                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                        floatingLabelText="Task Description"
                    />
                    <SelectField
                        key={3}
                        floatingLabelText="Select Task Type"
                        value={this.state.taskType}
                        style={{width: '100%'}}
                        floatingLabelStyle={Style.floatingLabelStyle}
                        errorText={this.state.typeErrStr}
                        onChange={(event,index,value)=>{
                            this.setState({
                                taskType: value,
                                typeErrStr:'',
                            })
                        }}>
                        <MenuItem key={74} value="0" primaryText="Requirement"/>
                        <MenuItem key={75} value="1" primaryText="Bug"/>
                    </SelectField>
                    <SelectField
                        key={4}
                        floatingLabelText="Select Status"
                        value={this.state.taskStatus}
                        style={{width: '100%'}}
                        errorText={this.state.statusErrStr}
                        floatingLabelStyle={Style.floatingLabelStyle}
                        onChange={(event,index,value)=>{
                            this.setState({
                                taskStatus: value,
                                statusErrStr:'',
                            })
                        }}>
                        <MenuItem key={76} value="0" primaryText="Open"/>
                        <MenuItem key={77} value="1" primaryText="Assigned"/>
                        <MenuItem key={78} value="2" primaryText="In Progress"/>
                        <MenuItem key={79} value="3" primaryText="In QA"/>
                        <MenuItem key={80} value="4" primaryText="Testing Done"/>
                        <MenuItem key={81} value="5" primaryText="In Production"/>
                        <MenuItem key={82} value="6" primaryText="Blocked"/>
                    </SelectField>
                    {this._getOrgProjectList()}
                    <SelectField
                        key={6}
                        floatingLabelText="Assign Task To"
                        value={this.state.taskAssignUser}
                        style={{width: '100%'}}
                        errorText={this.state.userAssignErrStr}
                        floatingLabelStyle={Style.floatingLabelStyle}
                        onChange={(event,index,value)=>{
                            this.setState({
                                taskAssignUser: value,
                                userAssignErrStr:'',
                            })
                        }}>
                        {this._getOrgUserList()}
                    </SelectField>
                    <div style={Style.loginPage.userRegDivStyle}>
                        <SaveButton label="Submit" type="submit"/>
                    </div>
                </form>);
    }

    _getView(){
        return (<div>
                    <Header userName={this.state.userInfo.first_name+' '+this.state.userInfo.last_name}/>
                    <div>
                        <Grid>
                            <Cell col={3}></Cell>
                                <Cell col={6}>
                                    <Card>
                                        <CardHeader
                                          title={<div style={{fontFamily:"Roboto-Medium", fontSize:'16px'}}><Assignment style={{color:'#4EB1BA'}}/> {this.props.task_id ? 'Edit Task' : 'Add Task'}</div>}
                                          actAsExpander={true}
                                          showExpandableButton={false}
                                        />
                                        <CardText>
                                            {this._getTaskFormDetailView()}
                                        </CardText>
                                    </Card>
                                </Cell>
                            <Cell col={3}></Cell>
                        </Grid>
                    </div>
                </div>);
    }

    render() {  
        return(<div>{this._getView()}</div>)
    }
}