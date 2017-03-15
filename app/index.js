import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route,IndexRoute, IndexRedirect, hashHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigoA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({
	palette: {
		primary1Color: indigoA200,
    	primary2Color: indigoA200,
	},
});

// All pages includes here
import LoginTabs from './pages/loginTabs'
import Dashboard from './components/dashboard'
import Projects from './components/projects'
import Tasks from './components/tasks'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router history={hashHistory}>
		    <Route path="/" component={LoginTabs}>
                <Route path="/:loginTabs" component={LoginTabs}/>
            </Route>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/tasks" component={Tasks}/>
		</Router>
	</MuiThemeProvider>
), document.getElementById('app'));