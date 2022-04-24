import styled from "styled-components";

interface ItemWrapperProps {
  sidebarOpen: boolean
}

const RowViewport = "41.875em";

export const ItemWrapper = styled.article<ItemWrapperProps>`
  flex: 1 1 auto;
  padding: 1rem 25px 5rem 25px;
  margin-left: ${({sidebarOpen}) => sidebarOpen ? "320px" : 0};
  transition: margin-left 0.5s ease;
  display: flex;
  gap: 3rem;
  flex-direction: column-reverse;
  @media (min-width: ${RowViewport}) {
    padding-top: 3rem;
    flex-direction: row;
    gap: 13px;
  }
  
  align-items: flex-start;
`

export const FileUnselectedWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 70vh;
  width: 100%;
`

export const DescriptionWrapper = styled.div`
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
  & > *:first-child {
    
    flex: 0 0 25px;
    @media (min-width: ${RowViewport}) {
      flex: 0 0 auto;
    }
  }
`

export const ImageLinkWrapper = styled.a`
  width: min(100%, 400px);
  margin: 0 auto;
  @media (min-width: ${RowViewport}) {
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
    content: attr(data-onhovertext);
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
  display: flex;
  flex-direction: column;
  margin: -13px 0 0 0;
  gap: 1rem;
  & > *::before {
    content: "-";
    color: ${({theme}) => theme.colors.purple}
  }
  
  @media (min-width: ${RowViewport}) {
    padding-left: 1rem;
  }
`