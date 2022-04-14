import Image from "next/image";

import LoginIcon from "../../public/e-commerce/header/login-icon.svg";
import ArrowIcon from "../../public/e-commerce/header/arrow-icon.svg";

import React, {useEffect, useRef, useState} from "react";
import useDynamicAdaptive from "../../hooks/useDynamicAdaptive";
import Basket from "./Basket";
import Wishlist from "./Wishlist";
import HeaderSearch from "./HeaderSearch";
import Link from "next/link";

const Header = () => {
  const {portalNode, defaultOut, matchesOut, Wrapper} = useDynamicAdaptive("menu_options", 768)

  const header = useRef<HTMLDivElement>(null);
  //Change header size
  useEffect(() => {
    const scrollListener = () => {
      if(header.current) {
        if (window.scrollY < 20) {
          header.current.classList.add("larger")
        } else {
          header.current.classList.remove("larger")
        }
      }
    }
    document.addEventListener('scroll', scrollListener)
  }, [])


  //Menu burger
  const menuBody = useRef<HTMLDivElement>(null)
  const burgerIcon = useRef<HTMLButtonElement>(null);
  const [activeBurger, setActiveBurger] = useState(false)
  useEffect(() => {
    if(menuBody.current && burgerIcon.current) {
      if (activeBurger) {
        document.body.classList.add('_lock')
        menuBody.current.classList.add('_active')
        burgerIcon.current.classList.add('_active')
      } else {
        document.body.classList.remove('_lock')
        menuBody.current.classList.remove('_active')
        burgerIcon.current.classList.remove('_active')
      }
    }
  }, [activeBurger])

  const closeBurgerMenu = () => {
    if(activeBurger)
      setActiveBurger(!activeBurger)
  }

  const handleSubmenu = (e: React.MouseEvent<HTMLLIElement>) => {
    const allActive = document.body.querySelectorAll('.header__menu-link.active')
    allActive.forEach((el) => {
      if(el != e.currentTarget)
        el.classList.remove('active')
    })
    e.currentTarget.classList.toggle('active')
  }

  return (
    <>
      <header className="header">
        <div className="header__container larger" ref={header}>
          <div className="header__contacts">
            <a href="mailto:mukhametshin.work@gmail.com" className="header__email">
              mukhametshin.work@gmail.com
            </a>
            <a href="tel:123456789" className="header__phone">
              (12345)6789
            </a>
          </div>
          <ul className="header__menu">
            {portalNode && <Wrapper node={portalNode}>
                <li className="header__menu-link" onClick={(e) => handleSubmenu(e)}>
                    English
                    <span className="header__arrow">
                      <Image src={ArrowIcon} layout="fill"/>
                    </span>
                    <div className="header__sub-menu">
                        <form>
                            <input type="radio" value="Russian" name="language" id="radio_russian"/>
                            <label htmlFor="radio_russian">Russian</label>
                            <input type="radio" value="German" name="language" id="radio_german"/>
                            <label htmlFor="radio_german">German</label>
                        </form>
                    </div>
                </li>
                <li className="header__menu-link" onClick={(e) => handleSubmenu(e)}>
                    USD
                    <span className="header__arrow">
                      <Image src={ArrowIcon} layout="fill"/>
                    </span>
                    <div className="header__sub-menu items-end">
                        <form>
                            <input type="radio" value="Rubles" name="language" id="radio_rubles"/>
                            <label htmlFor="radio_rubles">Rubles</label>
                            <input type="radio" value="Euro" name="language" id="radio_euro"/>
                            <label htmlFor="radio_euro">Euro</label>
                        </form>
                    </div>
                </li>
            </Wrapper>}
            {defaultOut}
            <li className="header__menu-link">
              <a href="#">
                Login
                <div className="header__icon">
                  <Image src={LoginIcon} />
                </div>
              </a>
            </li>
            <Wishlist />
            <Basket />

            <button
              className="header__burger"
              ref={burgerIcon}
              onClick={() => setActiveBurger(!activeBurger)}
            >
              <span />
            </button>
          </ul>
        </div>
      </header>
      <nav className="nav">
        <div className="nav__container">
          <Link href="/">
            <a className="nav__logo">WIOC</a>
          </Link>

          <div className="nav__menu-body" ref={menuBody} onClick={() => closeBurgerMenu()}>
            <ul className="nav__menu">
              <li><a href="#" className="nav__link _active">Home</a></li>
              <li><a href="#" className="nav__link">Pages</a></li>
              <li><a href="#" className="nav__link">Products</a></li>
              <li><a href="#" className="nav__link">Blog</a></li>
              <li><a href="#" className="nav__link">Shop</a></li>
              <li><a href="#" className="nav__link">Contact</a></li>
              {matchesOut}
            </ul>
          </div>
          <HeaderSearch />
        </div>
      </nav>
    </>
  );
};

export default Header;