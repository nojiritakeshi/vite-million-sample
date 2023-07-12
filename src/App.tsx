import { RowBlock, UseStateBlock } from "./BlockSample";
import "./App.css";
// import { Contets } from "./Contents";
// import { Outer } from "../Outer";
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const obj = {
    adjective: "backgroundColor",
    color: "yellow",
    noun: ",noun",
  };
  // 原色７色
  // const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

  return (
    <>
      {/* <RowBlock
        adjective={obj.adjective}
        color={"red"}
        noun={"colors[state]"}
      /> */}
      {/* stateを1加算する */}
      {/* <button onClick={() => setState(state + 1)} name="btn">
        click
      </button> */}
      <UseStateBlock />
    </>
  );
}

export default App;
