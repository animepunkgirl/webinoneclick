import {css} from "styled-components";

export const prc = (percent1: number, percent2: number) => {
  return `${percent1/percent2*100}%`
}

export const adaptiveFont = (from: number, to: number) => {
  const addSize = from - to;
  const addMobSize = addSize + addSize * 0.7

  return css`
    font-size: ${from}px;
    @media (max-width: 767px) {
      font-size: calc(${to}px + ${addMobSize} * ((100vw - 320px) / ${p => p.theme.maxWidthContainer}));
    }

    @media (min-width: 767px) {
      font-size: calc(${to}px + ${addSize} * (100vw / ${p => p.theme.maxWidthContainer}));
    }
  `;
}