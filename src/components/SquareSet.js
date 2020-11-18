import "../App.css";
import { Component } from "react";
import Square from "./Square";

class SquareSet extends Component {
  render() {
    return (
      <div className="App">
        <Square label="This is a big square" cssClass="bigSquare" />
        <Square label="This is a middle square" cssClass="middleSquare" />
        <Square label="This is a little square" cssClass="miniSquare" />
      </div>
    );
  }
}

export default SquareSet;
