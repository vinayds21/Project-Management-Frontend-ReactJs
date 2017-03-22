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
import Style from '../constants/style';
import Header from '../constants/header';
import {hashHistory, Link} from 'react-router';
import SaveButton from '../constants/savebutton';
import SecondarySaveButton from '../constants/secondarysavebutton';
import Api from '../constants/api';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

import UserInfoStores from '../stores/UserInfoStores';
import * as UserInfoAction from '../actions/userinfoaction';

export default class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo:{},
            orgUsers:[],
        }
        this._getUserStoreChange = this._getUserStoreChange.bind(this);
    }

    componentWillMount(){
        Api._checkAuth();
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
                console.log('userinfo', userInfo);
                this.setState({userInfo:userInfo});
            }
        }
        if (type == 'org_users') {
            let orgUsers = UserInfoStores._getOrgUsers();
            if (orgUsers && Object.keys(orgUsers).length) {
                this.setState({orgUsers:orgUsers});
            }
        }
    }

    _getUserView(){
        
    }

    _getView(){
        return (<div>
                    <Header userName={this.state.userInfo.first_name+' '+this.state.userInfo.last_name}/>
                    <div>
                        <Grid>
                            <Cell col={1}></Cell>
                            <Cell col={8}>
                                <Card expanded={true}>
                                    <CardText>
                                        {this._getUserView()}
                                    </CardText>
                                </Card>
                            </Cell>
                            <Cell col={1}></Cell>
                        </Grid>
                    </div>
                </div>);
    }

    render() {  
        return(<div>{this._getView()}</div>)
    }
}