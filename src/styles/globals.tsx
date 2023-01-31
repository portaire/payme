import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStylesheet = createGlobalStyle`
  ${reset}

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
  }

  p {
    color: ${(props) => props.theme.colors.text};
  }

  @font-face {
    font-family: "Object Sans";
    src: url("/fonts/PPObjectSans-Heavy.otf");
    font-weight: 600;
  }
  
  @font-face {
    font-family: "Object Sans";
    src: url("/fonts/PPObjectSans-Regular.otf");
    font-weight: 500;
  }

  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }

  .App {
    height: 100vh;
    width: 100vw;
    display: flex;
    place-items: center;
    place-content: center;
  }
`;

export default GlobalStylesheet;
