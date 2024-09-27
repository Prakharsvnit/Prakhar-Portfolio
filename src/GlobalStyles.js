import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }

  a {
    color: #0077b5;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    /* Add responsive styles here */
  }
`;

export default GlobalStyles;
