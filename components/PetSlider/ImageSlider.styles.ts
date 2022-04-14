import styled from "styled-components";
import {prc} from "@helpers/mixins";

export const Wrapper = styled.div`
  .swiper {
    height: 100vh;
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
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  @media (min-width: 768px) {
    padding-top: ${p => prc(944, p.theme.maxWidthContainer)};
  }
`
