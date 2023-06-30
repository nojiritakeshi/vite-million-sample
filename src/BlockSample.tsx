import { block } from "../../million/packages/react";
// import { block } from "million/react";

type RowProps = {
  adjective: string;
  color: string;
  noun: string;
};

export const RowBlock = block(({ adjective, color, noun }: RowProps) => {
  return (
    <tr>
      <td style={{ [adjective]: "red" }}>{adjective}</td>
      <td>{color}</td>
      <td>{noun}</td>
    </tr>
  );
});
