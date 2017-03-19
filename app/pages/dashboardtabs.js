import React from 'react';

/*--------Material components import-------------*/
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';


/*-------------Constant files import-----------------*/
import Api from '../constants/api';
import Styles from '../constants/style';

/*-------------Other own component files------------------*/
import Dashboard from '../components/dashboard';
import Project from '../components/projects';

export default class DashboardTabs extends React.Component{
    constructor(){
        super();
    }

    componentWillMount(){
    }

    componentWillUnmount(){

    }

    render(){
        let app;
        let tabName = this.props.params.dashboardTab;
        console.log('hey here', tabName);
        switch(tabName){
            case 'project':  app = (<Project/>);
                                    break;
            default: app = (<Dashboard/>)
        }
        return (
                <div style={{height:'100%'}}>
                    {app}
                </div>
        );
    }
}