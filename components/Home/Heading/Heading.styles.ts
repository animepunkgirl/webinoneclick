import styled from "styled-components";
import { Container } from "@Home/UI";

export const HeadingContainer = styled(Container)`
  position: relative;
  justify-content: center;
`

export const Subtitle = styled.div`
  text-align: center;
  display: flex;
`

export const IconPosition = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 100%);
  animation: 
    color 2s infinite alternate, 
    appearing 1s forwards ${p => p.theme.animations.pageLoading}ms,
    moving 2s infinite alternate ${p => (p.theme.animations.pageLoading + 1000)}ms;
  
  width: 90px;
  height: 90px;
  @media (min-width: 500px) {
    width: 100px;
    height: 100px;
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
      transform: translate(-50%, 100%);
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
