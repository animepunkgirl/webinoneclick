import React, {useEffect, useState} from "react";
import type { NextPage } from 'next'
import {ThemeProvider} from "styled-components";
import { homeLoadingTheme } from "@themes/HomeLoading.theme"
import { homeTheme } from "@themes/Home.theme";
import Header from "@Home/Header/Header"
import Wrapper from "@Home/Home.styles"
import Loading from "@Home/Loading/Loading";
import Home from "@Home/Home";

const HomePage: NextPage = () => {
  const [theme, setTheme] = useState(homeLoadingTheme())
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsHeaderLoaded(true)
    }, homeTheme.animations.headerLoading)

    setTimeout(() => {
      setTheme(homeTheme)
    }, homeTheme.animations.themeLoading)

    setTimeout(() => {
      setIsComplete(true)
    }, homeTheme.animations.pageLoading)
  }, [])


  return (
    <ThemeProvider theme={theme}>
          <Wrapper>
            {isHeaderLoaded && <Header />}
            {!isComplete && <Loading />}
            {isComplete && <Home />}
          </Wrapper>
      </ThemeProvider>
  )
}

export default HomePage
