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
import Dashboard from '../components/dashboard'
import Profile from '../components/profile'

export default class AllTabs extends React.Component{
    render(){
        let app;
        let tabName = this.props.params.allTabs;
        switch(tabName){
            case 'register':  app = (<Register/>);
                                    break;
            case 'userregister': app = (<UserRegister/>);
                                break;
            case 'dashboard': app = (<Dashboard/>);
                                break;
            case 'profile': app = (<Profile/>);
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