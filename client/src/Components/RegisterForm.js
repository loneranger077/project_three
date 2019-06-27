import React, { Component } from "react";
import API from "../utils/API";
import Auth from "../utils/Auth";

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitRegister(e) {
    e.preventDefault();
    const userData = this.state;
    Auth.register(userData).then(data => console.log(data));
    // const { username, password, email } = this.state;
    // if (username && password && email) {
    //   Auth.logIn(username, password, response => {
    //     this.context.setUser(response);
    //     this.props.history.push("/");
    //   });
    // }
  }
  render() {
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              className="loing-input"
              placeholder="Username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              className="login-input"
              placeholder="Password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              className="login-input"
              placeholder="Email"
            />
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default FormRegister;
