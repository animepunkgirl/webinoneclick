import styled from "styled-components";

const RowViewport = "41.875em";

export const CenteringWrapper = styled.div`
  text-align: center;
  width: 100%;
`

export const AnimatedLoader = styled.div`
  
  animation: Rotate 0.8s infinite;
  
  @keyframes Rotate {
    to {
      transform: rotate(360deg)
    }
  }
`

interface DescriptionWrapperProps {
  isPlaceholder: boolean
}

export const DescriptionWrapper = styled.div<DescriptionWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  flex: 1 0 60%;
  opacity: ${p => p.isPlaceholder ? 0.2 : 1};
  transition: opacity 0.2s ease;
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