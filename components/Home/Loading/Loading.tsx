import React, {useEffect, useState, VFC} from 'react';
import { LoadingWrapper, Margin } from "./Loading.styles";
import { Text } from '@Home/UI';
import {homeTheme} from "@themes/Home.theme";

const Loading: VFC = () => {
  const [dots, setDots] = useState('')
  const [isThemeLoaded, setIsThemeLoaded] = useState(false)
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsHeaderLoaded(true)
    }, homeTheme.animations.headerLoading)

    setTimeout(() => {
      setIsThemeLoaded(true)
    }, homeTheme.animations.themeLoading)

  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if(dots.length === 3) {
        setDots('')
      } else {
        setDots(prev => prev + '.')
      }
    }, 200)

    return () => {
      clearInterval(interval)
    }
  }, [dots])

  const info = () => {
    if(!isHeaderLoaded)
      return "Building Header component"

    return isThemeLoaded ? "Initialize HomePage.tsx" : "Applying default theming"
  }

  return (
    <LoadingWrapper>
      <Text type="h2" color={"white"}>FAKE_LOADING{dots}</Text>
      <Margin />
      <Text type="p" color={"white"}>{info()}</Text>
    </LoadingWrapper>
  );
};

export default Loading;