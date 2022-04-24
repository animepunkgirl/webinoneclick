import styled, {css} from "styled-components";

interface SectionProps {
  dark?: boolean,
  fullscreen?: boolean,
  noHeadingPadding?: boolean
}

const Section = styled.section<SectionProps>`
  width: 100vw;
  height: ${p => p.fullscreen ? "100vh" : "auto"};
  background: ${p => p.dark ? p.theme.colors.darkBg : p.theme.colors.lightBg};
  padding: 2rem 0;
  ${p => p.fullscreen && css`
    overflow: hidden;
  `}
  ${p => !p.noHeadingPadding && css`
    padding-top: 75px; //Header padding
    @media (min-width: 48em) and (min-height: 26.25em) {
      padding-top: 6rem;
    }
  `}
`

export default Section