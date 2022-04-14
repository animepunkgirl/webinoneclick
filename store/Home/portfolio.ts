import {atom} from "recoil";
import PortfolioItem from "../../types/PortfolioItem";
import {portfolioItems} from "../portfolioItems";


interface PortfolioAtom {
  open: 0 | 1,
  item: PortfolioItem,
  directory: string
}

const portfolioAtom = atom<PortfolioAtom>({
  key: "portfolioAtom",
  default: {
    open: 0,
    item: portfolioItems[0],
    directory: ""
  }
})

export default portfolioAtom