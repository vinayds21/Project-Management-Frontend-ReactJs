/*
Author: Vinay D S
Page Desc: Project list page
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Style from '../constants/style';
import {hashHistory, Link} from 'react-router';
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

export default class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo:{},
            projectName:'',
            projectDescription:'',
            projectStatus:'0',
            taskArr: [],
            errNameStr:'',
            errDescStr:'',
            projectObj:{},
        }
        this._getProjectDetailView = this._getProjectDetailView.bind(this);
        this._getUserStoreChange = this._getUserStoreChange.bind(this);
        this._getDashboardStoreChange = this._getDashboardStoreChange.bind(this);
        this._getProjectFormDetailView = this._getProjectFormDetailView.bind(this);
        this._getTaskListView = this._getTaskListView.bind(this);
        this._getStatusString =this._getStatusString.bind(this);
        this._getTaskTypeString = this._getTaskTypeString.bind(this);
    }

    componentWillMount(){
        Api._checkAuth();
        UserInfoStores.on('change', this._getUserStoreChange);
        DashboardStores.on('change', this._getDashboardStoreChange);

        UserInfoAction.getUserInfo({user_id:Api._getKey('user_id')});
        if (this.props.project_id) {
            DashboardAction.getParticularProjectDetails({project_id:this.props.project_id});
        }
    }

    componentWillUnmount(){
        UserInfoStores.removeListener('change', this._getUserStoreChange);
        DashboardStores.removeListener('change', this._getDashboardStoreChange);
    }

    _getDashboardStoreChange(type){
        if (type == 'particular_project') {
            let project_details = DashboardStores._getIndProjectDetails();
            console.log('project_details',project_details);
            if (project_details && Object.keys(project_details).length) {
                this.setState({
                    projectObj:project_details,
                    projectName:project_details.name,
                    projectDescription:project_details.description,
                    projectStatus:JSON.stringify(project_details.status),
                    taskArr:(project_details.tasks.length ? project_details.tasks : [])
                })
            }
        }
    }

    _getProjectDetailView(){
        let project_detail_obj = this.state.projectObj;
        if (project_detail_obj && Object.keys(project_detail_obj).length) {
            let project_arr = [];
            return (<Grid>
                        <Cell col={6}>
                            <Card expanded={true}>
                                <CardHeader
                                  title={<div style={{fontFamily:"Roboto-Medium", fontSize:'16px'}}><Book style={{color:'#4EB1BA'}}/> Project Details</div>}
                                  actAsExpander={true}
                                  showExpandableButton={false}
                                />
                                <CardText expandable={true} style={{height:'530px', overflow:'scroll'}}>
                                    {this._getProjectFormDetailView()}
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={6}>
                            <Card expanded={true}>
                                <CardHeader
                                  title={<div style={{fontFamily:"Roboto-Medium", fontSize:'16px'}}><Assignment style={{color:'#4EB1BA'}}/> Tasks List for the project</div>}
                                  actAsExpander={true}
                                  showExpandableButton={false}
                                />
                                <CardText expandable={true} style={{height:'530px', overflow:'scroll'}}>
                                    {this._getTaskListView()}
                                </CardText>
                            </Card>
                        </Cell>
                    </Grid>)
        }
        else{
            return (<div>No project details found</div>)
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

    _getTaskTypeString(taskType){
        if (taskType == '0') {
            return (<AddBox style={{color:'#4ECC92'}} data-tip="New Requirement"/>);
        }
        else if (taskType == '1') {
            return (<Bug style={{color:'#E63D3D'}} data-tip="Bug"/>);
        }
    }

    _viewTask(tskId){
        hashHistory.push('/tasks/?'+tskId);
    }

    _getTaskListView(){
        let taskArr = this.state.taskArr;
        if (taskArr && taskArr.length) {
            let tempArr = [];
            for(let i=0;i<taskArr.length;i++){
                tempArr.push(<Grid key={'myTasks-'+i} style={{padding:0, margin:0, borderBottom:'1px solid #e0e0e0', cursor:'pointer'}} onClick={this._viewTask.bind(this, taskArr[i].id)}>
                                <Cell col={10}>
                                    <h5 style={{fontFamily:'Roboto-Medium'}}>{this._getTaskTypeString(taskArr[i].task_type)}<ReactTooltip/> {taskArr[i].name}</h5>
                                    <div style={{fontFamily:'Roboto-Light'}}>
                                        <div>Description: {taskArr[i].description || 'No Description'}</div>
                                        <div>Assigned to: {taskArr[i].user_name}</div>
                                    </div>
                                </Cell>
                                <Cell col={2}>
                                    <div style={{fontFamily:'Roboto-Light', marginTop:15}}>
                                        <div>{this._getStatusString(taskArr[i].status,'task')}</div>
                                    </div>
                                </Cell>
                            </Grid>);
            }
            return tempArr;
        }
        else{
            return (<div style={{textAlign:'center',marginTop:'80px', fontFamily:'Roboto-Light'}}>
                        <i className="material-icons" style={{fontSize:'120px',color:'#a7e1e6'}}>assignment</i>
                        <h4 style={{color:'#49bac3'}}>There are no tasks in this project</h4>
                    </div>);
        }
    }

    _getUserStoreChange(type){
        if (type == 'userInfo') {
            let userInfo = UserInfoStores._getUserInfo();
            if (userInfo && Object.keys(userInfo).length) {
                this.setState({userInfo:userInfo});
            }
        }
    }

    _fieldOnChange(type, event, value){
        if (type == 'projectName') {
            this.setState({projectName:value, errNameStr:''});
        }
        if (type == 'projectDescription') {
            this.setState({projectDescription:value,errDescStr:''});
        }
        if (type == 'projectStatus') {
            this.setState({projectStatus:value});
        }
    }

    _handleSubmit(event){
        event.preventDefault();
        let projectName = this.state.projectName;
        let description = this.state.projectDescription;
        let projectStatus = this.state.projectStatus;

        if (!projectName) {
            this.setState({errNameStr:'Fill this field'});
            return false;
        }
        if (!description) {
            this.setState({errDescStr:'Fill this field'});
            return false;
        }
        let data = {project_name:projectName,description:description, status:projectStatus, org_id:Api._getKey('org_id')}
        let method = 'POST';
        if (this.props.project_id) {
            data.project_id = this.props.project_id;
            method = 'PUT'
        }
        DashboardAction.submitProject(data, method);
    }

    _getProjectFormDetailView(){
        return (<form onSubmit={this._handleSubmit.bind(this)}>
                    <TextField
                        id="projectName"
                        key={1}
                        style={{width: '100%'}}
                        hintText="Enter Project Name"
                        onChange={this._fieldOnChange.bind(this,'projectName')}
                        value={this.state.projectName}
                        label="Project Name"
                        errorText={this.state.errNameStr}
                        underlineFocusStyle={Style.floatingUnderLineStyle}
                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                        floatingLabelText="Project Name"
                    />
                    <TextField
                        id="description"
                        key={2}
                        style={{width: '100%'}}
                        hintText="Enter Project Description"
                        onChange={this._fieldOnChange.bind(this,'projectDescription')}
                        value={this.state.projectDescription}
                        errorText={this.state.errDescStr}
                        label="Project Description"
                        underlineFocusStyle={Style.floatingUnderLineStyle}
                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                        floatingLabelText="Project Description"
                    />
                    <SelectField
                        key={3}
                        floatingLabelText="Select Status"
                        value={this.state.projectStatus}
                        style={{width: '100%'}}
                        floatingLabelStyle={Style.floatingLabelStyle}
                        onChange={(event,index,value)=>{
                            this.setState({
                                projectStatus: value,
                            })
                        }}>
                        <MenuItem key={76} value="0" primaryText="Open"/>
                        <MenuItem key={77} value="1" primaryText="In Progress"/>
                        <MenuItem key={78} value="2" primaryText="Completed"/>
                        <MenuItem key={79} value="3" primaryText="Blocked"/>
                        <MenuItem key={80} value="4" primaryText="In Production"/>
                    </SelectField>
                    <div style={Style.loginPage.userRegDivStyle}>
                        <SaveButton label="Submit" type="submit"/>
                    </div>
                </form>);
    }

    _getView(){
        return (<div>
                    <Header userName={this.state.userInfo.first_name+' '+this.state.userInfo.last_name} hideActions={true}/>
                    <div>
                        {this.props.project_id ? 
                            <div>{this._getProjectDetailView()}</div>
                            :   
                            <Grid>
                                <Cell col={3}></Cell>
                                    <Cell col={6}>
                                        <Card>
                                            <CardHeader
                                              title={<div style={{fontFamily:"Roboto-Medium", fontSize:'16px'}}><Book style={{color:'#4EB1BA'}}/> Add project</div>}
                                              actAsExpander={true}
                                              showExpandableButton={false}
                                            />
                                            <CardText>
                                                {this._getProjectFormDetailView()}
                                            </CardText>
                                        </Card>
                                    </Cell>
                                <Cell col={3}></Cell>
                            </Grid>
                        }
                    </div>
                </div>);
    }

    render() {  
        return(<div>{this._getView()}</div>)
    }
}