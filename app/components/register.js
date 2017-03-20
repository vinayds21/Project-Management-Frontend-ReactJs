/*
Author: Vinay D S
Page Desc: Company registration page
*/

import React from 'react';
import {hashHistory,Link} from 'react-router';
import {Grid, Cell} from 'react-mdl';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Style from '../constants/style';
import SaveButton from '../constants/savebutton';
import SecondarySaveButton from '../constants/secondarysavebutton';

import UserInfoStores from '../stores/UserInfoStores';
import * as LoginRegisterAction from '../actions/loginRegisterAction';

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
            errStr:'',
        }
    }

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    _handleSubmit(evt){
        evt.preventDefault();
        let compName = this.state.companyName;
        let compType = this.state.companyType;
        let compWeb = this.state.companyWeb;
        let add1 = this.state.addLine1;
        let add2 = this.state.addLine2;
        let compState = this.state.compState;
        let compCity = this.state.compCity;
        let pin = this.state.pin;

        if (!compName || !compType || !compWeb || !add1 || !add2 || !compState || !compCity || !pin) {
            this.setState({errStr:'Please fill all the fields'});
            return false;
        }

        let data = {
                name:compName, 
                company_type:compType,
                company_website:compWeb,
                address_line_1:add1,
                address_line_2:add2,
                state:compState,
                city:compCity,
                pin:pin
            };
        UserInfoStores.showLoader(true);
        LoginRegisterAction._companyRegister(data);
    }

    _fieldOnChange(type,event, value){
        if (type == 'companyName') {
            this.setState({companyName:value, errStr:''});
        }
        if (type == 'companyType') {
            this.setState({companyType:value, errStr:''});
        }
        if (type == 'companyWeb') {
            this.setState({companyWeb:value, errStr:''});
        }
        if (type == 'addLine1') {
            this.setState({addLine1:value, errStr:''});
        }
        if (type == 'addLine2') {
            this.setState({addLine2:value, errStr:''});
        }
        if (type == 'compState') {
            this.setState({compState:value, errStr:''});
        }
        if (type == 'compCity') {
            this.setState({compCity:value, errStr:''});
        }
        if (type == 'pin') {
            if(isNaN(value))
                return false;
            this.setState({pin:value, errStr:''});
        }
    }

    render() {  
        return(<div style={Style.loginPage.mainContainer}>
                <div style={Style.loginPage.leftContainerRegister}>
                    <div style={Style.loginPage.logoDivStyle}>
                        <div style={Style.loginPage.textBelowLogo}>Register Company</div>
                    </div>
                    <form onSubmit={this._handleSubmit.bind(this)}>
                            <Grid>
                                <Cell col={6}>
                                    <TextField
                                        id="name"
                                        key={1}
                                        style={{width: '100%'}}
                                        hintText="Enter Company Name"
                                        onChange={this._fieldOnChange.bind(this,'companyName')}
                                        autoFocus={true}
                                        value={this.state.companyName}
                                        label="Company Name"
                                        errorText={this.state.errStr}
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
                                        onChange={this._fieldOnChange.bind(this,'companyType')}
                                        value={this.state.companyType}
                                        errorText={this.state.errStr}
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
                                        onChange={this._fieldOnChange.bind(this,'companyWeb')}
                                        errorText={this.state.errStr}
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
                                        onChange={this._fieldOnChange.bind(this,'addLine1')}
                                        value={this.state.addLine1}
                                        errorText={this.state.errStr}
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
                                        onChange={this._fieldOnChange.bind(this,'addLine2')}
                                        value={this.state.addLine2}
                                        errorText={this.state.errStr}
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
                                        onChange={this._fieldOnChange.bind(this,'compState')}
                                        errorText={this.state.errStr}
                                        value={this.state.compState}
                                        label="State"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="State"
                                    />
                                    <TextField
                                        id="city"
                                        key={7}
                                        style={{width: '100%'}}
                                        hintText="Enter City"
                                        onChange={this._fieldOnChange.bind(this,'compCity')}
                                        errorText={this.state.errStr}
                                        value={this.state.compCity}
                                        label="City"
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="City"
                                    />
                                    <TextField
                                        id="pin"
                                        key={8}
                                        style={{width: '100%'}}
                                        hintText="Enter Pin"
                                        onChange={this._fieldOnChange.bind(this,'pin')}
                                        errorText={this.state.errStr}
                                        value={this.state.pin}
                                        label="pin"
                                        maxLength={10}
                                        underlineFocusStyle={Style.floatingUnderLineStyle}
                                        floatingLabelStyle={Style.loginPage.floatingTextStyle}
                                        floatingLabelFocusStyle={Style.floatingLabelStyle}
                                        floatingLabelText="pin"
                                    />
                                    <br/>
                                </Cell>
                                <div style={Style.loginPage.userRegDivStyle}>
                                    <SaveButton label="Next" type="submit"/><br/>
                                    <Link to="/">Back to login</Link>
                                </div>
                            </Grid>
                    </form>
                </div>
            </div>
        );
    }
}