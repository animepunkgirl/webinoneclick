import {atom} from "recoil";
import PortfolioItem from "@Types/PortfolioItem";
import {portfolioItems} from "../portfolioItems";


interface PortfolioAtom {
  item: PortfolioItem | null,
  directory: string
}

const portfolioAtom = atom<PortfolioAtom>({
  key: "portfolioAtom",
  default: {
    item: null,
    directory: ""
  }
})

const sidebarOpenAtom = atom({
  key: "sidebarOpenAtom",
  default: true
})

//Close sidebar on file select
const sidebarAutoCloseAtom = atom({
  key: "sidebarAutoCloseAtom",
  default: false
})

export {
  portfolioAtom,
  sidebarOpenAtom,
  sidebarAutoCloseAtom
}