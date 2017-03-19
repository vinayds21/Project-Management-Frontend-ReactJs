import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route,IndexRoute, IndexRedirect, hashHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {myCustomRed} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({
	palette: {
		primary1Color: myCustomRed,
    	primary2Color: myCustomRed,
	},
});

// All pages includes here
import AllTabs from './pages/alltabs';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router history={hashHistory}>
		    <Route path="/" component={AllTabs}>
                <Route path="/:allTabs" component={AllTabs}/>
            </Route>
		</Router>
	</MuiThemeProvider>
), document.getElementById('app'));