// import { FC } from "react";
import { Props, virtualBlock } from ".";
// type Props = {
//   pro: string;
// };
export const Contets = virtualBlock(({ pro, count }: Props) => (
  <div className={pro} style={{ [pro]: "red" }}>
    {pro}
    {count}
  </div>
));
