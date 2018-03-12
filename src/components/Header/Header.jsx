import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'actions/user';

const Header = ({ user, logoutUser }) => (
  <header className="">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <span>Task 2</span>
      </NavLink>
      <ul className="nav justify-content-end w-100">
        {user
          ? <li>
            Welcome, <strong>{user.username}</strong>.
            Click to <span
            className="logout"
            onClick={logoutUser}
          >logout
            </span>
          </li>
          : <React.Fragment>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Log In</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>
          </React.Fragment>
        }
      </ul>
    </nav>

  </header>
);

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = ({ user }) => ({
  user,
});

const connectedHeader = connect(mapStateToProps, { logoutUser })(Header);

export default connectedHeader;
