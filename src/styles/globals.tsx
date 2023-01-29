import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStylesheet = createGlobalStyle`
  ${reset}

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "Object Sans";
    src: url("/fonts/ObjectSans-Heavy.otf");
    font-weight: 500;
  }
  
  @font-face {
    font-family: "Object Sans";
    src: url("/fonts/ObjectSans-Regular.otf");
    font-weight: 400;
  }

  p {
      ${({ theme }) => theme.typography("modal-title")};
  }
`;

export default GlobalStylesheet;
