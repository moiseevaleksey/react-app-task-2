import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import style from 'stylesheet/main.scss';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import { checkUser } from '../../actions/user';

export class App extends React.Component {
  static propTypes = {
    checkUser: PropTypes.func,
  };

  componentDidMount() {
    this.props.checkUser();
  }

  render() {
    return (
      <div className={style.app}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, { checkUser })(App));
