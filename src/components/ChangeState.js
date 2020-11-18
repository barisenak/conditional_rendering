import "../App.css";
import { Component } from "react";
import Button from "./Button";

class ChangeState extends Component {
  state = {
    number: 0,
  };

  plus = () => {
    this.setState({ number: this.state.number + 1 });
  };

  minus = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <>
        <Button onClick={this.plus} label="plus" />
        <p>{this.state.number}</p>
        <Button onClick={this.minus} label="minus" />
      </>
    );
  }
}

export default ChangeState;
