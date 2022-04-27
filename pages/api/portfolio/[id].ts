import { NextApiHandler } from "next";
import {portfolioItems} from "@components/Api/Portfolio/portfolioItems";
import PortfolioItem from "@Types/PortfolioItem";

interface Error {
  error: string
}
const getPortfolioItemInfo: NextApiHandler<PortfolioItem | Error> = (req, res) => {
  if(req.method !== "GET")
    return res.status(400).send( { error: "Incorrect method"} )

  const { id } = req.query;
  if(typeof id !== "string")
    return res.status(400).send( { error: "Incorrect Id" })

  const numberId = parseInt(id)
  if(isNaN(numberId))
    return res.status(400).send({ error: "Incorrect Id" })

  const item = portfolioItems.find(item => item.id === numberId)
  if(!item)
    return res.status(404).send({ error: "Item not found" })

  return res.json(item)
}

export default getPortfolioItemInfo;