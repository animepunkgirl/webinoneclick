import styled from "styled-components";
import { prc } from "@helpers/mixins";

export const Flex = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 1.875em;
`

export const Row = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.875em;
  
  @media (min-width: 54.375em) {
    flex-direction: row;
    padding: 0 10vw;
    flex: 1 0 100%;
  }
`

export const Column = styled.div`
  flex: 1 1 33.3333%;
`

export const Item = styled.div`
  color: ${p => p.theme.colors.white};
  line-height: ${prc(28,20)};
`

