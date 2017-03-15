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

export default class LoginTabs extends React.Component{
    constructor(){
        super();
    }

    componentWillMount(){
    }

    componentWillUnmount(){

    }

    render(){
        let app;
        let tabName = this.props.params.loginTabs;
        switch(tabName){
            case 'register':  app = (<Register/>);
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