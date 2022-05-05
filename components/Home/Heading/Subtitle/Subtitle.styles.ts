import styled, {css} from "styled-components";

interface Props {
  isCursorFlickering: boolean,
  hideCursor: boolean
}

export const Typing = styled.div<Props>`
  position: relative;
  white-space: nowrap;
  
  & > h2::after {
    content: "\\007C";
    position: relative;
    color: #ffcc00;
    left: -0.25em;
    ${({isCursorFlickering}) => isCursorFlickering && css`
      animation: flickering 1s linear infinite;
    `}
    ${({hideCursor}) => hideCursor && css`
      opacity: 0;
    `}
  }

  @keyframes flickering {
    0% {
      visibility: visible;
    }
    50% {
      visibility: hidden;
    }
    100% {
      visibility: hidden;
    }
  }
  
  & .bracket {
    color: ${({theme}) => theme.colors.cyan};
  }
  & .constant {
    color: ${({theme}) => theme.colors.purple};
  }
  & .placeholder {
    color: ${({theme}) => theme.colors.lightBg};
  }
`
