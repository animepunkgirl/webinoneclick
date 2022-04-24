import styled, {css} from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: min(100% - 2rem, ${p => p.theme.maxWidthContainer}px);
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`

export default Container;