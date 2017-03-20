/*
Author: Vinay D S
Page Desc: User Login Page
*/

import React from 'react';
import {hashHistory,Link} from 'react-router';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Style from '../constants/style';
import SaveButton from '../constants/savebutton';
import SecondarySaveButton from '../constants/secondarysavebutton';

import UserInfoStores from '../stores/UserInfoStores';
import * as LoginRegisterAction from '../actions/loginRegisterAction';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            mobile:'',
            password:'',
            mobileErr:'',
            passwordErr:'',
        };
    }

    _handleSubmit(evt){
        evt.preventDefault();
        let mobileNumber = this.state.mobile;
        let password = this.state.password;

        if (!mobileNumber || mobileNumber.length != 10) {
            this.setState({mobileErr:'Please enter a valid mobile number'});
            // UserInfoStores.showSnackbar('Please enter a valid mobile number');
            return false;
        }
        if (!password) {
            this.setState({passwordErr:'Please enter password'});
            // UserInfoStores.showSnackbar('Please enter password');
            return false;
        }

        let data = {mobile:mobileNumber, password:password};
        UserInfoStores.showLoader(true);
        LoginRegisterAction._userLogin(data);
    }

    _fieldOnChange(type, event, value){
        if (type == 'mobile') {
            if(isNaN(value))
                return false;
            this.setState({mobile:value,mobileErr:''});
        }
        if (type == 'password') {
            this.setState({password:value,passwordErr:''});
        }
    }

    render() {  
        return(<div style={Style.loginPage.mainContainer}>
                <div style={Style.loginPage.leftContainer}>
                    <div style={Style.loginPage.logoDivStyle}>
                        <div style={Style.loginPage.textBelowLogo}>Sign In</div>
                    </div>
                    <form onSubmit={this._handleSubmit.bind(this)} style={{textAlign:'center'}}>
                        <div style={{margin:40}}>
                            <TextField
                                id="mobile"
                                key={1}
                                style={{width: '100%'}}
                                hintText="Enter Mobile Number"
                                maxLength={10}
                                errorText={this.state.mobileErr}
                                onChange={this._fieldOnChange.bind(this,'mobile')}
                                autoFocus={true}
                                value={this.state.mobile}
                                label="Mobile Number"
                                underlineFocusStyle={Style.floatingUnderLineStyle}
                                floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                floatingLabelFocusStyle={Style.floatingLabelStyle}
                                floatingLabelText="Mobile Number"
                            />
                            <TextField
                                id="password"
                                key={2}
                                style={{width: '100%'}}
                                type="password"
                                hintText="Enter Password"
                                errorText={this.state.passwordErr}
                                onChange={this._fieldOnChange.bind(this,'password')}
                                value={this.state.password}
                                label="Password"
                                underlineFocusStyle={Style.floatingUnderLineStyle}
                                floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                floatingLabelFocusStyle={Style.floatingLabelStyle}
                                floatingLabelText="Password"
                            />
                            <br/>
                            <br/>
                            <div>
                                <SaveButton label="proceed" type="submit" btnSize="lg"/>
                            </div>
                            <br/>
                            <div>
                                <Link to="/register">Register company to start</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}