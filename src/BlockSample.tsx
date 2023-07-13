import { block, For } from "../../million/packages/react";
// import { block, For } from "../../million/react";
// import { block, For } from "../../million/dist/react";
// import { block, For } from "million/react";
import { useState } from "react";

type Props = {
  adjective: string;
  color: string;
  noun: string;
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

export const RowBlock = block(({ adjective, color }: Props) => (
  <tr>
    <td style={{ [adjective]: color }}>{adjective}</td>
    <td className={`${adjective}_text`}>{`${adjective} test`}</td>
  </tr>
));

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
      {({ adjective, color, noun }) => (
        <RowBlock adjective={adjective} color={color} noun={noun} />
      )}
    </For>
  );
}
