import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const addChoresIcon = <FontIcon className="material-icons">add_circle_outline</FontIcon>;
const loginIcon = <FontIcon className="material-icons">account_box</FontIcon>;

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const AddChores = () => (
  <div>
    <h2>AddChores</h2>
  </div>
);

const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
);

class Menu extends Component {

    constructor(props) {
        super(props);

        this.select = this.select.bind(this);

        this.state = {
            selectedIndex: 0,
        };
    }

    select(index, path) {
        this.setState({ selectedIndex: index });
        this.props.history.push(path);
    }

    render() {
        return (
          <div>
            <Paper zDepth={1}>
              {
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                  <BottomNavigationItem
                    label="Início"
                    icon={homeIcon}
                    onTouchTap={() => this.select(0, '/')}
                  />
                  <BottomNavigationItem
                    label="Add Chores"
                    icon={addChoresIcon}
                    onTouchTap={() => this.select(1, '/add')}
                  />
                  <BottomNavigationItem
                    label="Login"
                    icon={loginIcon}
                    onTouchTap={() => this.select(2, '/login')}
                  />
                </BottomNavigation>
              }
            </Paper>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/add" component={AddChores} />
            <Route path="/login" component={Login} />
          </div>
        );
    }
}

export default withRouter(Menu);
