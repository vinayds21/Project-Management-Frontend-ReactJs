import React from 'react';

/*--------Material components import-------------*/
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';


/*-------------Constant files import-----------------*/
import Api from '../constants/api';
import Styles from '../constants/style';

/*-------------Other own component files------------------*/
import Login from '../components/login';
import Register from '../components/register';
import UserRegister from '../components/userregister';
import Dashboard from '../components/dashboard';
import Profile from '../components/profile';
import Users from '../components/allusers';
import Projects from '../components/projects'

export default class AllTabs extends React.Component{
    render(){
        let app, project_id;
        let tabName = this.props.params.allTabs;
        if (this.props.location.query && Object.keys(this.props.location.query).length) {
            project_id = Object.keys(this.props.location.query)[0];
        }
        switch(tabName){
            case 'register':  app = (<Register/>);
                                    break;
            case 'userregister': app = (<UserRegister/>);
                                break;
            case 'dashboard': app = (<Dashboard/>);
                                break;
            case 'profile': app = (<Profile/>);
                                break;
            case 'users': app = (<Users/>);
                                break;
            case 'projects': app = (project_id ? <Projects project_id={project_id}/> : <Projects/>);
                            break;
            default: app = (<Login/>)
        }
        return (    
                <div style={{height:'100%'}}>
                    {app}
                </div>
        );
    }
}