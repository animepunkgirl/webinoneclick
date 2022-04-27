import {createGlobalStyle} from "styled-components";


const NProgressStyles = createGlobalStyle`
  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #c792ea;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 5px;
  }
`

export default NProgressStyles