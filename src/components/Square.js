import "../App.css";
import { Component } from "react";

class Square extends Component {
  render() {
    return <div className={this.props.cssClass}>{this.props.label}</div>;
  }
}
export default Square;
