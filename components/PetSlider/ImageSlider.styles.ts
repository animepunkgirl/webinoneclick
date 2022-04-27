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
  height: 100vh;
  width: 100vw;
  ${({isTablet}) => isTablet && css`
    height: 100%;
    padding-top: ${p => prc(944, p.theme.maxWidthContainer)};
    width: unset;
  `}
`
