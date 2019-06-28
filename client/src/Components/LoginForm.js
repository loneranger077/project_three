import React, { Component } from "react";
import Auth from "../utils/Auth";
import { Link } from "react-router-dom";

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    Auth.logIn(username, password, data => console.log(data));
  };
  render() {
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              className="login-input"
              placeholder="Username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              className="login-input"
              placeholder="Password"
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.handleLoginSubmit.bind(this)}
          >
            <Link to={"/AppPage"}>Login</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default FormLogin;
