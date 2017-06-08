import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const addChoresIcon = <FontIcon className="material-icons">add_circle_outline</FontIcon>;
const loginIcon = <FontIcon className="material-icons">account_box</FontIcon>;

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    }

    select(index) { this.setState({ selectedIndex: index }); }

    render() {
        return (
          <Paper zDepth={1}>
            {
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                  label="Add Chores"
                  icon={addChoresIcon}
                  onTouchTap={() => this.select(0)}
                />
                <BottomNavigationItem
                  label="Login"
                  icon={loginIcon}
                  onTouchTap={() => this.select(1)}
                />
              </BottomNavigation>
            }
          </Paper>
        );
    }
}

export default Menu;
