import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Style from './style';

export default class Header extends React.Component{

    render(){
        let userName = this.props.userName;
        return(<AppBar
                  title={<span style={{fontSize:'18px', fontFamily:'Roboto-Medium', color:'white'}}>Project And Task Management</span>}
                  iconElementLeft={<div></div>}
                  iconElementRight={<div style={{fontFamily:'Roboto-Medium', marginTop:'14px', color:'white'}}><h4>Welcome, {userName}</h4></div>}
                />
        );
    }
}