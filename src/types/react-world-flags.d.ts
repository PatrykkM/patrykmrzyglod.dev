declare module "react-world-flags" {
  import { ComponentType } from "react";

  interface FlagProps {
    code: string;
    height?: number | string;
    width?: number | string;
    [key: string]: string | number | undefined;
  }

  const Flag: ComponentType<FlagProps>;
  export default Flag;
}
