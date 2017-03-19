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
import SaveButton from '../constants/savebutton';
import SecondarySaveButton from '../constants/secondarysavebutton';

export default class UserRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            fName:'',
            companyType:'',
            companyWeb:'',
            addLine1:'',
            addLine2:'',
            compState:'',
            compCity:'',
            pin:'',
        }
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
                <div style={Style.loginPage.leftContainerRegister}>
                    <div style={Style.loginPage.logoDivStyle}>
                        <div style={Style.loginPage.textBelowLogo}>Register First User</div>
                    </div>
                    <form onSubmit={this._handleSubmit} style={{textAlign:'center'}}>
                            <Grid>
                                <Cell col={6}>
                                    <TextField
                                        id="Fname"
                                        key={1}
                                        style={{width: '100%'}}
                                        hintText="Enter First Name"
                                        onChange={this._fieldOnChange}
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
                                        onChange={this._fieldOnChange}
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
                                        onChange={this._fieldOnChange}
                                        value={this.state.companyWeb}
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
                                        onChange={this._fieldOnChange}
                                        value={this.state.addLine1}
                                        label="Email Id"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Email Id"
                                    />
                                </Cell>
                                <Cell col={6}>
                                    <TextField
                                        id="designation"
                                        key={5}
                                        style={{width: '100%'}}
                                        hintText="Enter Designation"
                                        onChange={this._fieldOnChange}
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
                                        onChange={this._fieldOnChange}
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
                                        onChange={this._fieldOnChange}
                                        value={this.state.confirmPassword}
                                        label="Confirm Password"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Confirm Password"
                                    />
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div style={{float:'left'}}>
                                        <SaveButton label="Submit" type="submit"/>
                                    </div>
                                </Cell>
                            </Grid>
                    </form>
                </div>
            </div>
        );
    }
}