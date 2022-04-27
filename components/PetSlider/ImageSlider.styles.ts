import styled from "styled-components";
import {prc} from "@helpers/mixins";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  .swiper {
    height: 100vh;  
    margin: 0 auto;
    @media (min-width: 768px) {
      max-width: 100vw;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 1500px) {
      max-width: 90vw;
    }
  }
`

export const Item = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100vmax;
  object-fit: cover;
  object-position: left;
  @media (min-width: 768px) {
    padding-top: ${p => prc(944, p.theme.maxWidthContainer)};
    width: 100vw;
  }
`
