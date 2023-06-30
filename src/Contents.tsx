import { FC } from "react";
type Props = {
  pro: string;
};
export const Contets: FC<Props> = ({ pro }) => (
  <div style={{ [pro]: "red" }}>akaiiiiiro</div>
);
