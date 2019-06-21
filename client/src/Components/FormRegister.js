import React, { Component } from "react";

class FormRegister extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    isOnRegister: false
  };

  isOnRegister() {
    this.setState({ isOnRegister: true });
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert(
      `Username: ${this.state.username}\nPassword: ${
        this.state.password
      }\nEmail: ${this.state.email}`
    );
    this.setState({ username: "", password: "", email: "" });
  };

  render() {
    return (
      <form>
        <button onClick={this.isOnRegister}>Login</button>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default FormRegister;
