import styled from "styled-components";

export const ContainerWithSidebar = styled.div`
  padding-top: 4.25rem;
  max-width: 100vw;
  min-height: 100vh;
`

interface PortfolioWrapperProps {
  sidebarOpen: boolean
}

export const PortfolioWrapper = styled.article<PortfolioWrapperProps>`
  flex: 1 1 auto;
  padding: 3rem 25px 0 25px;
  margin-left: ${({sidebarOpen}) => sidebarOpen ? "320px" : 0};
  transition: margin-left 0.5s ease;
  display: flex;

  flex-direction: column-reverse;
  @media (min-width: 670px) {
    flex-direction: row;
  }
  
  gap: 13px;
  align-items: flex-start;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  flex: 1 0 60%;
`
export const TextWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const ImageLinkWrapper = styled.a`
  width: 100%;
  
  @media (min-width: 670px) {
    flex: 0 1 50%;
  }
  position: relative;
  aspect-ratio: 1 / 1;
  border: 4px solid ${({theme}) => theme.colors.purple};
  border-radius: 3rem;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    width: 100%;
    opacity: 0;
  }
  
  &::before {
    background: ${({theme}) => theme.colors.gray};
  }
  &::after {
    content: attr(data-onHoverText);
    font-size: 1.5rem;
    text-decoration: underline;
    color: ${({theme}) => theme.colors.white};
    display: grid;
    place-items: center;
  }
  
  &:hover {
    &::before {
      opacity: 0.95;
    }
    
    &::after {
      opacity: 1;
    }
  }
`

export const Features = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  margin: -13px 0 0 0;
  gap: 1rem;
  & > *::before {
    content: "-";
    color: ${({theme}) => theme.colors.purple}
  }
`