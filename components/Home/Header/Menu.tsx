import {useState, VFC} from "react"
import { Burger, Nav, List, Item, Link } from "./Menu.styles";
import {useRecoilState} from "recoil";
import { pageSlideAtom } from "@store/Home";

interface NavItem {
  title: string,
}

const NavItems: NavItem[] = [
  {
    title: "Heading",
  },
  {
    title: "Info"
  },
  {
    title: "Portfolio"
  }
]

const Menu: VFC = () => {
  const [activeBurger, setActiveBurger] = useState(false)
  const [pageSlide, setPageSlide] = useRecoilState(pageSlideAtom)

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
          {NavItems.map((item, i) =>
            <Item key={item.title}>
              <Link
                active={i === pageSlide}
                onClick={() => setPageSlide(i)}
              >
                {item.title}
              </Link>
            </Item>
          )}
        </List>
      </Nav>
    </>
  );
};

export default Menu;