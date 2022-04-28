import styled, {css} from "styled-components";

interface Props {
  isSlider: boolean
}

const Wrapper = styled.div<Props>`
  background-color: ${p => p.theme.colors.lightBg};
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;

  ${p => p.isSlider && css`
    overflow: hidden;
    height: 100vh;
  `}
  
  .ReactCollapse--collapse {
    transition: height 500ms;
  }
`

export default Wrapper