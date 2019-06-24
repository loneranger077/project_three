import React, { Component } from "react";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false };
  }

  showLoginForm = () => {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  };

  showRegisterForm = () => {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  };

  render() {
    return (
      <div className="root-container">
        <div className="box-container">
          <button onClick={this.showLoginForm}>Login</button>
          <button onClick={this.showRegisterForm}>Register</button>
        </div>

        {this.state.isLoginOpen ? <FormLogin /> : null}
        {this.state.isRegisterOpen ? <FormRegister /> : null}
      </div>
    );
  }
}

export default Container;
