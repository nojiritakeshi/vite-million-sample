import { RowBlock } from "./BlockSample";
import "./App.css";
import { Contets } from "./Contents";

function App() {
  const obj = {
    adjective: "backgroundColor",
    color: "string",
    noun: "string",
  };

  return (
    <>
      <RowBlock adjective={obj.adjective} color={obj.color} noun={obj.noun} />
      <Contets pro={obj.adjective} />
    </>
  );
}

export default App;
