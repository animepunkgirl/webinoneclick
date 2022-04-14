import styled from "styled-components";

const Container = styled.div`
  max-width: ${p => p.theme.maxWidthContainer + 20}px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`

export default Container;