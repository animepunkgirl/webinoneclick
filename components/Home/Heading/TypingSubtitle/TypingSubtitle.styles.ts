import styled, {css, keyframes} from "styled-components";

export const TextWrapper = styled.h3`
  height: 100%;
  position: relative;
`

interface CursorProps {
  typing: boolean,
  ending: boolean,
}

const flicking = keyframes`
  0% {
    visibility: visible;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
`

export const Cursor = styled.span<CursorProps>`
  position: absolute;
  top: 0;
  color: #ffcc00;
  height: 100%;
  right: ${p => p.typing || p.ending ? "-6px" : 0};
  animation: ${p => p.typing ? "none" : css`${flicking} 1s infinite`};
  pointer-events: none;
  user-select: none;
`