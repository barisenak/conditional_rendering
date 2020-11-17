import "../App.css";
import React from "react";

class RenderingWithConditions extends React.Component {
  state = {
    loading: false,
    greeting: "",
  };

  func = () => {
    this.setState({ loading: true });
    const sayHi = () => {
      this.setState({ greeting: "Hello!" });
      this.setState({ loading: false });
    };
    setTimeout(sayHi, 3000);
  };

  render() {
    return (
      <>
        <button onClick={this.func}>Say hi</button>
        {this.state.loading && <div className="loader"></div>}
        {this.state.greeting !== "" && <p>{this.state.greeting}</p>}
      </>
    );
  }
}

export default RenderingWithConditions;
