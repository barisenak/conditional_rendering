import "../App.css";
import React from "react";

class SignIn extends React.Component {
  state = {
    isSignedIn: false,
  };

  change = () => {
    const func = () => {
      this.setState({ isSignedIn: true });
    };
    setTimeout(func, 3000);
  };

  render() {
    return this.state.isSignedIn ? (
      <p>Hello!</p>
    ) : (
      <button onClick={this.change}>Sign In</button>
    );
  }
}

export default SignIn;
