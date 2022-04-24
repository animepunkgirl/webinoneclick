import styled from "styled-components";

const Wrapper = styled.div`
  @font-face {
    font-family: 'Consolas';
    src: url('/fonts/consola.ttf') format('truetype');
  }
  
  background-color: ${p => p.theme.colors.lightBg};
  font-family: 'Consolas', monospace;

  .ReactCollapse--collapse {
    transition: height 500ms;
  }
`

export default Wrapper