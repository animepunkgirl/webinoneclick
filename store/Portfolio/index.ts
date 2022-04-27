import {atom} from "recoil";
import PortfolioItem from "@Types/PortfolioItem";
import {PortfolioItemListDTO} from "@Types/PortfolioItemListDTO";

const itemListAtom = atom<PortfolioItemListDTO[]>({
  key: "itemListAtom",
  default: []
})

const currentItemAtom = atom<number | null>({
  key: "currentItemAtom",
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
  itemListAtom,
  currentItemAtom,
  sidebarOpenAtom,
  sidebarAutoCloseAtom
}