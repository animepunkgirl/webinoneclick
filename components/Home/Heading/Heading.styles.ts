import styled, {css} from "styled-components";
import { Container } from "@Home/UI";

export const HeadingContainer = styled(Container)`
  position: relative;
  justify-content: center;
`

interface IconPositionProps {
  isBig: boolean
}

export const IconPosition = styled.div<IconPositionProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  animation: 
    color 2s infinite alternate, 
    appearing 2s forwards,
    moving 2s infinite alternate 2s;


  ${({isBig}) => isBig
    ? css`
      width: 100px;
      height: 100px;
    ` : css`
    width: 90px;
    height: 90px;
    `
  }
  
  @keyframes color {
    0% {
      fill: ${p => p.theme.colors.orange};
    }
    100% {
      fill: ${p => p.theme.colors.darkOrange};
    }
  }
  
  @keyframes appearing {
    0% {
      transform: translate(-50%, 500%);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
  
  @keyframes moving {
    0% {
      transform: translate(-50%, 0%);
    }
    50% {
      transform: translate(-50%, 10%);
    }
    100% {
      transform: translate(-50%, -10%);
    }
  }
`
