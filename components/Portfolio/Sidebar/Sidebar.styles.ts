import styled from "styled-components";

interface AsideProps {
  open: boolean
}

export const Aside = styled.aside<AsideProps>`
  height: 100vh;
  position: fixed;
  z-index: 99;
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