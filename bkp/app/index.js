import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/menu';
import Home from './containers/home';
import AddChores from './containers/add-chores';
import Login from './containers/login';


injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Menu />
        <Route exact={true} path="/" component={Home} />
        <Route path="/add" component={AddChores} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
