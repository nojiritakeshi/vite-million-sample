"use client";
// import { block, For } from "../../million/packages/react";
// import { block, For } from "../../million/react";
// import { block, For } from "../../million/dist/react";
import { block, For } from "million/react";
import { useState } from "react";
import { BtnBlock } from "./ChakraBtnBlock";

type Props = {
  adjective: string;
  color?: string;
  noun?: string;
};

export const Row = ({ adjective }: Props) => {
  const [num, setNum] = useState(1);
  const [bgValue, setBgValue] = useState("gray");
  const [colorVariation, setColorVariation] = useState("red");
  return (
    <div>
      <p
        style={{
          backgroundColor: colorVariation,
          color: bgValue,
          margin: num,
          padding: 10,
          opacity: num,
        }}
      >
        opacity{num}
        {adjective}
      </p>
      <button onClick={() => setNum(num - 0.1)} name="btn">
        set Number
      </button>
      <button onClick={() => setBgValue("red")} name="btn">
        setBgValue
      </button>
      <button onClick={() => setColorVariation("blue")} name="btn">
        setColorVariation
      </button>
      <BtnBlock />
    </div>
  );
};

export const RowBlock = ({ adjective }: Props) => {
  const [num, setNum] = useState(1);
  const [bgValue, setBgValue] = useState("gray");
  const [colorVariation, setColorVariation] = useState("red");
  return (
    <div>
      <p
        style={{
          backgroundColor: colorVariation,
          color: bgValue,
          padding: 10,
          margin: num,
          opacity: num,
        }}
      >
        opacity{num}
      </p>
      <button onClick={() => setNum(num - 0.1)} name="btn">
        click
      </button>
      <button onClick={() => setBgValue("red")} name="btn">
        setBgValue
      </button>
      <button onClick={() => setColorVariation("blue")} name="btn">
        setColorVariation
      </button>
    </div>
  );
};

export function RowBlocks() {
  const arr = [
    {
      adjective: "background",
      color: "blue",
      noun: "cat",
    },
    {
      adjective: "backgroundColor",
      color: "red",
      noun: "dog",
    },
    {
      adjective: "backgroundColor",
      color: "green",
      noun: "mouse",
    },
  ];
  return (
    <For each={arr}>
      {({ adjective }) => <RowBlock adjective={adjective} />}
    </For>
  );
}
