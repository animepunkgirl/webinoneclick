import styled, {css} from "styled-components";
import {prc} from "@helpers/mixins";
import { BreakpointProps } from "@Types/Pet-Slider";

export const Wrapper = styled.div<BreakpointProps>`
  height: 100%;
  width: 100%;
  .swiper {
    height: 100%;
    min-width: 0;
    margin: 0 auto;
  }
`

export const Item = styled.div<BreakpointProps>`
  position: relative;
  //margin-left: 50%;
  //transform: translateX(-50%);
  height: 100vh;
  width: 100vw;
  ${({isTablet}) => isTablet && css`
    margin-left: 0;
    height: 100%;
    transforM: translateX(0);
    padding-top: ${p => prc(944, p.theme.maxWidthContainer)};
    width: unset;
  `}
`
