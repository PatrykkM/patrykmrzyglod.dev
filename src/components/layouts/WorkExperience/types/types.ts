import { StaticImageData } from "next/image";

export interface JobPositionTypes {
  name: string;
  time: string;
  img: StaticImageData;
  company: string;
  description: string;
}
