import React from 'react';
import { withRouter } from 'react-router';
import Menu from '../components/menu';

const Login = () => (
  <div>
    <Menu />
    <h2>Login</h2>
  </div>
);

export default withRouter(Login);
