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

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            mobile:'',
            password:''
        };
    }

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    _handleSubmit(evt){
        evt.preventDefault();
    }

    _fieldOnChange(){

    }

    render() {  
        return(<div style={Style.loginPage.mainContainer}>
                <div style={Style.loginPage.leftContainer}>
                    <div style={Style.loginPage.logoDivStyle}>
                        <div style={Style.loginPage.textBelowLogo}>Sign In</div>
                    </div>
                    <form onSubmit={this._handleSubmit} style={{textAlign:'center'}}>
                        <div style={{margin:40}}>
                            <TextField
                                id="mobile"
                                key={1}
                                style={{width: '100%'}}
                                hintText="Enter Mobile Number"
                                onChange={this._fieldOnChange}
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
                                hintText="Enter Password"
                                onChange={this._fieldOnChange}
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