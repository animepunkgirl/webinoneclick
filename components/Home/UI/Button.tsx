import styled from "styled-components";
import {FC} from "react";

const StyledButton = styled.button`
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

interface Props {
  className?: string,
  onClick?: () => void,
  margin?: string
}

const Button: FC<Props> = ({children, className, margin, onClick}) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      style={{
        margin
      }}
    >
      {children}
    </StyledButton>
  )
}

export default Button;