import "../App.css";
import React from "react";
import data from "./data.json";

class MassiveOfNames extends React.Component {
  render() {
    return (
      <>
        {data.map((item) => {
          return (
            <div className="names">
              <h3>{item.name.first}</h3>
              <h4>{item.name.last}</h4>
            </div>
          );
        })}
      </>
    );
  }
}

export default MassiveOfNames;
