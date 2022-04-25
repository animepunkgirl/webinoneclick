import {useState, VFC} from "react"
import { Burger, Nav, List, Item, Link } from "./Menu.styles";
import {useRecoilState, useRecoilValue} from "recoil";
import {isWideAtom, pageSlideAtom} from "@store/Home";
import useMenu from "@hooks/useMenu";
import NavLink from "next/link";

const Menu: VFC = () => {
  const [activeBurger, setActiveBurger] = useState(false)
  const [pageSlide, setPageSlide] = useRecoilState(pageSlideAtom)
  const isWide = useRecoilValue(isWideAtom)
  const { getItemList, scrollToItem } = useMenu()
  const items = getItemList()

  const handleItemClick = (sectionTitle: string, sectionId: number) => {
    if(isWide) {
      return setPageSlide(sectionId)
    }

    setActiveBurger(false)
    return scrollToItem(sectionTitle)
  }

  return (
    <>
      <Burger
        active={activeBurger}
        onClick={() => setActiveBurger(!activeBurger)}
      >
        <span />
      </Burger>
      <Nav active={activeBurger}>
        <List>
          {items.map((item, i) =>
            <Item key={item.title}>
              <Link
                active={i === pageSlide}
                onClick={() => handleItemClick(item.title, i)}
                uppercase
              >
                {item.title}
              </Link>
            </Item>
          )}
          <Link>
            <NavLink href="/portfolio">/portfolio</NavLink>
          </Link>
        </List>
      </Nav>
    </>
  );
};

export default Menu;