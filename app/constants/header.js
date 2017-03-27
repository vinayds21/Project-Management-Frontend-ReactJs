import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Style from './style';
import Api from './api';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {hashHistory, Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import People from 'material-ui/svg-icons/social/people';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Power from 'material-ui/svg-icons/action/power-settings-new';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {
          open:false,
          value:3
        }
        this._logout = this._logout.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    _logout(){
        Api._clearStorage();
        hashHistory.replace('/');
    }

    handleChange(event, index, value){
        this.setState({value});
    }

    render(){
        let userName = this.props.userName;
        return(<div>
                  <AppBar
                    title={<span style={{fontSize:'18px', fontFamily:'Roboto-Light', color:'white', cursor:'pointer'}} onClick={()=>{hashHistory.push('/dashboard')}}>Project And Task Management</span>}
                    iconElementLeft={<i style={{color:'white', padding:14, cursor:'pointer'}} className="material-icons" onClick={()=>{this.setState({open: !this.state.open})}}>menu</i>}
                    iconElementRight={<div onClick={()=>{hashHistory.push('/profile')}} style={{fontSize:'18px', fontFamily:'Roboto-Light', color:'white', padding:14, cursor:'pointer'}}>
                                        <div>Welcome, {userName}</div>
                                      </div>}
                  />
                  <Toolbar style={{background:'#dadada'}}>
                    <ToolbarGroup firstChild={true}>
                        <FlatButton
                          style={{margin:'0px 5px'}}
                          label="Create Project"
                          secondary={true}
                          rippleColor='none'
                          onClick={()=>{hashHistory.push('/projects')}}
                        />
                        <ToolbarSeparator/>
                        <FlatButton
                          label="Create Task"
                          secondary={true}
                          rippleColor='none'
                        />
                    </ToolbarGroup>
                  </Toolbar>
                  <Drawer open={this.state.open} style={{fontSize:'18px', fontFamily:'Roboto-Light'}}>
                    <AppBar title={<span style={{fontSize:'18px', fontFamily:'Roboto-Light', color:'white'}}>Main Menu</span>} iconElementLeft={<div></div>}/>
                    <MenuItem onClick={()=>{this.setState({open: !this.state.open})}} leftIcon={<ArrowBack/>}>Collapse</MenuItem>
                    <MenuItem onClick={()=>{hashHistory.push('/profile')}} leftIcon={<AccountCircle/>}>Profile</MenuItem>
                    <MenuItem onClick={()=>{hashHistory.push('/users')}} leftIcon={<People/>}>Users</MenuItem>
                    <MenuItem leftIcon={<Power/>} onClick={this._logout.bind(this)}>Log Out</MenuItem>
                  </Drawer>
                </div>
        );
    }
}