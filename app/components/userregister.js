/*
Author: Vinay D S
Page Desc: User registration page
*/

import React from 'react';
import {hashHistory,Link} from 'react-router';
import {Grid, Cell} from 'react-mdl';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Style from '../constants/style';
import Api from '../constants/api';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SaveButton from '../constants/savebutton';
import UserInfoStores from '../stores/UserInfoStores';
import SecondarySaveButton from '../constants/secondarysavebutton';
import * as LoginRegisterAction from '../actions/loginRegisterAction';

export default class UserRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            fName:'',
            Lname:'',
            mobileNumber:'',
            email:'',
            userDesignation:'',
            passwd:'',
            confirmPassword:'',
            userType:'1',

            passwdErr:'',
            mobileErr:'',
            errStr:'',
        }
    }

    componentWillMount(){

    }

    componentWillUnmount(){

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
            first_user_bit:true,
        }
        UserInfoStores.showLoader(true);
        LoginRegisterAction._firstUserRegister(data);
    }

    _fieldOnChange(type, event, value){
        if (type == 'fName') {
            this.setState({fName:value});
        }
        if (type == 'Lname') {
            this.setState({Lname:value});
        }
        if (type == 'mobileNumber') {
            if(isNaN(value))
                return false;
            this.setState({mobileNumber:value});
        }
        if (type == 'email') {
            this.setState({email:value});
        }
        if (type == 'userDesignation') {
            this.setState({userDesignation:value});
        }
        if (type == 'passwd') {
            this.setState({passwd:value});
        }
        if (type == 'confirmPassword') {
            this.setState({confirmPassword:value});
        }

    }

    render() {  
        return(<div style={Style.loginPage.mainContainer}>
                <div style={Style.loginPage.leftContainerRegister}>
                    <div style={Style.loginPage.logoDivStyle}>
                        <div style={Style.loginPage.textBelowLogo}>Register First User</div>
                    </div>
                    <form onSubmit={this._handleSubmit.bind(this)}>
                            <Grid>
                                <Cell col={6}>
                                    <TextField
                                        id="Fname"
                                        key={1}
                                        style={{width: '100%'}}
                                        hintText="Enter First Name"
                                        onChange={this._fieldOnChange.bind(this,'fName')}
                                        autoFocus={true}
                                        value={this.state.fName}
                                        label="First Name"
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
                                        label="Email Id"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Email Id"
                                    />
                                </Cell>
                                <Cell col={6}>
                                    <SelectField
                                        key={8}
                                        floatingLabelText="Select user type"
                                        value={this.state.userType}
                                        floatingLabelStyle={Style.floatingLabelStyle}
                                        disabled={true}
                                        onChange={(event,index,value)=>{
                                            this.setState({
                                                userType: value,
                                            })
                                        }}>
                                          <MenuItem key={9859} value="2" primaryText="Select user type"/>
                                          <MenuItem key={487643} value="0" primaryText="Employee"/>
                                          <MenuItem key={6348} value="1" primaryText="Manager"/>
                                    </SelectField>
                                    <TextField
                                        id="designation"
                                        key={5}
                                        style={{width: '100%'}}
                                        hintText="Enter Designation"
                                        onChange={this._fieldOnChange.bind(this,'userDesignation')}
                                        value={this.state.userDesignation}
                                        label="Designation"
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
                                        label="Confirm Password"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Confirm Password"
                                    />
                                    <br/>
                                </Cell>
                                <div style={Style.loginPage.userRegDivStyle}>
                                    <SaveButton label="Submit" type="submit"/>
                                </div>
                            </Grid>
                    </form>
                </div>
            </div>
        );
    }
}