/*
Author: Vinay D S
Page Desc: All users/employee page
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {Grid, Cell} from 'react-mdl';
import {List, ListItem} from 'material-ui/List';
import Style from '../constants/style';
import Header from '../constants/header';
import {hashHistory, Link} from 'react-router';
import SaveButton from '../constants/savebutton';
import SecondarySaveButton from '../constants/secondarysavebutton';
import Api from '../constants/api';
import MenuItem from 'material-ui/MenuItem';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';

import UserInfoStores from '../stores/UserInfoStores';
import * as UserInfoAction from '../actions/userinfoaction';
import * as LoginRegisterAction from '../actions/loginRegisterAction';

export default class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo:{},
            orgUsers:[],
            loadingBit:true,

            fName:'',
            Lname:'',
            mobileNumber:'',
            email:'',
            userDesignation:'',
            passwd:'',
            confirmPassword:'',
            userType:'',

            passwdErr:'',
            mobileErr:'',
            errStr:'',
        }
        this._getUserStoreChange = this._getUserStoreChange.bind(this);
    }

    componentWillMount(){
        Api._checkAuth();
        UserInfoStores.on('change', this._getUserStoreChange);
        UserInfoAction.getUserInfo({user_id:Api._getKey('user_id')});
        UserInfoAction.getAllOrgUsers({org_id:Api._getKey('org_id')});
    }

    componentWillUnmount(){
        UserInfoStores.removeListener('change', this._getUserStoreChange);
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
            this.setState({ orgUsers:orgUsers,
                            loadingBit:false,
                            fName:'',
                            Lname:'',
                            mobileNumber:'',
                            email:'',
                            userDesignation:'',
                            passwd:'',
                            confirmPassword:'',
                            userType:'',

                            passwdErr:'',
                            mobileErr:'',
                            errStr:'',
                        });
        }
    }

    _getUserView(){
        let allUsers = this.state.orgUsers;
        if (allUsers && allUsers.length) {
            let tempArr = [];
            for(let i=0;i<allUsers.length;i++){
                tempArr.push(<ListItem
                                key={'allusers-'+allUsers[i].user_id}
                                style={{borderBottom:'1px solid #e0e0e0'}}
                                primaryText={allUsers[i].first_name+' '+allUsers[i].last_name+' ('+(allUsers[i].user_type == '1' ? 'Admin' : 'Employee')+')'}
                                secondaryText={allUsers[i].user_designation+' | '+allUsers[i].user_mail+' | '+allUsers[i].user_mobile}
                            />);
            }
            return(<List style={{height:'625px', overflow:'scroll'}}>
                      {tempArr}
                    </List>);
        }
        else{
            if (this.state.loadingBit) {
                return(<div>Loading Users</div>);
            }
            else{
                return(<div>No users found</div>);
            }
        }
    }

    _handleSubmit(evt){
        evt.preventDefault();
        let FirstName = this.state.fName;
        let lastName = this.state.Lname;
        let mobileNumber = this.state.mobileNumber;
        let email = this.state.email;
        let userDesignation = this.state.userDesignation;
        let passwd = this.state.passwd;
        let confirmPassword = this.state.confirmPassword;
        let userType = this.state.userType;

        if (!FirstName || !lastName || !email || !userDesignation) {
            this.setState({errStr:'Please fill this field', mobileErr:'Enter valid mobile number', passwdErr :'enter valid passwd'});
            return false;
        }
        if (mobileNumber.length != 10) {
            this.setState({mobileErr:'Enter valid mobile number'});
            return false;
        }
        if (passwd != confirmPassword) {
            this.setState({passwdErr :'enter valid passwd'});
            return false;
        }
        let data = {
            first_name:FirstName,
            last_name:lastName,
            user_mobile:mobileNumber,
            user_mail:email,
            user_designation:userDesignation,
            user_type:userType,
            org_id:Api._getKey('org_id'),
            password:confirmPassword,
        }
        UserInfoStores.showLoader(true);
        LoginRegisterAction._firstUserRegister(data);
    }

    _fieldOnChange(type, event, value){
        if (type == 'fName') {
            this.setState({fName:value, errStr:''});
        }
        if (type == 'Lname') {
            this.setState({Lname:value,errStr:''});
        }
        if (type == 'mobileNumber') {
            if(isNaN(value))
                return false;
            this.setState({mobileNumber:value,mobileErr:''});
        }
        if (type == 'email') {
            this.setState({email:value,errStr:''});
        }
        if (type == 'userDesignation') {
            this.setState({userDesignation:value,errStr:''});
        }
        if (type == 'passwd') {
            this.setState({passwd:value,passwdErr:''});
        }
        if (type == 'confirmPassword') {
            this.setState({confirmPassword:value,passwdErr:''});
        }
    }

    _getView(){
        return (<div>
                    <Header userName={this.state.userInfo.first_name+' '+this.state.userInfo.last_name}/>
                    <div>
                        <Grid>
                            <Cell col={6}>
                                <Card>
                                    <CardHeader
                                      title={<div style={{fontFamily:"Roboto-Medium", fontSize:'16px'}}><AccountCircle style={{color:'#4EB1BA'}}/> All Users</div>}
                                      actAsExpander={true}
                                      showExpandableButton={false}
                                    />
                                    <CardText>
                                        {this._getUserView()}
                                    </CardText>
                                </Card>
                            </Cell>
                            <Cell col={6}>
                                <Card>
                                    <CardHeader
                                      title={<div style={{fontFamily:"Roboto-Medium", fontSize:'16px'}}><PersonAdd style={{color:'#4EB1BA'}}/> Add Users</div>}
                                      actAsExpander={true}
                                      showExpandableButton={false}
                                    />
                                    <CardText>
                                        <form onSubmit={this._handleSubmit.bind(this)}>
                                            <TextField
                                                id="Fname"
                                                key={1}
                                                style={{width: '100%'}}
                                                hintText="Enter First Name"
                                                onChange={this._fieldOnChange.bind(this,'fName')}
                                                value={this.state.fName}
                                                label="First Name"
                                                errorText={this.state.errStr}
                                                underlineFocusStyle={Style.floatingUnderLineStyle}
                                                floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                                floatingLabelFocusStyle={Style.floatingLabelStyle}
                                                floatingLabelText="First Name"
                                            />
                                            <TextField
                                                id="Lname"
                                                key={2}
                                                style={{width: '100%'}}
                                                hintText="Enter Last Name"
                                                onChange={this._fieldOnChange.bind(this,'Lname')}
                                                value={this.state.Lname}
                                                errorText={this.state.errStr}

                                                label="Last Name"
                                                underlineFocusStyle={Style.floatingUnderLineStyle}
                                                floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                                floatingLabelFocusStyle={Style.floatingLabelStyle}
                                                floatingLabelText="Last Name"
                                            />
                                            <TextField
                                                id="mobile"
                                                key={3}
                                                style={{width: '100%'}}
                                                hintText="Enter Mobile Number"
                                                onChange={this._fieldOnChange.bind(this,'mobileNumber')}
                                                value={this.state.mobileNumber}
                                                errorText={this.state.mobileErr}

                                                label="Mobile Number"
                                                underlineFocusStyle={Style.floatingUnderLineStyle}
                                                floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                                floatingLabelFocusStyle={Style.floatingLabelStyle}
                                                floatingLabelText="Mobile Number"
                                            />
                                            <TextField
                                                id="email"
                                                key={4}
                                                style={{width: '100%'}}
                                                hintText="Enter Email"
                                                onChange={this._fieldOnChange.bind(this,'email')}
                                                value={this.state.email}
                                                errorText={this.state.errStr}

                                                label="Email Id"
                                                underlineFocusStyle={Style.floatingUnderLineStyle}
                                                floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                                floatingLabelFocusStyle={Style.floatingLabelStyle}
                                                floatingLabelText="Email Id"
                                            />
                                            <SelectField
                                                key={8}
                                                floatingLabelText="Select user type"
                                                value={this.state.userType}
                                                style={{width: '100%'}}
                                                floatingLabelStyle={Style.floatingLabelStyle}
                                                onChange={(event,index,value)=>{
                                                    this.setState({
                                                        userType: value,
                                                    })
                                                }}>
                                                  <MenuItem key={487643} value="0" primaryText="Employee"/>
                                                  <MenuItem key={6348} value="1" primaryText="Admin"/>
                                            </SelectField>
                                            <TextField
                                                id="designation"
                                                key={5}
                                                style={{width: '100%'}}
                                                hintText="Enter Designation"
                                                onChange={this._fieldOnChange.bind(this,'userDesignation')}
                                                value={this.state.userDesignation}
                                                label="Designation"
                                                errorText={this.state.errStr}

                                                underlineFocusStyle={Style.floatingUnderLineStyle}
                                                floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                                floatingLabelFocusStyle={Style.floatingLabelStyle}
                                                floatingLabelText="Designation"
                                            />
                                            <TextField
                                                id="passwd"
                                                key={6}
                                                style={{width: '100%'}}
                                                hintText="Enter Password"
                                                onChange={this._fieldOnChange.bind(this,'passwd')}
                                                value={this.state.passwd}
                                                label="Password"
                                                errorText={this.state.passwdErr}

                                                underlineFocusStyle={Style.floatingUnderLineStyle}
                                                floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                                floatingLabelFocusStyle={Style.floatingLabelStyle}
                                                floatingLabelText="Password"
                                            />
                                            <TextField
                                                id="confirm"
                                                key={7}
                                                style={{width: '100%'}}
                                                hintText="Confirm Password"
                                                onChange={this._fieldOnChange.bind(this,'confirmPassword')}
                                                value={this.state.confirmPassword}
                                                errorText={this.state.passwdErr}

                                                label="Confirm Password"
                                                underlineFocusStyle={Style.floatingUnderLineStyle}
                                                floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                                floatingLabelFocusStyle={Style.floatingLabelStyle}
                                                floatingLabelText="Confirm Password"
                                            />
                                            <div style={Style.loginPage.userRegDivStyle}>
                                                <SaveButton label="Submit" type="submit"/>
                                            </div>
                                        </form>
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