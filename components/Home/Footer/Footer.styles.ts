import styled from "styled-components";

export const Flex = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Column = styled.div`
  flex: 1 0 auto;
  max-width: 500px;
  text-align: center;
`

export const Title = styled.div`
  text-align: center;
  margin-bottom: 1em;
  font-weight: 700;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  & > * {
    flex: 1 0 auto;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    & > * {
      width: 100%;
    }
  }
`