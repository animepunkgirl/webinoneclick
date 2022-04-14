import styled from "styled-components";

export const LoadingWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  padding: 0 !important;
  position: relative;
  background-color: ${p => p.theme.colors.lightBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Margin = styled.div`
  padding: 0.5rem;
`