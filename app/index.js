import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './home';


injectTapEventPlugin();

const App = () => (
  <Router>
    <MuiThemeProvider>
      <Home />
    </MuiThemeProvider>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
