import React, {useEffect} from "react";
import type { NextPage } from 'next'
import {ThemeProvider} from "styled-components";
import { homeTheme } from "@themes/Home.theme";
import Wrapper from "@Home/Home.styles"
import HomeHeader from "@Home/HomeHeader/HomeHeader";
import useMatchMedia from "@hooks/useMatchMedia";
import Home from "@Home/Home";
import HomeMobile from "@Home/HomeMobile";
import {useRecoilState} from "recoil";
import {isWideAtom} from "@store/Home";

const HomePage: NextPage = () => {
  const matches = useMatchMedia({ size: 40 }, { size: 32.5 })
  const [isWide, setIsWide] = useRecoilState(isWideAtom)

  useEffect(() => {
    setIsWide(matches)
  }, [setIsWide, matches])

  return (
    <ThemeProvider theme={homeTheme}>
          <Wrapper>
            <HomeHeader />
            {matches ? <Home /> : <HomeMobile />}
          </Wrapper>
      </ThemeProvider>
  )
}

export default HomePage
