import styled, {css} from "styled-components";
import {BreakpointProps} from "@Types/Pet-Slider";

export const ThemeSettings = styled.div`
  font-family: 'Roboto', sans-serif;
  background: url('/pet-slider/bg3.png') no-repeat center center fixed;
  background-size: cover;
`

export const Wrapper = styled.div`
  background: rgba(0,0,0, 0.7);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  place-items: center;
`

export const Container = styled.div<BreakpointProps>`
  margin: 0 auto;
  min-height: 0;
  min-width: 0;
  width: 100%;
  position: relative;

  height: 100vh;

  ${({isTablet}) => isTablet && css`
      max-width: 100vw;
      width: 100%;
      height: 100%;
    `}

  ${({isDesktop}) => isDesktop && css`
      max-width: 90vw;
      max-height: 90vh;
  `}
`
