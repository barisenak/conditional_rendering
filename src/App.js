import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    isSignedIn: false,
  };

  change = () => {
    this.setState({ isSignedIn: true });
    setTimeout(this.change, 3000);
  };

  render() {
    return this.state.isSignedIn ? (
      <p>Hello!</p>
    ) : (
      <button onClick={this.change}>Sign In</button>
    );
  }
}

export default App;
