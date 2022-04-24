import styled from "styled-components";


export const BackLink = styled.div`
  color: ${({theme}) => theme.colors.darkOrange};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  
  & > svg {
    fill: ${({theme}) => theme.colors.darkOrange};
  }
`