import "../App.css";
import { Component } from "react";

class DoubleConnecting extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={(event) => {
          this.setState({ text: event.target.value });
        }}
      />
    );
  }
}

export default DoubleConnecting;
