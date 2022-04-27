import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isWideAtom, MenuItem, menuItemsAtom } from "@store/Home";

const useMenu = () => {
  const [menuItems, setMenuItems] = useRecoilState(menuItemsAtom)
  const isWide = useRecoilValue(isWideAtom)

  //Update refs if needed
  useEffect(() => {
    setMenuItems([])
  }, [isWide])

  const itemExist = (menuItem: MenuItem) => {
    return menuItems.filter(current => current.title === menuItem.title).length > 0
  }

  const addSection = (menuItem: MenuItem) => {
    if(menuItem.ref === null)
      return

    if (!itemExist(menuItem)) {
      setMenuItems(prev => [...prev, menuItem])
    }
  }

  const getItem = (title: string) => {
    return menuItems.find(item => item.title === title)
  }

  const getItemList = () => {
    return menuItems
  }

  const scrollToItem = (itemTitle: string) => {
    const item = getItem(itemTitle)
    if(item)
      item.ref!.scrollIntoView({
        behavior: "smooth",
      })
  }

  return {
    addSection,
    getItemList,
    scrollToItem
  }
};

export default useMenu;