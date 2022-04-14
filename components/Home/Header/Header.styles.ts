import styled, {css} from "styled-components";
import { Container } from "@Home/UI";
import { Typography } from "@themes/Home.theme";
import { prc } from "@helpers/mixins";

interface LargerProp {
  larger: boolean
}

interface DarkProp {
  dark: boolean
}

interface JustifyContent {
  justifyContent: "space-between" | "flex-start"
}

interface WrapperProp extends LargerProp, DarkProp { }

export const Wrapper = styled.header<WrapperProp>`
    background-color: ${p => p.dark ? p.theme.colors.darkBg : p.theme.colors.lightBg};
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    font-size: 1.25rem;
    padding: 0.75em 0;
    transition: padding 0.3s ease, background-color 0.3s ease;
    
    @media (min-width: 48em) and (min-height: 26.25em) {
      font-size: 1.5rem;
      ${p => p.larger && css`
          padding: 0.8572em 0;
          font-size: 1.75rem;
      `}
    }
`

export const HeaderContainer = styled(Container)<JustifyContent>`
  display: flex;
  flex-direction: row;
  justify-content: ${(p) => p.justifyContent};
  align-items: center;
  transition: flex 0.3s ease;
  gap: 2rem;
`

export const Back = styled.div`
  color: ${({theme}) => theme.colors.darkOrange};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  
  & > svg {
    fill: ${({theme}) => theme.colors.darkOrange};
  }
`

export const Breadcrumb = styled.div`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.darkBg};
  padding: 0.25em 0.5em;
  font-size: ${({theme}) => theme.fontSize.sm}rem;
  border-radius: 0.1em;
`

export const Title = styled.h1`
    ${Typography.commented}
    cursor: pointer;
    z-index: 5;
    color: ${p => p.theme.colors.white};
    padding: 5px 0;
    line-height: ${prc(30,28)};
    text-transform: uppercase;
    font-weight: 700;
    transition: font-size 0.3s ease;
`

export const CenteringTitle = styled.div`
    flex: 1 1 auto;
`