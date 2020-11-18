import "../App.css";
import { useState } from "react";

const HookSetState = () => {
  let [number, setNumber] = useState(0);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>plus</button>
      {number}
      <button onClick={() => setNumber(number - 1)}>minus</button>
    </div>
  );
};

export default HookSetState;
