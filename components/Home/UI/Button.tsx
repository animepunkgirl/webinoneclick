import styled from "styled-components";
import {FC, ReactNode} from "react";

export const StyledButton = styled.button`
  font-size: 1.15rem;
  padding: 0.75em 0.625em;
  color: ${p => p.theme.colors.orange};
  border: 0.2em solid ${p => p.theme.colors.darkOrange};
  border-radius: 0.25em;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
      color: ${p => p.theme.colors.white};
      border-color: ${p => p.theme.colors.orange};
  }
`

export interface Props {
  onClick?: () => void,
  isLink?: boolean,
  children: ReactNode
}

const Button: FC<Props> = ({children, onClick}) => {

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button;