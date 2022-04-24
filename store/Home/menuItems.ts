import {atom} from "recoil";

export interface MenuItem {
  ref: HTMLElement | null,
  title: string
}


const menuItemsAtom = atom<MenuItem[]>({
  key: "menuItemsAtom",
  default: []
})

export default menuItemsAtom
