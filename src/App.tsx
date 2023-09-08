// import { block } from "million/react";
import { RowBlocks, RowBlock, Row } from "./BlockSample";
import "./App.css";
// import { Contets } from "./Contents";
// import { Outer } from "../Outer";

type Props = {
  adj: string;
};
function App() {
  // const RowB = block(({ adj }: Props) => <Row adjective={adj} />);
  const Simple = ({ adj }: Props) => <p>{adj}</p>;
  return (
    <>
      <RowBlocks />
      <RowBlock adjective="background" />
      {/* <RowB adj="aaaaaaa" /> */}
      <Simple adj="aaaaaaa" />
      <Row adjective="background" />
    </>
  );
}

export default App;
