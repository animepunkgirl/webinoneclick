import styled from "styled-components";


const Divider = styled.h2`
  font-style: italic;
  font-size: ${p => p.theme.fontSize.sm}rem;
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
  color: ${p => p.theme.colors.gray};
  margin: 1.375em 0;

  &::before {
    content: '/*---------- ';
  }

  &::after {
    content: ' ----------*/';
  }

  &.small {
    @media (max-width: 20.5em) {
      &::before {
        content: '/*--------- ';
      }

      &::after {
        content: ' ---------*/';
      }
    }
  }

  @media (min-width: 28em) {
    &::before {
      content: '/*---------------- ';
    }
    &::after {
      content: ' ----------------*/';
    }
  }

  @media (min-width: 37.5em) {
    &::before {
      content: '/*----------------------- ';
    }
    &::after {
      content: ' -----------------------*/';
    }
  }  
`

export default Divider;