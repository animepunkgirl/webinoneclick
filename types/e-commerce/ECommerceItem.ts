import {StaticImageData} from "next/image";

export interface ECommerceItem {
  count?: number;
  name: string,
  image: StaticImageData,
  price: string,
}