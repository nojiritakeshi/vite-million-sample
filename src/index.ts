export type Props = Record<string, any>;

const HOLE_PROXY = new Proxy(
  {},
  {
    get(_, key: string) {
      return { $: key };
      // return key;
    },
  }
);
// eslint-disable-next-line
export const virtualBlock = (fn: (props: Props) => JSX.Element) => {
  //fnの引数をpropsとして受け取る
  return (props: Props) => {
    //fnの引数をpropsとして受け取る
    // console.log(fn);
    // console.log(fn({ pro: "background" }));
    // console.log(fn({ ...props, children: HOLE_PROXY }));
    return fn({ ...props, children: HOLE_PROXY });
  };
};
