import {StaticImageData} from "next/image";

export default interface PortfolioItem {
  id: number,
  image: StaticImageData,
  isPetProject: boolean,
  title: string,
  url: string,
  description: string,
  features: string[],
  madeWith: string,
}