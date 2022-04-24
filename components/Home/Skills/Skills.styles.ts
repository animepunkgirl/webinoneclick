import styled, {css} from "styled-components";
import { prc } from "@helpers/mixins";

interface FlexProps {
  isWide: boolean
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 1.875em;
  ${p => p.isWide && css`
    & > * {
      flex-direction: row;
      max-width: 1100px;
      flex: 1 0 50%;
    }
  `}
`

export const Row = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
`

export const Column = styled.div`
  flex: 1 1 33.3333%;
`

export const Item = styled.div`
  color: ${p => p.theme.colors.white};
  line-height: ${prc(28,20)};
`

