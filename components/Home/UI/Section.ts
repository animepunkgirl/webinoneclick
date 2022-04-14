import styled from "styled-components";
import {MutableRefObject} from "react";

interface SectionProps {
  dark?: boolean,
  ref?: MutableRefObject<HTMLDivElement | null>,
  noPadding?: boolean
}

const Section = styled.section<SectionProps>`
  width: 100vw;
  height: 100vh;
  padding-top: ${p => p.noPadding ? 0 : "5.75rem"};
  background: ${p => p.dark ? p.theme.colors.darkBg : p.theme.colors.lightBg};
`

export default Section