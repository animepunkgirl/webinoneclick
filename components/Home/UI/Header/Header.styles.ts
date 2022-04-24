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

export const HeaderContainer = styled(Container)`
  margin: 0 auto;
  width: min(100% - 2rem, ${p => p.theme.maxWidthContainer}px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: flex 0.3s ease;
  gap: 2rem;
`

export const Breadcrumb = styled.div`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.darkBg};
  padding: 0.25em 0.5em;
  font-size: ${({theme}) => theme.fontSize.sm}rem;
  border-radius: 0.1em;
`

