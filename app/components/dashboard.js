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
import SaveButton from '../constants/savebutton';
import SecondarySaveButton from '../constants/secondarysavebutton';


export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            userName:'Barry Allen',
        }
    }

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    _getView(){
        return (<div>
                    <Header userName={this.state.userName}/>
                    <div>
                        <Grid>
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
                            <Cell col={6}>
                                <Card expanded={true}>
                                    <CardHeader
                                      title="All My Tasks"
                                      subtitle="All the tasks assigned to me"
                                      actAsExpander={true}
                                      showExpandableButton={false}
                                    />
                                    <CardText expandable={true}>
                                        <div>
                                            <h5 style={{fontFamily:'Roboto-Medium'}}>User Delegation Task</h5>
                                        </div>
                                        <div>
                                            <h5 style={{fontFamily:'Roboto-Medium'}}>User Delegation Task</h5>
                                        </div>
                                        <div>
                                            <h5 style={{fontFamily:'Roboto-Medium'}}>User Delegation Task</h5>
                                        </div>
                                    </CardText>
                                    <CardActions>
                                      <FlatButton label="Add New Task" primary={true}/>
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