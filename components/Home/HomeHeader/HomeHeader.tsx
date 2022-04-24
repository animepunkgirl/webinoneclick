import React, {useEffect, useState} from 'react';
import {Header, Logo} from "@Home/UI";
import {useRecoilState} from "recoil";
import { pageSlideAtom } from "@store/Home";
import Menu from "@Home/HomeHeader/Menu";

const HomeHeader = () => {
  const [larger, setLarger] = useState(true)
  const [dark, setDark] = useState(true)
  const [pageSlide] = useRecoilState(pageSlideAtom)

  useEffect(() => {
    setLarger(pageSlide === 0)
    setDark((pageSlide + 1) % 2 !== 0)
  }, [pageSlide])

  return (
    <Header larger={larger} dark={dark}>
      <Logo />
      <Menu />
    </Header>
  );
};

export default HomeHeader;