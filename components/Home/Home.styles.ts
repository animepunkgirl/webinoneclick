import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.lightBg};
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;

  .ReactCollapse--collapse {
    transition: height 500ms;
  }
`

export default Wrapper