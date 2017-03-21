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
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

import UserInfoStores from '../stores/UserInfoStores';
import * as UserInfoAction from '../actions/userinfoaction';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo:{},
            editMode:false,

            firstName:'',
            lastName:'',
            usermail:'',
            designation:''
        }
        this._getUserStoreChange = this._getUserStoreChange.bind(this);
        this._getUserInfoView = this._getUserInfoView.bind(this);
    }

    componentWillMount(){
        Api._checkAuth();
        UserInfoAction.getUserInfo({user_id:Api._getKey('user_id')});

        UserInfoStores.on('change', this._getUserStoreChange);
    }

    componentWillUnmount(){
        UserInfoStores.removeListener('change', this._getUserStoreChange);
    }

    _getUserStoreChange(type){
        if (type == 'userInfo') {
            let userInfo = UserInfoStores._getUserInfo();
            if (userInfo && Object.keys(userInfo).length) {
                this.setState({userInfo:userInfo,
                            firstName:userInfo.first_name,
                            lastName:userInfo.last_name,
                            designation:userInfo.user_designation,
                            usermail:userInfo.user_mail,
                            editMode:false,
                        });
            }
        }
    }

    _fieldOnChange(type, event, value){
        if (type === 'firstName') {
            this.setState({firstName:value, fnameErr:''});
        }
        if (type === 'lastName') {
            this.setState({lastName:value, lnameErr:''});
        }
        if (type === 'usermail') {
            this.setState({usermail:value, mailErr:''});
        }
        if (type === 'designation') {
            this.setState({designation:value, designationErr:''});
        }
    }

    _handleSubmit(evt){
        evt.preventDefault();
        let fName = this.state.firstName;
        let lName = this.state.lastName;
        let mail = this.state.usermail;
        let designation = this.state.designation;
        let user_id = Api._getKey('user_id');
        let type = this.state.userInfo.user_type;

        if (!fName) {
            this.setState({fnameErr:'Please fill this field'});
            return false;
        }
        if (!lName) {
            this.setState({lnameErr:'Please fill this field'});
            return false;
        }
        if (!mail) {
            this.setState({mailErr:'Please fill this field'});
            return false;
        }
        if (!designation) {
            this.setState({designationErr:'Please fill this field'});
            return false;
        }

        let data = {
            user_id:user_id,
            first_name:fName,
            last_name:lName,
            user_mail:mail,
            user_designation:designation,
            user_type:type
        }
        UserInfoAction.editUserInfo(data)
    }

    _getUserInfoView(){
        if (this.state.editMode) {
            return (<div style={{textAlign:'center'}}>
                        <div>
                            <i className="material-icons" style={{fontSize:'70px', color:'#7e94b2'}}>account_circle</i>
                            <br/>
                            <span style={{cursor:'pointer', color:'#4d8be2', fontSize:'12px'}} onClick={()=>{this.setState({editMode:!this.state.editMode})}}>Cancel</span>
                        </div>
                        <Grid>
                            <Cell col={2}></Cell>
                            <Cell col={8}>
                                <form onSubmit={this._handleSubmit.bind(this)}>
                                    <TextField
                                        id="fname"
                                        key={1}
                                        style={{width: '100%'}}
                                        hintText="Enter First Name"
                                        onChange={this._fieldOnChange.bind(this,'firstName')}
                                        autoFocus={true}
                                        value={this.state.firstName}
                                        label="First Name"
                                        errorText={this.state.fnameErr}
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="First Name"
                                    />
                                    <TextField
                                        id="lname"
                                        key={2}
                                        style={{width: '100%'}}
                                        hintText="Enter Last Name"
                                        onChange={this._fieldOnChange.bind(this,'lastName')}
                                        value={this.state.lastName}
                                        errorText={this.state.lnameErr}
                                        label="Last Name"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Last Name"
                                    />
                                    <TextField
                                        id="mail"
                                        key={3}
                                        style={{width: '100%'}}
                                        hintText="Enter Email"
                                        onChange={this._fieldOnChange.bind(this,'usermail')}
                                        errorText={this.state.mailErr}
                                        value={this.state.usermail}
                                        label="Email"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Email"
                                    />
                                    <TextField
                                        id="addrs1"
                                        key={4}
                                        style={{width: '100%'}}
                                        hintText="Enter Designation"
                                        onChange={this._fieldOnChange.bind(this,'designation')}
                                        value={this.state.designation}
                                        errorText={this.state.designationErr}
                                        label="Designation"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Designation"
                                    />
                                    <div style={Style.loginPage.userRegDivStyle}>
                                        <SaveButton label="Save" type="submit"/>
                                    </div>
                                </form>
                            </Cell>
                            <Cell col={2}></Cell>
                        </Grid>
                    </div>);
        }
        else{
            let userInfoObj = this.state.userInfo;
            if (userInfoObj && Object.keys(userInfoObj).length) {
                return(<div style={{textAlign:'center'}}>
                            <div>
                                <i className="material-icons" style={{fontSize:'70px', color:'#7e94b2'}}>account_circle</i>
                                <br/>
                                <span style={{cursor:'pointer', color:'#4d8be2', fontSize:'12px'}} onClick={()=>{this.setState({editMode:!this.state.editMode})}}>Edit Info</span>
                            </div>
                            <div>
                                <h3 style={{fontFamily:'Roboto-Light'}}>{userInfoObj.first_name+' '+userInfoObj.last_name}</h3>
                                <h4 style={{fontFamily:'Roboto-Light', fontWeight:'bold'}}>{userInfoObj.user_designation} at {userInfoObj.org.org_name}</h4>
                                <h5 style={{fontFamily:'Roboto-Light',color:'#404040', fontWeight:'bold'}}>+91 {userInfoObj.user_mobile} | {userInfoObj.user_mail}</h5>
                                <h5 style={{fontFamily:'Roboto-Light', fontWeight:'bold',color:'#404040'}}>Login type: {userInfoObj.user_type == '1' ? 'Admin' : 'Employee'}</h5>
                            </div>
                        </div>);
            }
        }
    }

    _getView(){
        return (<div>
                    <Header userName={this.state.userInfo.first_name+' '+this.state.userInfo.last_name}/>
                    <div>
                        <Grid>
                            <Cell col={3}></Cell>
                            <Cell col={6}>
                                <Card expanded={true}>
                                    <CardText>
                                        {this._getUserInfoView()}
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