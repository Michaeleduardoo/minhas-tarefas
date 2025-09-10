
import { createGlobalStyle } from 'styled-components';

const GlobalSty = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8f9fa;
  }

  #root {
    min-height: 100vh;
  }

  button {
    font-family: inherit;
  }

  input {
    font-family: inherit;
  }
`;

export default GlobalSty