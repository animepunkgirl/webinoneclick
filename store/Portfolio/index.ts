import {atom} from "recoil";
import PortfolioItem from "@Types/PortfolioItem";

const portfolioItemAtom = atom<PortfolioItem | null>({
  key: "portfolioItemAtom",
  default: null
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
  portfolioItemAtom,
  sidebarOpenAtom,
  sidebarAutoCloseAtom
}