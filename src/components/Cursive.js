import React from "react";
import "../App.css";

class Cursive extends React.Component {
  state = {
    italic: false,
  };

  cursive = () => {
    this.state.italic === false
      ? this.setState({ italic: true })
      : this.setState({ italic: false });
  };

  render() {
    return (
      <p className={this.state.italic ? "cursive" : ""} onClick={this.cursive}>
        lorem ipsum
      </p>
    );
  }
}

export default Cursive;
