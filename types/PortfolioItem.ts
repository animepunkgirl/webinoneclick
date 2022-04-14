import {ReactElement} from "react";
import {StaticImageData} from "next/image";

export default interface PortfolioItem {
  image: StaticImageData,
  isPetProject: boolean,
  title: string,
  url: string,
  description: string,
  features: string[],
  madeWith: string,
}