/*
Author: Vinay D S
Page Desc: User Login Page
*/

import React from 'react';
import {hashHistory,Link} from 'react-router';
import {Grid, Cell} from 'react-mdl';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Style from '../constants/style';
import SaveButton from '../constants/savebutton';
import SecondarySaveButton from '../constants/secondarysavebutton';

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            companyName:'',
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
                        <div style={Style.loginPage.textBelowLogo}>Register Company</div>
                    </div>
                    <form onSubmit={this._handleSubmit} style={{textAlign:'center'}}>
                            <Grid>
                                <Cell col={6}>
                                    <TextField
                                        id="name"
                                        key={1}
                                        style={{width: '100%'}}
                                        hintText="Enter Company Name"
                                        onChange={this._fieldOnChange}
                                        autoFocus={true}
                                        value={this.state.companyName}
                                        label="Company Name"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Company Name"
                                    />
                                    <TextField
                                        id="compType"
                                        key={2}
                                        style={{width: '100%'}}
                                        hintText="Company Type (Eg. Private, Public Sector)"
                                        onChange={this._fieldOnChange}
                                        value={this.state.companyType}
                                        label="Company Type"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Company Type"
                                    />
                                    <TextField
                                        id="compWeb"
                                        key={3}
                                        style={{width: '100%'}}
                                        hintText="Enter Company Website"
                                        onChange={this._fieldOnChange}
                                        value={this.state.companyWeb}
                                        label="Company Website"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Company Website"
                                    />
                                    <TextField
                                        id="addrs1"
                                        key={4}
                                        style={{width: '100%'}}
                                        hintText="Enter Address Line 1"
                                        onChange={this._fieldOnChange}
                                        value={this.state.addLine1}
                                        label="Address Line 1"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Address Line 1"
                                    />
                                </Cell>
                                <Cell col={6}>
                                    <TextField
                                        id="addrs2"
                                        key={5}
                                        style={{width: '100%'}}
                                        hintText="Enter Address Line 2"
                                        onChange={this._fieldOnChange}
                                        value={this.state.addLine2}
                                        label="Address Line 2"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="Address Line 2"
                                    />
                                    <TextField
                                        id="state"
                                        key={6}
                                        style={{width: '100%'}}
                                        hintText="Enter State"
                                        onChange={this._fieldOnChange}
                                        value={this.state.compState}
                                        label="State"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="State"
                                    />
                                    <TextField
                                        id="city"
                                        key={6}
                                        style={{width: '100%'}}
                                        hintText="Enter City"
                                        onChange={this._fieldOnChange}
                                        value={this.state.compCity}
                                        label="City"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="City"
                                    />
                                    <TextField
                                        id="pin"
                                        key={7}
                                        style={{width: '100%'}}
                                        hintText="Enter Pin"
                                        onChange={this._fieldOnChange}
                                        value={this.state.pin}
                                        label="pin"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="pin"
                                    />
                                </Cell>
                            </Grid>
                            <div style={Style.loginPage.rightContainer}>
                                <SaveButton label="Next" type="submit"/>
                                <Link to="/">Back to login</Link>
                            </div>
                    </form>
                </div>
            </div>
        );
    }
}