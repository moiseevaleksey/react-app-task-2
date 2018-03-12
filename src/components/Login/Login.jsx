import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user';


export class Login extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    loginUser: PropTypes.func,
  };

  state = {
    username: '',
    password: '',
  };

  componentWillReceiveProps = ({ user }) => {
    if (user) this.props.history.push('/');
  };

  onInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Username
            <input
              type="text"
              name="username"
              onInput={this.onInputChange}
              className="form-control"
              placeholder="Enter username"
            />
          </label>
        </div>
        <div className="form-group">
          <label>Password
            <input
              type="password"
              className="form-control"
              name="password"
              onInput={this.onInputChange}
              placeholder="Password"
            />
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.loginUser(this.state)}
        >
          Log in
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  loginUser,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
