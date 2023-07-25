"use client";
// import { block, For } from "../../million/packages/react";
// import { block, For } from "../../million/react";
// import { block, For } from "../../million/dist/react";
import { block, For } from "million/react";
import { useState } from "react";

type Props = {
  adjective: string;
  color?: string;
  noun?: string;
};

export const UseStateBlock = block(() => {
  const [state, setState] = useState(0);

  return (
    <>
      <button onClick={() => setState(state + 1)} name="btn">
        click
      </button>
      <p className={`${state === 2 ? "abc" : "cde"}`}>{state}</p>
      <p style={{ color: state === 1 ? "red" : "black" }}>{state}</p>
      {/* <p style={{ color: `${state} === 1 ? 'red' : 'black'` }}>{state}</p> これはエラー クラス・スタイルでも全体をテンプレートリテラルで囲ったらエラーでるよ */}
    </>
  );
});

export const RowBlock = block(({ adjective }: Props) => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <p className={`${adjective}_text`}>{`${adjective} test`}</p>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)} name="btn">
        click
      </button>
    </div>
  );
});

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
