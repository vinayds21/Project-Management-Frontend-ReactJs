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

import UserInfoStores from '../stores/UserInfoStores';
import * as UserInfoAction from '../actions/userinfoaction';

import DashboardStores from '../stores/dashboardStores';
import * as DashboardAction from '../actions/dashboardaction';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo:{},
            allProjects:[],
        }
        this._getUserStoreChange = this._getUserStoreChange.bind(this);
        this._getDashboardStoreChange = this._getDashboardStoreChange.bind(this);
    }

    componentWillMount(){
        Api._checkAuth();
        UserInfoAction.getUserInfo({user_id:Api._getKey('user_id')});
        DashboardAction.getProjects({org_id:Api._getKey('org_id')});

        UserInfoStores.on('change', this._getUserStoreChange);
        DashboardStores.on('change', this._getDashboardStoreChange);
    }

    _getUserStoreChange(type){
        if (type == 'userInfo') {
            let userInfo = UserInfoStores._getUserInfo();
            if (userInfo && Object.keys(userInfo).length) {
                console.log('userinfo', userInfo);
                this.setState({userInfo:userInfo});
            }
        }
    }

    _getDashboardStoreChange(type){
        if (type == 'org_projects') {
            let allProjects = DashboardStores._getAllOrgProjects();
            if (allProjects && allProjects.length) {
                console.log('allProjects',allProjects);
                this.setState({allProjects:allProjects})
            }
        }
    }    

    componentWillUnmount(){
        UserInfoStores.removeListener('change', this._getUserStoreChange);
        DashboardStores.removeListener('change', this._getDashboardStoreChange);
    }

    _getView(){
        return (<div>
                    <Header userName={this.state.userInfo.first_name+' '+this.state.userInfo.last_name}/>
                    <div>
                        <Grid>
                            <Cell col={6}>
                                
                            </Cell>
                            <Cell col={6}>
                                <Card expanded={true}>
                                    <CardHeader
                                      title="All Projects"
                                      subtitle="All the projects you are managining/working"
                                      actAsExpander={true}
                                      showExpandableButton={false}
                                    />
                                    <CardText expandable={true}>
                                        <div>
                                            <h5 style={{fontFamily:'Roboto-Medium'}}>User Delegation Project (<span style={{fontFamily:'Roboto-Light'}}>Number of Tasks: 4</span>)</h5>
                                        </div>
                                        <div>
                                            <h5 style={{fontFamily:'Roboto-Medium'}}>User Delegation Project (<span style={{fontFamily:'Roboto-Light'}}>Number of Tasks: 4</span>)</h5>
                                        </div>
                                        <div>
                                            <h5 style={{fontFamily:'Roboto-Medium'}}>User Delegation Project (<span style={{fontFamily:'Roboto-Light'}}>Number of Tasks: 4</span>)</h5>
                                        </div>
                                    </CardText>
                                    <CardActions>
                                      <FlatButton label="Create New Project" primary={true}/>
                                    </CardActions>
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