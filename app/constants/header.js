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
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {
          open:false,
        }
        this._logout = this._logout.bind(this);
    }

    _logout(){
        Api._clearStorage();
        hashHistory.replace('/');
    }

    render(){
        let userName = this.props.userName;
        return(<div>
                  <AppBar
                    title={<span style={{fontSize:'18px', fontFamily:'Roboto-Light', color:'white'}}>Project And Task Management</span>}
                    iconElementLeft={<i style={{color:'white', padding:14, cursor:'pointer'}} className="material-icons" onClick={()=>{this.setState({open: !this.state.open})}}>menu</i>}
                    iconElementRight={<div style={{fontSize:'18px', fontFamily:'Roboto-Light', color:'white', padding:14}}>
                                        <div>Welcome, {userName}</div>
                                      </div>}
                  />
                  <Drawer open={this.state.open} style={{fontSize:'18px', fontFamily:'Roboto-Light'}}>
                    <AppBar title={<span style={{fontSize:'18px', fontFamily:'Roboto-Light', color:'white'}}>Main Menu</span>} iconElementLeft={<div></div>}/>
                    <MenuItem onClick={()=>{this.setState({open: !this.state.open})}} leftIcon={<RemoveRedEye />}>Collapse</MenuItem>
                    <MenuItem >Profile</MenuItem>
                    <MenuItem onClick={this._logout.bind(this)}>Log Out</MenuItem>
                  </Drawer>
                </div>
        );
    }
}