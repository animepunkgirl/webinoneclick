import styled from "styled-components";


export const SystemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  justify-content: center;
  align-items: flex-start;
  font-size: ${({theme}) => theme.fontSize.md}rem;
`
export const Storage = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme}) => theme.colors.white};
  & > p {
    display: block;
  }
`

export const GapWrapper = styled.div`
  padding-left: 1rem;
`

interface FieldProps {
  isOpen: boolean
}

export const Field =styled.div<FieldProps>`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme}) => theme.colors.white};
  & {
    text-transform: lowercase;
  }
  font-weight: ${p => p.isOpen ? 600 : 400};
  &:hover {
    font-weight: 600;
  }
`