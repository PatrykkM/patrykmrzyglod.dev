declare module "react-world-flags" {
  import { FC } from "react";

  interface FlagProps {
    code: string;
    [key: string]: any;
  }

  const Flag: FC<FlagProps>;
  export default Flag;
}
