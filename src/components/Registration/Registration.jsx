import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/user';


export class Registration extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    registerUser: PropTypes.func,
  };

  state = {
    username: '',
    password: '',
    email: '',
    name: '',
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
              placeholder="Enter your password"
            />
          </label>
        </div>
        <div className="form-group">
          <label>Email
            <input
              type="email"
              className="form-control"
              name="email"
              onInput={this.onInputChange}
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div className="form-group">
          <label>Name
            <input
              type="text"
              className="form-control"
              name="name"
              onInput={this.onInputChange}
              placeholder="Enter your name"
            />
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.registerUser(this.state)}
        >
          Register
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  registerUser,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
