import styled, {css} from "styled-components";


export const BackLink = styled.a`
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

interface AsideProps {
  open: boolean
}

export const SidebarToggle = styled.div<AsideProps>`
  position: absolute;
  width: 2.7rem;
  height: 2.7rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.5s ease;
  background: ${({theme}) => theme.colors.darkBg};
  z-index: 20;
  bottom: -2.7rem;
  left: 0;
  
  //Fullscreen sidebar
  ${p => p.open ? css`
    transform: translateX(calc(100vw - 100%));
  ` : css`
    transform: translateX(0%);
  `};
  
  @media (min-width: 768px) {
      ${p => p.open ? css`
    transform: translateX(calc(320px - 15%));
  ` : css`
    transform: translateX(-20%);
  `};
  }
`