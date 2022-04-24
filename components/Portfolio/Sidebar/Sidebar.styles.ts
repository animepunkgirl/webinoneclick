import styled, {css} from "styled-components";


interface AsideProps {
  open: boolean
}

export const Aside = styled.aside<AsideProps>`
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  padding-top: 5.25rem;
  left: 0;
  transition: width 0.5s ease;  
  overflow-x: hidden;

  background: ${({theme}) => theme.colors.lightBg};
  width: ${({open}) => open ? "100vw" : 0};
  @media (min-width: 768px) {
    background: ${({theme}) => theme.colors.darkBg};
    width: ${({open}) => open ? "320px" : 0};
  }
`

export const Content = styled.div`
  width: 100vw;
  @media (min-width: 768px) {
    width: 320px;
  }
  padding: 0 10px;
`

export const Toggle = styled.div<AsideProps>`
  position: fixed;
  width: 2.7rem;
  height: 2.7rem;
  cursor: pointer;
  top: 4.25rem;
  display: grid;
  place-items: center;
  transition: transform 0.5s ease;
  left: 0;
  background: ${({theme}) => theme.colors.darkBg};
  z-index: 20;

  ${p => p.open ? css`
    transform: translateX(calc(100vw - 100%));
  ` : css`
    transform: translateX(-20%);
  `};
  
  @media (min-width: 768px) {
    ${p => p.open ? css`
    transform: translateX(calc(320px - 15%));
  ` : css`
    transform: translateX(-20%);
  `};
  }
`