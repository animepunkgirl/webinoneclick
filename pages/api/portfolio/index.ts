import { NextApiHandler } from "next";
import {portfolioItems} from "@components/Api/Portfolio/portfolioItems";
import {PortfolioItemListDTO} from "@Types/PortfolioItemListDTO";

const createDTO = (): PortfolioItemListDTO[] => {
  return portfolioItems.map(({id, title, isPetProject}) => ({
    id,
    title,
    isPetProject
  }))
}
const getPortfolioItemList: NextApiHandler<PortfolioItemListDTO[]> = (req, res) => {
  if(req.method === "GET")
    return res.json(createDTO())
}

export default getPortfolioItemList;
